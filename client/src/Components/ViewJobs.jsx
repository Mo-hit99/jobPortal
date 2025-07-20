import React, { useState, useEffect } from "react";
import { jobsAPI } from "../services/api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function ViewJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(10); // Default page size
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [jobType, setJobType] = useState("");
  const [status, setStatus] = useState("");
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError("");
      try {
        const params = { page: currentPage, limit: pageSize };
        if (search) params.keyword = search;
        if (jobType) params.jobType = jobType;
        if (status) params.status = status;
        const response = await jobsAPI.getAllJobs(params);
        if (response.data && Array.isArray(response.data.jobs)) {
          setJobs(response.data.jobs);
          setTotalPages(response.data.totalPages || 1);
        } else {
          setJobs([]);
          setTotalPages(1);
        }
      } catch {
        setError("Failed to fetch jobs. Please try again.");
        setJobs([]);
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [currentPage, pageSize, search, jobType, status]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    setSearch(searchInput.trim());
  };

  const handleClearSearch = () => {
    setSearchInput("");
    setSearch("");
    setCurrentPage(1);
  };

  const handleJobTypeChange = (e) => {
    setJobType(e.target.value);
    setCurrentPage(1);
  };
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    setCurrentPage(1);
  };

  const formatSalary = (salary) => {
    if (!salary) return "Not specified";
    return `$${salary.toLocaleString()}`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  

  if (loading) {
    return (
      <div className="flex items-center justify-center p-10">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your jobs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="p-4">
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No Jobs Posted Yet</h3>
          <p className="text-gray-600 mb-4">Start by creating your first job posting.</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
            Create Job
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Job Postings</h2>
          <p className="text-gray-600">Manage your job listings and view applications</p>
        </div>
        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 mb-2 md:mb-0">
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            Search
          </button>
          {search && (
            <button
              type="button"
              onClick={handleClearSearch}
              className="px-2 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
            >
              Clear
            </button>
          )}
        </form>
        {/* Filter Controls */}
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <select
            value={jobType}
            onChange={handleJobTypeChange}
            className="px-3 py-1 border border-gray-300 rounded focus:outline-none"
          >
            <option value="">All Job Types</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Internship">Internship</option>
            <option value="Contract">Contract</option>
          </select>
          <select
            value={status}
            onChange={handleStatusChange}
            className="px-3 py-1 border border-gray-300 rounded focus:outline-none"
          >
            <option value="">All Statuses</option>
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
        {/* Pagination Controls */}
        <div className="flex items-center gap-2">
          <button
            className="px-3 py-1 rounded border border-gray-300 bg-white text-gray-700 disabled:opacity-50"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
          <button
            className="px-3 py-1 rounded border border-gray-300 bg-white text-gray-700 disabled:opacity-50"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      <div className="grid gap-6">
        {jobs.filter(jobUser => jobUser.created_by === user._id ).map((job) => (
          <div key={job._id} className="relative rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
            {/* Top row: Job Title and quick info */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{job.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-500">
                  <p>
                    <span className="font-medium text-gray-600 mr-1">Company:</span>
                    {job.company && typeof job.company === 'object' ? job.company.name : job.company || "Your Company"}
                  </p>
                  <p>
                    <span className="font-medium text-gray-600 mr-1">Location:</span>
                    {job.location}
                  </p>
                  <p>
                    <span className="font-medium text-gray-600 mr-1">Salary:</span>
                    {formatSalary(job.salary)}
                  </p>
                  <p>
                    <span className="font-medium text-gray-600 mr-1">Experience:</span>
                    {job.experienceLevel} years
                  </p>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  <span className="font-medium text-gray-600 mr-1">Description:</span>
                  {job.description?.substring(0, 100)}...
                </p>
              </div>

              {/* Job Type Badge */}
              <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium text-black bg-blue-200 ml-4`}>
                {job.jobType}
              </span>
            </div>

            {/* Middle row: Date posted and status */}
            <div className="mt-2 flex justify-between items-center text-sm text-gray-500">
              <span>
                <span className="font-medium text-gray-600">Posted:</span> {formatDate(job.createdAt)}
              </span>
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                job.status === 'Open' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {job.status || 'Open'}
              </span>
            </div>

            {/* Divider */}
            <hr className="my-3 border-gray-200" />

            {/* Bottom row: Action buttons */}
            <div className="flex items-center justify-between space-x-2">
              {/* View / Edit / Delete Buttons */}
              <button onClick={()=> navigate(`/recruiter/applicants/${job._id}`)} className="flex items-center gap-1 rounded-md border border-gray-300 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100">
                <svg
                  enableBackground="new 0 0 32 32"
                  id="Editable-line"
                  viewBox="0 0 32 32"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  height={25}
                  width={25}
                >
                  <path
                    d="  M16,7C9.934,7,4.798,10.776,3,16c1.798,5.224,6.934,9,13,9s11.202-3.776,13-9C27.202,10.776,22.066,7,16,7z"
                    fill="none"
                    id="XMLID_10_"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    strokeWidth={2}
                  />
                  <circle
                    cx={16}
                    cy={16}
                    fill="none"
                    id="XMLID_12_"
                    r={5}
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    strokeWidth={2}
                  />
                </svg>
               Applicant View
              </button>
              <button className="flex items-center gap-1 rounded-md border border-blue-500 px-3 py-1 text-sm font-medium text-blue-600 hover:bg-blue-50">
                <svg
                  height={25}
                  viewBox="0 0 32 32"
                  width={25}
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <title />
                  <desc />
                  <defs />
                  <g
                    fill="none"
                    fillRule="evenodd"
                    id="Page-1"
                    stroke="none"
                    strokeWidth={1}
                  >
                    <g fill="#157EFB" id="icon-136-document-edit">
                      <path
                        d="M26.4432278,12.1503345 L15.1570131,23.4499064 L15.1570131,23.4499064 L12.5514465,20.8443397 L23.8435383,9.55064513 L26.4432278,12.1503345 L26.4432278,12.1503345 Z M27.1499164,11.4428096 L28.8790954,9.71158405 C29.269069,9.32114892 29.266195,8.68650423 28.8743,8.29568497 L27.6944866,7.11910998 C27.3018646,6.72756564 26.6692577,6.72452466 26.2779126,7.11592531 L24.5505949,8.84348817 L27.1499164,11.4428096 L27.1499164,11.4428096 Z M11.9037061,21.6108129 L11.2641602,24.7235103 L14.3990645,24.1061713 L11.9037061,21.6108129 L11.9037061,21.6108129 L11.9037061,21.6108129 Z M22,18 L22,28.0025781 C22,29.1090746 21.1057238,30 20.0025781,30 L4.99742191,30 C3.89092539,30 3,29.1012878 3,27.9926701 L3,5.00732994 C3,3.89833832 3.8992496,3 5.0085302,3 L15,3 L15,9.00189865 C15,10.1132936 15.8980806,11 17.0059191,11 L21,11 L25.5801067,6.41989327 C26.372781,5.62721897 27.6313906,5.6313906 28.4102504,6.41025036 L29.5897496,7.58974962 C30.3661881,8.36618809 30.3642921,9.63570785 29.5801067,10.4198932 L22,18 L22,18 Z M16,3 L16,8.99707067 C16,9.55097324 16.4509752,10 16.990778,10 L22,10 L16,3 L16,3 Z"
                        id="document-edit"
                      />
                    </g>
                  </g>
                </svg>
                Edit
              </button>
              <button 
                className="flex items-center gap-1 rounded-md border border-red-500 px-3 py-1 text-sm font-medium text-red-600 hover:bg-red-50"
              >
                <svg
                  id="Flat"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  height={25}
                  width={25}
                >
                  <defs>
                    <style>
                      {
                        ".cls-1{fill:#2c2c33;}.cls-2{fill:#fe4f60;}.cls-3{fill:#42434d;}.cls-4{fill:#d6f4fc;}.cls-5{fill:#4d4e59;}.cls-6{fill:#ff6d7a;}.cls-7{fill:#e8f8fc;}"
                      }
                    </style>
                  </defs>
                  <title />
                  <g
                    data-name="20. Napkin is flying in a bucket"
                    id="_20._Napkin_is_flying_in_a_bucket"
                  >
                    <path
                      className="cls-1"
                      d="M388.77,96.92a8,8,0,0,1-5.09-10.11l7.15-21.63A13.85,13.85,0,0,0,382,47.66L340.48,33.94A13.88,13.88,0,0,0,323,42.76l-7.14,21.63a8,8,0,0,1-15.2-5l7.14-21.63a29.92,29.92,0,0,1,37.74-19L387,32.46A29.86,29.86,0,0,1,406,70.2l-7.15,21.63A8,8,0,0,1,388.77,96.92Z"
                    />
                    <path
                      className="cls-2"
                      d="M431.86,245.61a8,8,0,0,1,7.91,9.19c-8.43,56-2.18,14.46-31.34,208.38A29.15,29.15,0,0,1,379.6,488h-132a29.15,29.15,0,0,1-28.83-24.82c-29.16-193.92-22.91-152.41-31.34-208.38a8,8,0,0,1,7.91-9.19Z"
                    />
                    <path
                      className="cls-3"
                      d="M443.19,106.48a29.15,29.15,0,0,1,18.54,36.83l-6.06,18.36a8,8,0,0,1-10.11,5.09l-227.07-75a8,8,0,0,1-5.09-10.11l6.07-18.36A29.16,29.16,0,0,1,256.3,44.72C378,84.94,334,70.38,443.19,106.48Z"
                    />
                    <path
                      className="cls-4"
                      d="M137.43,118.3,147,140a8.8,8.8,0,0,1-.83,8.59L138,160.37a8.82,8.82,0,0,1-9,3.61c-15.63-3.14-16.05-3.56-18.88-2.65l-19.31,6.2A8.76,8.76,0,0,1,84,166.9l-15.33-8.25A8.8,8.8,0,0,1,64,150.9V139.68a8.82,8.82,0,0,0-6.57-8.52l-3.86-1A8.82,8.82,0,0,1,47,121.63V108.87a8.81,8.81,0,0,1,8.17-8.79L75.51,98.6a8.81,8.81,0,0,0,8.17-8.79A8.81,8.81,0,0,1,92.49,81h17.62a8.8,8.8,0,0,1,8.79,9.34l-.76,12.52a8.83,8.83,0,0,0,7.07,9.18l5.88,1.17A8.82,8.82,0,0,1,137.43,118.3Z"
                    />
                    <path
                      className="cls-5"
                      d="M444.49,106.94c9.15,3.51,4,17.34-5.28,14.27L274.3,66.72a29.16,29.16,0,0,0-36.83,18.54l-1.41,4.26a7.61,7.61,0,0,1-9.62,4.84l-7.95-2.63a8,8,0,0,1-5.09-10.11l6.07-18.36A29.16,29.16,0,0,1,256.3,44.72C451.65,109.28,443.15,106.43,444.49,106.94Z"
                    />
                    <path
                      className="cls-6"
                      d="M431.86,245.61a8,8,0,0,1,7.91,9.19l-4.64,30.81H235.29a8,8,0,0,0-7.91,9.19c2.42,16.05,15,99.49,24.61,163.6,3.21,21.38-28.78,27.39-33,6.19-.32-1.57,1.11,7.47-31.59-209.79a8,8,0,0,1,7.91-9.19Z"
                    />
                    <path
                      className="cls-3"
                      d="M431.86,245.61a8,8,0,0,1,7.91,9.19l-6.51,43.25H193.89l-6.51-43.25a8,8,0,0,1,7.91-9.19Z"
                    />
                    <path
                      className="cls-5"
                      d="M402.29,245.65c25.77,1.14,24.46,40-1.34,40H235.29a8,8,0,0,0-7.91,9.19l.49,3.25h-34l-6.51-43.25a8,8,0,0,1,7.91-9.19C196.61,245.61,401.06,245.59,402.29,245.65Z"
                    />
                    <path
                      className="cls-7"
                      d="M118.9,90.34l-.52,8.43c-.33,5.41-4.7,5-4.7,11a8.81,8.81,0,0,1-8.17,8.79l-20.34,1.48A8.81,8.81,0,0,0,77,128.87v12.76a8.82,8.82,0,0,0,6.57,8.52l3.86,1A8.82,8.82,0,0,1,94,159.68a7.58,7.58,0,0,1-10.9,6.81c-2.87-1.4-7.1-3.87-14.47-7.84A8.8,8.8,0,0,1,64,150.9V139.68a8.82,8.82,0,0,0-6.57-8.52l-3.86-1A8.82,8.82,0,0,1,47,121.63V108.87a8.81,8.81,0,0,1,8.17-8.79L75.51,98.6a8.81,8.81,0,0,0,8.17-8.79A8.8,8.8,0,0,1,92.49,81h17.62A8.8,8.8,0,0,1,118.9,90.34Z"
                    />
                  </g>
                </svg>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
