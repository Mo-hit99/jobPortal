import React, { useState, useEffect } from 'react'
import wordressImage from '../assets/newJobsImages/icons8-wordpress-50.png'
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import useGetSingleJob from '../hooks/useGetSingleJob';
import ApplyJobButton from './ApplyJobButton';
import { FaMoneyBillWave, FaBriefcase, FaClock, FaCalendarAlt } from 'react-icons/fa';
import { applicationsAPI } from '../services/api';

export default function JobDetailPage() {
  const { id } = useParams();
  useGetSingleJob({ id });
  const job = useSelector((state) => state.jobs.SingleJobs);
  const { user } = useSelector((state) => state.auth);
  const [appliedJobIds, setAppliedJobIds] = useState([]);

  useEffect(() => {
    if (user?.role === "Student") {
      applicationsAPI.getAppliedJobs().then(res => {
        setAppliedJobIds(res.data.map(app => app.job?._id).filter(Boolean));
      }).catch(() => setAppliedJobIds([]));
    }
  }, [user]);
  
  // Helper to strip HTML tags
  const stripHtml = (html) => html ? html.replace(/<[^>]+>/g, '') : '';
  
  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading job details...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-200 py-10 px-2">
      <div className="w-full max-w-3xl mx-auto bg-white/30 backdrop-blur-xl rounded shadow overflow-hidden border border-white/40 transition-transform duration-300 hover:scale-[1.01]">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center gap-6 px-8 py-8 border-b border-white/30 bg-white/20">
          <div className="flex-shrink-0 w-24 h-24 rounded-full bg-white/60 flex items-center justify-center shadow-lg overflow-hidden">
            <img src={wordressImage} alt="company logo" className="w-20 h-20 object-contain" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2 drop-shadow">{job.title || 'Job Title'}</h1>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-2">
              {job.jobType && (
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full shadow">{job.jobType}</span>
              )}
              {job.experienceLevel && (
                <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full shadow">{job.experienceLevel} yrs exp</span>
              )}
              {job.salary && (
                <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full shadow">${job.salary}</span>
              )}
            </div>
            <p className="text-gray-600 text-sm font-medium">{job.companyName || 'Company Name'} • {job.location || 'Location'}</p>
          </div>
        </div>
        {/* Details Section */}
        <div className="px-8 py-8 bg-white/10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Job Description</h2>
          <div className="text-gray-700 mb-6 text-base leading-relaxed">
            {stripHtml(job.description) || 'No description provided.'}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white/40 rounded-xl p-4 shadow flex items-center gap-3">
              <FaMoneyBillWave className="text-green-500 text-xl" />
              <div>
                <span className="font-semibold text-gray-700">Salary</span>
                <div className="text-gray-900">{job.salary ? `$${job.salary}` : 'Not specified'}</div>
              </div>
            </div>
            <div className="bg-white/40 rounded-xl p-4 shadow flex items-center gap-3">
              <FaBriefcase className="text-purple-500 text-xl" />
              <div>
                <span className="font-semibold text-gray-700">Experience Level</span>
                <div className="text-gray-900">{job.experienceLevel || 'Not specified'}</div>
              </div>
            </div>
            <div className="bg-white/40 rounded-xl p-4 shadow flex items-center gap-3">
              <FaClock className="text-blue-500 text-xl" />
              <div>
                <span className="font-semibold text-gray-700">Job Type</span>
                <div className="text-gray-900">{job.jobType || 'Not specified'}</div>
              </div>
            </div>
            <div className="bg-white/40 rounded-xl p-4 shadow flex items-center gap-3">
              <FaCalendarAlt className="text-pink-500 text-xl" />
              <div>
                <span className="font-semibold text-gray-700">Posted On</span>
                <div className="text-gray-900">{job.createdAt ? new Date(job.createdAt).toLocaleDateString() : 'N/A'}</div>
              </div>
            </div>
          </div>
          {/* Apply Button */}
          <div className="flex justify-end">
            <div className="w-full md:w-1/3">
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
      </div>
    </section>
  )
}
