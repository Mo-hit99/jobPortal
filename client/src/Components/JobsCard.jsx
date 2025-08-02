import React, { useState, useEffect, useRef } from "react";
import { NavLink, useSearchParams } from "react-router";
import { jobsAPI, applicationsAPI, getErrorMessage, ERROR_MESSAGES } from "../services/api";
import { useSelector } from "react-redux";
import ApplyJobButton from "./ApplyJobButton";

export default function JobsCard() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");
  const { user } = useSelector((state) => state.auth);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filters, setFilters] = useState({
    salary: "",
    experience: "",
    jobType: ""
  });
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6; // You can adjust this number
  const [jobs, setJobs] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [totalJobs, setTotalJobs] = useState(0);
  const [filterOpen, setFilterOpen] = useState(false);
  const filterRef = useRef(null);
  const [appliedJobIds, setAppliedJobIds] = useState([]);
  const [appliedUsersCount, setAppliedUsersCount] = useState({});

  // Fetch jobs on component mount
  useEffect(() => {
    fetchJobs();
    if (user?.role === "Student") {
      applicationsAPI.getAppliedJobs().then(res => {
        setAppliedJobIds(res.data.map(app => app.job?._id).filter(Boolean));
      }).catch((error) => {
        const errorMessage = getErrorMessage(error, ERROR_MESSAGES.FETCH_APPLICATIONS);
        console.error('Error fetching applied jobs:', errorMessage);
        setAppliedJobIds([]);
      });
    }
    // eslint-disable-next-line
  }, [searchQuery, currentPage, user]);

  // Fetch applied users count for each job after jobs are loaded
  useEffect(() => {
    if (!jobs || jobs.length === 0) return;
    let isMounted = true;
    const fetchCounts = async () => {
      const counts = {};
      await Promise.all(
        jobs.map(async (job) => {
          try {
            // Assuming getAppliedJobs can take a jobId as a param
            const res = await applicationsAPI.getAppliedJobs({ jobId: job._id });
            counts[job._id] = Array.isArray(res.data) ? res.data.length : 0;
          } catch {
            counts[job._id] = 0;
          }
        })
      );
      if (isMounted) setAppliedUsersCount(counts);
    };
    fetchCounts();
    return () => { isMounted = false; };
  }, [jobs]);

  // Close filter panel when clicking outside (on mobile)
  useEffect(() => {
    if (!filterOpen) return;
    function handleClick(e) {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setFilterOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [filterOpen]);

  const fetchJobs = async (keyword = "") => {
    setLoading(true);
    setError("");
    try {
      // Build query params for filters
      let params = {
        page: currentPage,
        limit: jobsPerPage,
      };
      if (keyword || searchQuery) {
        params.keyword = keyword || searchQuery;
      }
      // Optionally, add filter params to the API call if your backend supports them
      // params.salary = filters.salary; params.experience = filters.experience; params.jobType = filters.jobType;
      const response = await jobsAPI.getAllJobs(params);
      // response.data: { jobs, totalJobs, currentPage, totalPages, pageSize }
      setJobs(Array.isArray(response.data.jobs) ? response.data.jobs : []);
      setTotalPages(response.data.totalPages || 1);
      setTotalJobs(response.data.totalJobs || 0);
    } catch (error) {
      const errorMessage = getErrorMessage(error, ERROR_MESSAGES.FETCH_JOBS);
      setError(errorMessage);
      setJobs([]);
      setTotalPages(1);
      setTotalJobs(0);
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchJobs(searchKeyword);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
    setCurrentPage(1);
    // Optionally, trigger fetchJobs() if you want filters to be server-side
  };

  const filteredJobs = Array.isArray(jobs) ? jobs.filter(job => {
    if (filters.salary && job.salary) {
      const salary = job.salary;
      if (filters.salary === "0-50000" && salary > 50000) return false;
      if (filters.salary === "50000-100000" && (salary < 50000 || salary > 100000)) return false;
      if (filters.salary === "100000+" && salary < 100000) return false;
    }
    if (filters.experience && job.experienceLevel) {
      const experience = job.experienceLevel;
      if (filters.experience === "entry" && experience > 2) return false;
      if (filters.experience === "mid" && (experience < 2 || experience > 5)) return false;
      if (filters.experience === "senior" && experience < 5) return false;
    }
    if (filters.jobType && job.jobType !== filters.jobType) return false;
    return true;
  }) : [];

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const formatSalary = (salary) => {
    if (!salary) return "Not specified";
    return `$${salary.toLocaleString()}`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return "Posted today";
    if (diffDays === 2) return "Posted yesterday";
    if (diffDays < 7) return `Posted ${diffDays} days ago`;
    if (diffDays < 30) return `Posted ${Math.floor(diffDays / 7)} weeks ago`;
    return `Posted ${Math.floor(diffDays / 30)} months ago`;
  };

  if (loading) {
    return (
      <div className="min-h-screen w-full py-8 bg-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading jobs...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen w-full py-8 bg-gradient-to-br from-slate-100 to-blue-50">
      <div className="container mx-auto flex flex-col md:flex-row gap-6 md:gap-10 px-2 sm:px-4">
        {/* Filters button for mobile */}
        <div className="md:hidden flex justify-end mb-4">
          <button
            onClick={() => setFilterOpen(true)}
            className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition-all"
          >
            <svg className="inline w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-7 7V21a1 1 0 01-1.447.894l-4-2A1 1 0 017 19v-5.293l-7-7A1 1 0 013 4z" /></svg>
            Filters
          </button>
        </div>

        {/* Left Sidebar with Filters */}
        {/* Mobile filter overlay */}
        {filterOpen && (
          <div className="fixed inset-0 z-40 flex md:hidden">
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity" />
            <div ref={filterRef} className="relative bg-white/90 w-full h-full max-w-xs sm:max-w-sm p-6 shadow-2xl rounded-r-2xl border-l-4 border-blue-400 animate-slideInLeft overflow-y-auto">
              <button
                onClick={() => setFilterOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-blue-600 text-2xl font-bold focus:outline-none"
                aria-label="Close filters"
              >
                &times;
              </button>
              {/* Filter content below (copied from sidebar) */}
              <div className="mt-2">
                {/* --- Filter content start --- */}
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-blue-700">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-7 7V21a1 1 0 01-1.447.894l-4-2A1 1 0 017 19v-5.293l-7-7A1 1 0 013 4z" /></svg>
                  Filters
                </h3>
                {/* Search */}
                <div className="mb-6">
                  <form onSubmit={handleSearch} className="space-y-2">
                    <input
                      type="text"
                      placeholder="Search jobs..."
                      value={searchKeyword}
                      onChange={(e) => setSearchKeyword(e.target.value)}
                      className="w-full p-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80 text-gray-800 placeholder-gray-400 shadow-sm"
                    />
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition-all"
                    >
                      Search
                    </button>
                  </form>
                </div>
                <div className="space-y-8">
                  {/* Salary Range Filter */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2 text-blue-600">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 8v8" /></svg>
                      Salary Range
                    </h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="salary" value="0-50000" checked={filters.salary === "0-50000"} onChange={(e) => handleFilterChange("salary", e.target.value)} className="accent-blue-500 w-5 h-5 transition-all" />
                        <span className="text-sm font-medium">$0 - $50,000</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="salary" value="50000-100000" checked={filters.salary === "50000-100000"} onChange={(e) => handleFilterChange("salary", e.target.value)} className="accent-blue-500 w-5 h-5 transition-all" />
                        <span className="text-sm font-medium">$50,000 - $100,000</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="salary" value="100000+" checked={filters.salary === "100000+"} onChange={(e) => handleFilterChange("salary", e.target.value)} className="accent-blue-500 w-5 h-5 transition-all" />
                        <span className="text-sm font-medium">$100,000+</span>
                      </label>
                    </div>
                  </div>
                  {/* Experience Level Filter */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2 text-blue-600">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7m0 0H5a2 2 0 01-2-2v-5a2 2 0 012-2h14a2 2 0 012 2v5a2 2 0 01-2 2h-7z" /></svg>
                      Experience Level
                    </h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="experience" value="entry" checked={filters.experience === "entry"} onChange={(e) => handleFilterChange("experience", e.target.value)} className="accent-blue-500 w-5 h-5 transition-all" />
                        <span className="text-sm font-medium">Entry Level (0-2 years)</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="experience" value="mid" checked={filters.experience === "mid"} onChange={(e) => handleFilterChange("experience", e.target.value)} className="accent-blue-500 w-5 h-5 transition-all" />
                        <span className="text-sm font-medium">Mid Level (2-5 years)</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="experience" value="senior" checked={filters.experience === "senior"} onChange={(e) => handleFilterChange("experience", e.target.value)} className="accent-blue-500 w-5 h-5 transition-all" />
                        <span className="text-sm font-medium">Senior Level (5+ years)</span>
                      </label>
                    </div>
                  </div>
                  {/* Job Type Filter */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2 text-blue-600">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 018 0v2m-4-4V7a4 4 0 10-8 0v6a4 4 0 008 0z" /></svg>
                      Job Type
                    </h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="jobType" value="full-time" checked={filters.jobType === "full-time"} onChange={(e) => handleFilterChange("jobType", e.target.value)} className="accent-blue-500 w-5 h-5 transition-all" />
                        <span className="text-sm font-medium">Full Time</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="jobType" value="part-time" checked={filters.jobType === "part-time"} onChange={(e) => handleFilterChange("jobType", e.target.value)} className="accent-blue-500 w-5 h-5 transition-all" />
                        <span className="text-sm font-medium">Part Time</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="jobType" value="contract" checked={filters.jobType === "contract"} onChange={(e) => handleFilterChange("jobType", e.target.value)} className="accent-blue-500 w-5 h-5 transition-all" />
                        <span className="text-sm font-medium">Contract</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="jobType" value="internship" checked={filters.jobType === "internship"} onChange={(e) => handleFilterChange("jobType", e.target.value)} className="accent-blue-500 w-5 h-5 transition-all" />
                        <span className="text-sm font-medium">Internship</span>
                      </label>
                    </div>
                  </div>
                  {/* Clear Filters */}
                  <button
                    onClick={() => {
                      setFilters({ salary: "", experience: "", jobType: "" });
                      setCurrentPage(1);
                    }}
                    className="w-full bg-gray-400 text-white py-2 rounded-full font-semibold shadow hover:bg-gray-500 transition-all"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
              {/* --- Filter content end --- */}
            </div>
          </div>
        )}
        {/* Desktop sidebar */}
        <div className="hidden md:block w-full md:w-1/4 bg-white/70 backdrop-blur-md p-4 sm:p-6 rounded shadow h-fit sticky top-8 border border-blue-100 mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-blue-700">
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-7 7V21a1 1 0 01-1.447.894l-4-2A1 1 0 017 19v-5.293l-7-7A1 1 0 013 4z" /></svg>
            Filters
          </h3>
          {/* Search */}
          <div className="mb-6">
            <form onSubmit={handleSearch} className="space-y-2">
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="w-full p-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80 text-gray-800 placeholder-gray-400 shadow-sm"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition-all"
              >
                Search
              </button>
            </form>
          </div>

          <div className="space-y-8">
            {/* Salary Range Filter */}
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-blue-600">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 8v8" /></svg>
                Salary Range
              </h4>
              <div className="space-y-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="salary"
                    value="0-50000"
                    checked={filters.salary === "0-50000"}
                    onChange={(e) => handleFilterChange("salary", e.target.value)}
                    className="accent-blue-500 w-5 h-5 transition-all"
                  />
                  <span className="text-sm font-medium">$0 - $50,000</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="salary"
                    value="50000-100000"
                    checked={filters.salary === "50000-100000"}
                    onChange={(e) => handleFilterChange("salary", e.target.value)}
                    className="accent-blue-500 w-5 h-5 transition-all"
                  />
                  <span className="text-sm font-medium">$50,000 - $100,000</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="salary"
                    value="100000+"
                    checked={filters.salary === "100000+"}
                    onChange={(e) => handleFilterChange("salary", e.target.value)}
                    className="accent-blue-500 w-5 h-5 transition-all"
                  />
                  <span className="text-sm font-medium">$100,000+</span>
                </label>
              </div>
            </div>

            {/* Experience Level Filter */}
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-blue-600">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7m0 0H5a2 2 0 01-2-2v-5a2 2 0 012-2h14a2 2 0 012 2v5a2 2 0 01-2 2h-7z" /></svg>
                Experience Level
              </h4>
              <div className="space-y-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="experience"
                    value="entry"
                    checked={filters.experience === "entry"}
                    onChange={(e) => handleFilterChange("experience", e.target.value)}
                    className="accent-blue-500 w-5 h-5 transition-all"
                  />
                  <span className="text-sm font-medium">Entry Level (0-2 years)</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="experience"
                    value="mid"
                    checked={filters.experience === "mid"}
                    onChange={(e) => handleFilterChange("experience", e.target.value)}
                    className="accent-blue-500 w-5 h-5 transition-all"
                  />
                  <span className="text-sm font-medium">Mid Level (2-5 years)</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="experience"
                    value="senior"
                    checked={filters.experience === "senior"}
                    onChange={(e) => handleFilterChange("experience", e.target.value)}
                    className="accent-blue-500 w-5 h-5 transition-all"
                  />
                  <span className="text-sm font-medium">Senior Level (5+ years)</span>
                </label>
              </div>
            </div>

            {/* Job Type Filter */}
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-blue-600">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 018 0v2m-4-4V7a4 4 0 10-8 0v6a4 4 0 008 0z" /></svg>
                Job Type
              </h4>
              <div className="space-y-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="jobType"
                    value="full-time"
                    checked={filters.jobType === "full-time"}
                    onChange={(e) => handleFilterChange("jobType", e.target.value)}
                    className="accent-blue-500 w-5 h-5 transition-all"
                  />
                  <span className="text-sm font-medium">Full Time</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="jobType"
                    value="part-time"
                    checked={filters.jobType === "part-time"}
                    onChange={(e) => handleFilterChange("jobType", e.target.value)}
                    className="accent-blue-500 w-5 h-5 transition-all"
                  />
                  <span className="text-sm font-medium">Part Time</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="jobType"
                    value="contract"
                    checked={filters.jobType === "contract"}
                    onChange={(e) => handleFilterChange("jobType", e.target.value)}
                    className="accent-blue-500 w-5 h-5 transition-all"
                  />
                  <span className="text-sm font-medium">Contract</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="jobType"
                    value="internship"
                    checked={filters.jobType === "internship"}
                    onChange={(e) => handleFilterChange("jobType", e.target.value)}
                    className="accent-blue-500 w-5 h-5 transition-all"
                  />
                  <span className="text-sm font-medium">Internship</span>
                </label>
              </div>
            </div>

            {/* Clear Filters */}
            <button
              onClick={() => {
                setFilters({ salary: "", experience: "", jobType: "" });
                setCurrentPage(1);
              }}
              className="w-full bg-gray-400 text-white py-2 rounded-full font-semibold shadow hover:bg-gray-500 transition-all"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Right Side: Job Listings Grid */}
        <div className="w-full md:w-3/4">
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}
          
          <div className="mb-4">
            <h2 className="text-3xl font-extrabold text-blue-800 tracking-tight mb-2">
              {totalJobs} Jobs Found
            </h2>
          </div>

          {filteredJobs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No jobs found matching your criteria.</p>
              <button
                onClick={() => {
                  setFilters({ salary: "", experience: "", jobType: "" });
                  setSearchKeyword("");
                  setCurrentPage(1);
                  fetchJobs();
                }}
                className="mt-4 bg-blue-600 text-white px-8 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition-all"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                {filteredJobs.map((job) => (
                  <div
                    key={job._id}
                    className="bg-white/90 border-l-4 sm:border-l-8 border-blue-400 rounded shadow overflow-hidden  transition-all duration-300 relative"
                  >
                    {/* Applicants Count Badge - Top Right */}
                    <div className="absolute top-4 right-4 z-10 flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1 rounded-full shadow text-xs font-semibold">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4a4 4 0 10-8 0 4 4 0 008 0z" />
                      </svg>
                      <span>{appliedUsersCount[job._id] || 0} applicants</span>
                    </div>
                    <div className="p-4 sm:p-6 md:p-7">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-blue-100 flex items-center justify-center shadow-md">
                          <span className="text-blue-600 font-extrabold text-xl sm:text-2xl">
                            {job.title?.charAt(0)?.toUpperCase() || "J"}
                          </span>
                        </div>
                        <div>
                          <h2 className="text-lg sm:text-xl font-bold text-blue-900">
                            {job.company?.name || "Company Name"}
                          </h2>
                          <p className="text-xs sm:text-sm text-blue-500 font-semibold">
                            {job.jobType || "Job Type"}
                          </p>
                        </div>
                      </div>

                      {/* Job Position Details */}
                      <div className="mt-4">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                          {job.title || "Job Title"}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 mt-1 font-medium">
                          {formatSalary(job.salary)}
                        </p>
                      </div>

                      <div className="mt-4 space-y-4">
                        <div className="flex items-center space-x-1 sm:space-x-2 text-gray-600">
                          <svg
                            className="w-5 h-5 text-blue-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span className="text-sm font-medium">{job.location || "Location"}</span>
                        </div>

                        <div className="flex items-center space-x-1 sm:space-x-2 text-gray-600">
                          <svg
                            className="w-5 h-5 text-blue-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <span className="text-sm font-medium">{formatDate(job.createdAt)}</span>
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {job.requirements?.slice(0, 3).map((req, index) => (
                          <span key={index} className="px-2 sm:px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
                            {req}
                          </span>
                        ))}
                        {job.experienceLevel && (
                          <span className="px-2 sm:px-3 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
                            {job.experienceLevel}+ Years
                          </span>
                        )}
                      </div>

                      {/* Button Area - Modernized */}
                      <div className="mt-8 pt-4 border-t border-blue-100 flex flex-row gap-3 items-center bg-white/60 rounded-b-xl">
                        <NavLink
                          to={`/jobs/detail/page/${job._id}`}
                          className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white text-center py-1.5 px-3 rounded-md font-semibold shadow hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m6 0a6 6 0 11-12 0 6 6 0 0112 0zm6 0a6 6 0 11-12 0 6 6 0 0112 0z" /></svg>
                          View Details
                        </NavLink>
                        {user?.role === "Student" && (
                          <ApplyJobButton 
                            jobId={job._id} 
                            disabled={appliedJobIds.includes(job._id)}
                            label={appliedJobIds.includes(job._id) ? "Already Applied" : "Apply Now"}
                            small
                            onSuccess={() => {
                              // Optionally refresh the jobs list or show success message
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center mt-10 sticky bottom-4 z-20">
                  <nav className="inline-flex rounded-full shadow-lg bg-slate-50/90 px-2 sm:px-4 py-2 border border-gray-200 backdrop-blur-md gap-2 overflow-x-auto max-w-full scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent">
                    {/* Prev Button */}
                    <button
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className={`mx-1 px-4 sm:px-5 py-2 rounded-full transition-all duration-200 font-semibold text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400
                        ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600 active:scale-95'}`}
                    >
                      Prev
                    </button>
                    {/* Page Buttons with Ellipsis Logic */}
                    {(() => {
                      const pageButtons = [];
                      if (totalPages <= 7) {
                        for (let i = 1; i <= totalPages; i++) {
                          pageButtons.push(
                            <button
                              key={i}
                              onClick={() => setCurrentPage(i)}
                              className={`mx-1 px-4 sm:px-5 py-2 rounded-full transition-all duration-200 font-semibold text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400
                                ${currentPage === i ? 'bg-blue-600 text-white scale-105 shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 active:scale-95'}`}
                            >
                              {i}
                            </button>
                          );
                        }
                      } else {
                        // Always show first page
                        pageButtons.push(
                          <button
                            key={1}
                            onClick={() => setCurrentPage(1)}
                            className={`mx-1 px-4 sm:px-5 py-2 rounded-full transition-all duration-200 font-semibold text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400
                              ${currentPage === 1 ? 'bg-blue-600 text-white scale-105 shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 active:scale-95'}`}
                          >
                            1
                          </button>
                        );
                        // Show left ellipsis if needed
                        if (currentPage > 4) {
                          pageButtons.push(
                            <span key="left-ellipsis" className="mx-1 px-2 text-gray-400 select-none">...</span>
                          );
                        }
                        // Show up to 2 pages before and after current page
                        for (let i = Math.max(2, currentPage - 2); i <= Math.min(totalPages - 1, currentPage + 2); i++) {
                          if (i === 1 || i === totalPages) continue;
                          pageButtons.push(
                            <button
                              key={i}
                              onClick={() => setCurrentPage(i)}
                              className={`mx-1 px-4 sm:px-5 py-2 rounded-full transition-all duration-200 font-semibold text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400
                                ${currentPage === i ? 'bg-blue-600 text-white scale-105 shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 active:scale-95'}`}
                            >
                              {i}
                            </button>
                          );
                        }
                        // Show right ellipsis if needed
                        if (currentPage < totalPages - 3) {
                          pageButtons.push(
                            <span key="right-ellipsis" className="mx-1 px-2 text-gray-400 select-none">...</span>
                          );
                        }
                        // Always show last page
                        pageButtons.push(
                          <button
                            key={totalPages}
                            onClick={() => setCurrentPage(totalPages)}
                            className={`mx-1 px-4 sm:px-5 py-2 rounded-full transition-all duration-200 font-semibold text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400
                              ${currentPage === totalPages ? 'bg-blue-600 text-white scale-105 shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 active:scale-95'}`}
                          >
                            {totalPages}
                          </button>
                        );
                      }
                      return pageButtons;
                    })()}
                    {/* Next Button */}
                    <button
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className={`mx-1 px-4 sm:px-5 py-2 rounded-full transition-all duration-200 font-semibold text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400
                        ${currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600 active:scale-95'}`}
                    >
                      Next
                    </button>
                  </nav>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
