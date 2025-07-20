import React, { useState, useEffect } from 'react';
import { applicationsAPI } from '../services/api';
import { useSelector } from 'react-redux';

export default function JobApplicationTracker() {
  const { user } = useSelector((state) => state.auth);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleDescription = (id) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    if (user?.role === "Student") {
      fetchAppliedJobs();
    }
  }, [user]);

  const fetchAppliedJobs = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await applicationsAPI.getAppliedJobs();
      if (response.data) {
        setApplications(response.data);
      }
    } catch (error) {
      setError("Failed to fetch applications. Please try again.");
      console.error("Error fetching applications:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (!user || user.role !== "Student") {
    return (
      <div className="p-4">
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Access Denied</h3>
          <p className="text-gray-600">This page is only available for students.</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center p-10">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your applications...</p>
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

  return (
    <div className="p-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">My Job Applications</h2>
        <p className="text-gray-600">Track the status of your job applications</p>
      </div>

      {applications.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No Applications Yet</h3>
          <p className="text-gray-600 mb-4">Start applying for jobs to see your applications here.</p>
          <button 
            onClick={() => window.location.href = '/jobs'}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Browse Jobs
          </button>
        </div>
      ) : (
        <div className="grid gap-6">
          {applications.map((application) => {
            // Define the steps for the status stepper
            const steps = [
              { label: 'Pending', key: 'Pending' },
              { label: 'Interview', key: 'Interview' },
              { label: 'Shortlisted', key: 'Shortlisted' },
              { label: 'Rejected', key: 'Rejected' },
              { label: 'Hired', key: 'Hired' },
            ];
            // Find the current step index
            const currentStepIndex = steps.findIndex(
              (step) => step.key === (application.status || 'Pending')
            );
            return (
              <div key={application._id} className="relative bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950 border border-blue-100 dark:border-blue-900 rounded-2xl shadow-xl p-8 mb-6 transition-all duration-300 hover:shadow-2xl">
                {/* Status Stepper (unchanged) */}
                <div className="mb-6 flex items-center justify-center">
                  <div className="flex w-full max-w-2xl justify-between items-center gap-2">
                    {steps.map((step, idx) => {
                      const isActive = idx === currentStepIndex;
                      const isCompleted = idx < currentStepIndex;
                      return (
                        <React.Fragment key={step.key}>
                          <div className="flex flex-col items-center">
                            <div
                              className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-base border-2 transition-all duration-300
                                ${isActive ? 'bg-blue-500 text-white border-blue-500 shadow-lg scale-110' :
                                  isCompleted ? 'bg-green-400 text-white border-green-400 shadow' :
                                  'bg-gray-200 text-gray-400 border-gray-300'}
                              `}
                            >
                              {idx + 1}
                            </div>
                            <span className={`mt-2 text-xs font-semibold transition-all duration-300 ${isActive ? 'text-blue-600' : isCompleted ? 'text-green-600' : 'text-gray-400'}`}>{step.label}</span>
                          </div>
                          {idx < steps.length - 1 && (
                            <div className={`flex-1 h-1 mx-1 rounded transition-all duration-300 ${idx < currentStepIndex ? 'bg-green-400' : 'bg-gray-200'}`}></div>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
                {/* Card Content */}
                <div className="flex flex-col gap-4">
                  {/* Header: Job Title & Status */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight flex items-center gap-2">
                      {application.job?.title || "Job Title"}
                    </h3>
                   
                  </div>
                  {/* Details Grid with Icons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-200">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 01-8 0V5a4 4 0 018 0v2z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7m-6-7a6 6 0 0112 0v7" /></svg>
                      <span className="font-medium">Company:</span>
                      <span>{typeof application.job?.company === 'object' ? application.job.company.name : application.job?.company || "Company Name"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      <span className="font-medium">Location:</span>
                      <span>{application.job?.location || "Location"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 0V4m0 16v-4" /></svg>
                      <span className="font-medium">Salary:</span>
                      <span>{application.job?.salary ? `$${application.job.salary.toLocaleString()}` : "Not specified"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 0h6" /></svg>
                      <span className="font-medium">Job Type:</span>
                      <span>{application.job?.jobType || "Full-time"}</span>
                    </div>
                  </div>
                  {/* Applied Date */}
                  <div className="mt-2 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <span className="font-medium">Applied on:</span>
                    <span>{formatDate(application.createdAt)}</span>
                  </div>
                  {/* Description with Read More */}
                  {application.job?.description && (
                    <div className="mt-4 bg-blue-50 dark:bg-blue-950/40 rounded-lg p-4">
                      <span className="font-medium text-gray-700 dark:text-gray-200">Job Description:</span>
                      <span className="text-sm text-gray-600 dark:text-gray-300 mt-1 block">
                        {expandedDescriptions[application._id]
                          ? application.job.description
                          : `${application.job.description.substring(0, 150)}${application.job.description.length > 150 ? '...' : ''}`}
                      </span>
                      {application.job.description.length > 150 && (
                        <button
                          className="mt-2 text-blue-600 dark:text-blue-300 hover:underline text-sm font-semibold focus:outline-none"
                          onClick={() => toggleDescription(application._id)}
                        >
                          {expandedDescriptions[application._id] ? 'Show Less' : 'Read More'}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
