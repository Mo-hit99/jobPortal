import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { applicationsAPI, getErrorMessage, ERROR_MESSAGES } from '../services/api';

const statusOptions = ['Pending', 'Shortlisted', 'Hired', 'Rejected', 'Interview'];

export default function Applicants() {
  const { id } = useParams();
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchApplicants = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await applicationsAPI.getApplicants(id);
        if (response.data && Array.isArray(response.data)) {
          setApplicants(response.data);
        } else if (response.data && Array.isArray(response.data.applicants)) {
          setApplicants(response.data.applicants);
        } else {
          setApplicants([]);
        }
      } catch (error) {
        const errorMessage = getErrorMessage(error, ERROR_MESSAGES.FETCH_APPLICANTS);
        setError(errorMessage);
        setApplicants([]);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchApplicants();
  }, [id]);

  const handleStatusChange = async (applicantId, newStatus) => {
    // Find the previous status for revert in case of error
    const prevStatus = applicants.find(applicant => applicant._id === applicantId)?.status;
    // Optimistically update UI
    setApplicants((prev) =>
      prev.map((applicant) =>
        applicant._id === applicantId ? { ...applicant, status: newStatus } : applicant
      )
    );
    try {
      await applicationsAPI.updateApplicationStatus(applicantId, newStatus);
      // Optionally, show a success message or toast here
    } catch (error) {
      // Revert status if API call fails
      setApplicants((prev) =>
        prev.map((applicant) =>
          applicant._id === applicantId ? { ...applicant, status: prevStatus } : applicant
        )
      );
      const errorMessage = getErrorMessage(error, ERROR_MESSAGES.UPDATE_APPLICATION_STATUS);
      alert(errorMessage);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading applicants...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-100">
        <div className="text-center">
          <p className="text-red-600 font-semibold">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 py-10 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 text-center drop-shadow-lg">
          Applicants
        </h1>
        <div className="overflow-x-auto rounded-2xl shadow-2xl backdrop-blur-md bg-white/70">
          <table className="w-full min-w-[900px] rounded-2xl overflow-hidden">
            <thead className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm">
              <tr className="text-left text-base text-gray-700">
                <th className="py-4 px-4 font-semibold">Name</th>
                <th className="py-4 px-4 font-semibold">Email</th>
                <th className="py-4 px-4 font-semibold">Phone</th>
                <th className="py-4 px-4 font-semibold">Role</th>
                <th className="py-4 px-4 font-semibold">Verified</th>
                <th className="py-4 px-4 font-semibold">Bio</th>
                <th className="py-4 px-4 font-semibold">Skills</th>
                <th className="py-4 px-4 font-semibold">Resume</th>
                <th className="py-4 px-4 font-semibold">Profile Pic</th>
                <th className="py-4 px-4 font-semibold">Status</th>
                <th className="py-4 px-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {applicants.length === 0 ? (
                <tr>
                  <td colSpan="11" className="text-center py-8 text-gray-500">No applicants found.</td>
                </tr>
              ) : (
                applicants.map((applicant, idx) => {
                  const user = applicant.applicant || {};
                  return (
                    <tr
                      key={applicant._id || applicant.id}
                      className={`transition-all duration-200 ${idx % 2 === 0 ? 'bg-purple-50/40' : 'bg-white/60'} hover:bg-purple-100/60`}
                    >
                      <td className="py-4 px-4 font-semibold text-gray-900 flex items-center gap-3">
                        <span className="truncate max-w-[120px]" title={user.FullName || user.fullName || user.username || "-"}>
                          {user.FullName || user.fullName || user.username || "-"}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-blue-700 underline max-w-[160px] truncate" title={user.email || "-"}>
                        {user.email || "-"}
                      </td>
                      <td className="py-4 px-4 text-gray-700">
                        {user.phoneNumber || <span className="text-gray-400">-</span>}
                      </td>
                      <td className="py-4 px-4">
                        <span className="inline-block rounded px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700">
                          {user.role || "-"}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        {user.isVerified ? (
                          <span className="inline-flex items-center gap-1 text-green-600 font-semibold"><svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Yes</span>
                        ) : (
                          <span className="text-red-500 font-semibold">No</span>
                        )}
                      </td>
                      <td className="py-4 px-4 max-w-[180px] truncate" title={user.profile?.bio || "-"}>
                        {user.profile?.bio || <span className="text-gray-400">-</span>}
                      </td>
                      <td className="py-4 px-4 max-w-[120px] truncate" title={user.profile?.skills && user.profile.skills.length > 0 ? user.profile.skills.join(", ") : "-"}>
                        {user.profile?.skills && user.profile.skills.length > 0 ? user.profile.skills.join(", ") : <span className="text-gray-400">-</span>}
                      </td>
                      <td className="py-4 px-4">
                        {user.profile?.resumeOriginalName ? (
                          <a href={user.profile.resume} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800 transition-colors" title="View Resume">{user.profile.resumeOriginalName}</a>
                        ) : <span className="text-gray-400">-</span>}
                      </td>
                      <td className="py-4 px-4">
                        {user.profile?.profilePic ? (
                          <img src={user.profile.profilePic} alt="Profile" className="w-10 h-10 rounded-full object-cover border border-gray-300 shadow" />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold text-gray-500 shadow">?</div>
                        )}
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-bold shadow-md transition-colors duration-300 ${
                            applicant.status === 'Pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : applicant.status === 'Interview'
                              ? 'bg-blue-100 text-blue-800'
                              : applicant.status === 'Hired'
                              ? 'bg-green-100 text-green-800'
                              : applicant.status === 'Rejected'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {applicant.status || 'Pending'}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <select
                          className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all bg-white shadow-sm"
                          value={applicant.status || 'Pending'}
                          onChange={(e) => handleStatusChange(applicant._id || applicant.id, e.target.value)}
                        >
                          {statusOptions.map((status) => (
                            <option key={status} value={status}>
                              {status}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
