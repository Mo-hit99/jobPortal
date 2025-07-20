import React from "react";
import profileImage from "../assets/profileImage/profile-image.png";

const candidates = [
  { name: "Emily Carter", title: "Frontend Developer", image: profileImage },
  { name: "Michael Brown", title: "Backend Developer", image: profileImage },
  { name: "Sophia Lee", title: "UI/UX Designer", image: profileImage },
  { name: "James Wilson", title: "Project Manager", image: profileImage },
  { name: "Olivia Green", title: "QA Engineer", image: profileImage },
  { name: "Liam White", title: "DevOps Engineer", image: profileImage },
  { name: "Emma Black", title: "HR Specialist", image: profileImage },
  { name: "Noah Gray", title: "Business Analyst", image: profileImage },
];

export default function CandidateGrid() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Candidate Grid</h1>
          <p className="text-gray-500">A compact view of all available candidates.</p>
        </header>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {candidates.map((candidate, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img src={candidate.image} alt={candidate.name} className="w-16 h-16 rounded-full object-cover mb-2 border-2 border-blue-100" />
              <h2 className="text-base font-semibold text-gray-800">{candidate.name}</h2>
              <p className="text-blue-600 text-xs">{candidate.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 