import React from "react";
import profileImage from "../assets/profileImage/profile-image.png";

export default function CandidateDetails() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-8">
        <div className="flex flex-col items-center mb-6">
          <img src={profileImage} alt="Candidate" className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-100" />
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Emily Carter</h1>
          <p className="text-blue-600 text-sm mb-2">Frontend Developer</p>
        </div>
        <div className="mb-4">
          <h2 className="font-semibold text-gray-700 mb-1">Bio</h2>
          <p className="text-gray-600">Passionate developer with 5+ years of experience building responsive web applications. Loves working with React and modern JavaScript frameworks.</p>
        </div>
        <div>
          <h2 className="font-semibold text-gray-700 mb-1">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">React</span>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">JavaScript</span>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">CSS</span>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">HTML</span>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </div>
  );
} 