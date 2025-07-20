import React, { useRef, useState, useEffect } from 'react'
import JobitEditor from 'jodit-react'
import { jobsAPI, companyAPI } from '../services/api'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router'

export default function JobCreationForm() {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [companies, setCompanies] = useState([]);
  const [loadingCompanies, setLoadingCompanies] = useState(false);
  
  const { user } = useSelector((state) => state.auth);
  
  const [jobData, setJobData] = useState({
    title: '',
    description: '',
    requirements: '',
    salary: '',
    location: '',
    jobType: '',
    experience: '',
    position: '',
    companyId: ''
  });

  // Fetch companies on component mount
  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    setLoadingCompanies(true);
    try {
      const response = await companyAPI.getCompanies();
      if (response.data) {
        setCompanies(response.data);
      }
    } catch (error) {
      console.error('Error fetching companies:', error);
    } finally {
      setLoadingCompanies(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // // Validation
    // if (!jobData.title || !jobData.description || !jobData.requirements || 
    //     !jobData.salary || !jobData.location || !jobData.jobType || 
    //     !jobData.experience || !jobData.position || !jobData.companyId) {
    //   setError("All fields are required");
    //   return;
    // }

    if (!content) {
      setError("Job description is required");
      return;
    }

    setLoading(true);
    try {
      const finalJobData = {
        ...jobData,
        description: content,
        salary: Number(jobData.salary),
        experience: Number(jobData.experience),
        position: Number(jobData.position)
      };

      const response = await jobsAPI.createJob(finalJobData);
      if (response.data) {
        setSuccess("Job created successfully!");
        // Reset form
        setJobData({
          title: '',
          description: '',
          requirements: '',
          salary: '',
          location: '',
          jobType: '',
          experience: '',
          position: '',
          companyId: ''
        });
        setContent('');
      }
    } catch (error) {
      setError(error.response?.data?.message || "Failed to create job. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='h-full'>
      <div className="container mx-auto p-2">
        <div className="max-w-3xl h-full mx-auto bg-white p-8 rounded-lg shadow">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">Create Job Posting</h1>
          
          {/* Error and Success Messages */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {/* Job Title */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="title">
                Job Title *
              </label>
              <input 
                type="text" 
                id="title" 
                name="title" 
                placeholder="Enter job title" 
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
                value={jobData.title}
                onChange={handleInputChange}
                disabled={loading}
              /> 
            </div>

            {/* Company Selection */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="companyId">
                Company *
              </label>
              <select 
                id="companyId" 
                name="companyId" 
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                value={jobData.companyId}
                onChange={handleInputChange}
                disabled={loading || loadingCompanies}
              >
                <option value="">Select a company</option>
                {companies.map((company) => (
                  <option key={company._id} value={company._id}>
                    {company.name}
                  </option>
                ))}
              </select>
              {loadingCompanies && (
                <p className="text-sm text-gray-500 mt-1">Loading companies...</p>
              )}
              {companies.length === 0 && !loadingCompanies && (
                <div className="text-sm text-blue-600 mt-1">
                  <p>No companies found. Please create a company first.</p>
                  <NavLink 
                    to="/recruiter/createcompany" 
                    className="text-blue-500 hover:text-blue-700 underline"
                  >
                    Create Company
                  </NavLink>
                </div>
              )}
            </div>

            {/* Location */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="location">
                Location *
              </label>
              <input 
                type="text" 
                id="location" 
                name="location" 
                placeholder="Enter job location" 
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
                value={jobData.location}
                onChange={handleInputChange}
                disabled={loading}
              />
            </div>

            {/* Job Type */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="jobType">
                Job Type *
              </label>
              <select 
                id="jobType" 
                name="jobType" 
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                value={jobData.jobType}
                onChange={handleInputChange}
                disabled={loading}
              >
                <option value="">Select job type</option>
                <option value="full-time">Full-Time</option>
                <option value="part-time">Part-Time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
            </div>

            {/* Experience Level */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="experience">
                Experience Level (Years) *
              </label>
              <input 
                type="number" 
                id="experience" 
                name="experience" 
                placeholder="Enter experience in years" 
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
                value={jobData.experience}
                onChange={handleInputChange}
                disabled={loading}
              />
            </div>

            {/* Position */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="position">
                Number of Positions *
              </label>
              <input 
                type="number" 
                id="position" 
                name="position" 
                placeholder="Enter number of positions" 
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
                value={jobData.position}
                onChange={handleInputChange}
                disabled={loading}
              />
            </div>

            {/* Salary */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="salary">
                Salary (USD) *
              </label>
              <input 
                type="number" 
                id="salary" 
                name="salary" 
                placeholder="Enter salary amount" 
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
                value={jobData.salary}
                onChange={handleInputChange}
                disabled={loading}
              />
            </div>

            {/* Requirements */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="requirements">
                Requirements (comma separated) *
              </label>
              <input 
                type="text" 
                id="requirements" 
                name="requirements" 
                placeholder="e.g., React, Node.js, MongoDB" 
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
                value={jobData.requirements}
                onChange={handleInputChange}
                disabled={loading}
              />
            </div>

            {/* Job Description */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="jobDescription">
                Job Description *
              </label>
              <JobitEditor 
                ref={editor} 
                value={content} 
                onChange={newContent => setContent(newContent)} 
                disabled={loading}
              />
            </div>

            {/* Submit Button */}
            <div className="text-right">
              <button 
                type="submit" 
                className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? "Creating Job..." : "Post Job"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
