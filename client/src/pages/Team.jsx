import React from "react";
import profileImage from "../assets/profileImage/profile-image.png";

const team = [
  {
    name: "Alice Johnson",
    role: "CEO & Founder",
    image: profileImage,
    bio: "Visionary leader with 10+ years in tech startups."
  },
  {
    name: "Bob Smith",
    role: "Lead Developer",
    image: profileImage,
    bio: "Full-stack developer passionate about scalable web apps."
  },
  {
    name: "Carol Lee",
    role: "Product Manager",
    image: profileImage,
    bio: "Expert in agile product development and UX design."
  },
  {
    name: "David Kim",
    role: "Marketing Head",
    image: profileImage,
    bio: "Growth hacker and digital marketing strategist."
  }
];

export default function Team() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Meet Our Team</h1>
          <p className="text-gray-500">Passionate professionals dedicated to your success.</p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-100" />
              <h2 className="text-lg font-semibold text-gray-800">{member.name}</h2>
              <p className="text-blue-600 text-sm mb-2">{member.role}</p>
              <p className="text-gray-500 text-center text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 