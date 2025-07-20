import React from "react";
import profileImage from "../assets/profileImage/profile-image.png";

const candidates = [
  { name: "Emily Carter", title: "Frontend Developer", image: profileImage },
  { name: "Michael Brown", title: "Backend Developer", image: profileImage },
  { name: "Sophia Lee", title: "UI/UX Designer", image: profileImage },
  { name: "James Wilson", title: "Project Manager", image: profileImage },
];

export default function CandidateList() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Candidate List</h1>
          <p className="text-gray-500">Browse our top candidates ready for new opportunities.</p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {candidates.map((candidate, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <img src={candidate.image} alt={candidate.name} className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-blue-100" />
              <h2 className="text-lg font-semibold text-gray-800">{candidate.name}</h2>
              <p className="text-blue-600 text-sm">{candidate.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 