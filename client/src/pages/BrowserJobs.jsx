import React from "react";

const jobs = [
  { title: "Frontend Developer", company: "Tech Solutions Inc.", desc: "Work on modern web apps using React and Tailwind CSS." },
  { title: "Backend Developer", company: "DataWorks", desc: "Build scalable APIs and microservices." },
  { title: "UI/UX Designer", company: "Creative Minds", desc: "Design user-friendly interfaces for web and mobile." },
];

export default function BrowserJobs() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Browse Jobs</h1>
          <p className="text-gray-500">Find your next opportunity.</p>
        </header>
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search jobs..."
            className="w-full md:w-2/3 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <ul className="space-y-4">
          {jobs.map((job, idx) => (
            <li key={idx} className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
              <p className="text-blue-600 text-sm mb-1">{job.company}</p>
              <p className="text-gray-600 text-sm">{job.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 