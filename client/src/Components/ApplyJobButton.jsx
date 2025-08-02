import React, { useState } from 'react';
import { applicationsAPI, getErrorMessage, ERROR_MESSAGES } from '../services/api';
import { useSelector } from 'react-redux';

export default function ApplyJobButton({ jobId, onSuccess, disabled, label, small }) {
  const { user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleApply = async () => {
    if (!user) {
      setError("Please login to apply for jobs");
      return;
    }

    if (user.role !== "Student") {
      setError("Only students can apply for jobs");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await applicationsAPI.applyForJob(jobId);
      if (response.data) {
        setSuccess("Application submitted successfully!");
        if (onSuccess) {
          onSuccess();
        }
      }
    } catch (error) {
      const errorMessage = getErrorMessage(error, ERROR_MESSAGES.APPLY_JOB);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {error && (
        <div className="mb-2 p-2 bg-red-100 border border-red-400 text-red-700 rounded text-sm">
          {error}
        </div>
      )}
      {success && (
        <div className="mb-2 p-2 bg-green-100 border border-green-400 text-green-700 rounded text-sm">
          {success}
        </div>
      )}
      <button
        onClick={handleApply}
        disabled={disabled || loading || !!success}
        className={`w-full flex items-center justify-center gap-2 
          ${small ? 'py-1.5 px-3 rounded-md text-sm' : 'py-2 rounded-full'} font-semibold shadow transition disabled:opacity-50 disabled:cursor-not-allowed 
          ${disabled || !!success ? 'bg-gray-400 text-white' : 'bg-green-500 text-white hover:bg-green-600'}`}
      >
        {loading ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /></svg>
            Applying...
          </>
        ) : disabled || !!success ? (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            {label || 'Already Applied'}
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
            {label || 'Apply Now'}
          </>
        )}
      </button>
    </div>
  );
} 