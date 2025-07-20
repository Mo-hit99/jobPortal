import React from "react";

export default function JobDetails() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Frontend Developer</h1>
        <p className="text-blue-600 text-lg mb-4">Tech Solutions Inc.</p>
        <div className="mb-6">
          <h2 className="font-semibold text-gray-700 mb-1">Job Description</h2>
          <p className="text-gray-600">We are looking for a skilled frontend developer to join our team. You will work on modern web applications using React and Tailwind CSS.</p>
        </div>
        <div className="mb-6">
          <h2 className="font-semibold text-gray-700 mb-1">Requirements</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>2+ years experience with React</li>
            <li>Strong knowledge of JavaScript, HTML, CSS</li>
            <li>Experience with Tailwind CSS</li>
            <li>Good communication skills</li>
          </ul>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition">Apply Now</button>
      </div>
    </div>
  );
} 