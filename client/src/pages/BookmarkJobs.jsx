import React from "react";

const bookmarkedJobs = [
  {
    title: "Frontend Developer",
    company: "Tech Solutions Inc.",
  },
  {
    title: "UI/UX Designer",
    company: "Creative Minds",
  },
];

export default function BookmarkJobs() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Bookmarked Jobs</h1>
          <p className="text-gray-500">Your saved jobs for quick access.</p>
        </header>
        {bookmarkedJobs.length === 0 ? (
          <div className="text-center text-gray-400">No jobs bookmarked yet.</div>
        ) : (
          <ul className="space-y-4">
            {bookmarkedJobs.map((job, idx) => (
              <li key={idx} className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">{job.title}</h2>
                  <p className="text-gray-500">{job.company}</p>
                </div>
                <button className="bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200 transition">Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
} 