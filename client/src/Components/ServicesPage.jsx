import React, { useState } from "react";

const services = {
  seekers: [
    {
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3zm0 0c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3zm-6 8v-1a4 4 0 014-4h4a4 4 0 014 4v1" /></svg>
      ),
      title: "Personalized Job Matches",
      desc: "Get tailored job recommendations based on your profile and preferences.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V5a4 4 0 00-8 0v2m8 0a4 4 0 01-8 0m8 0v2a4 4 0 01-8 0V7" /></svg>
      ),
      title: "Easy Application Tracking",
      desc: "Track your job applications in real-time and get instant updates.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3v1a3 3 0 006 0v-1c0-1.657-1.343-3-3-3zm0 0V6m0 2v2" /></svg>
      ),
      title: "Resume Builder",
      desc: "Create a professional resume with our easy-to-use builder.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 0h-1v4h-1m-4 0h-1v-4h-1" /></svg>
      ),
      title: "Skill Assessments",
      desc: "Take skill tests to showcase your strengths to employers.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20l9-5-9-5-9 5 9 5zm0-10V4m0 6v6" /></svg>
      ),
      title: "Bookmark Jobs",
      desc: "Save jobs you like and apply later with a single click.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a5 5 0 00-10 0v2a5 5 0 0010 0zm-5 7v2m0 0a2 2 0 01-2-2h4a2 2 0 01-2 2z" /></svg>
      ),
      title: "Career Guidance",
      desc: "Access expert tips, webinars, and resources for your career growth.",
    },
  ],
  employers: [
    {
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4V7a4 4 0 00-8 0v2m8 0a4 4 0 01-8 0m8 0v2a4 4 0 01-8 0V9" /></svg>
      ),
      title: "Post Job Openings",
      desc: "Easily create and manage job postings to attract top talent.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 17l4 4 4-4m-4-5v9" /></svg>
      ),
      title: "Applicant Tracking",
      desc: "Streamline your hiring process with our built-in ATS.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3v1a3 3 0 006 0v-1c0-1.657-1.343-3-3-3zm0 0V6m0 2v2" /></svg>
      ),
      title: "Company Branding",
      desc: "Showcase your company culture and values to stand out.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M9 16h6" /></svg>
      ),
      title: "Advanced Filtering",
      desc: "Find the right candidates faster with smart filters.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20l9-5-9-5-9 5 9 5zm0-10V4m0 6v6" /></svg>
      ),
      title: "Talent Pool",
      desc: "Build and manage a pool of potential candidates for future roles.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a5 5 0 00-10 0v2a5 5 0 0010 0zm-5 7v2m0 0a2 2 0 01-2-2h4a2 2 0 01-2 2z" /></svg>
      ),
      title: "Analytics & Reports",
      desc: "Gain insights into your hiring with real-time analytics.",
    },
  ],
};

export default function ServicesPage() {
  const [tab, setTab] = useState("seekers");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 font-sans relative overflow-x-hidden">
      {/* Animated Gradient Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 px-4 mb-12 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-tr from-blue-500 via-blue-300 to-purple-400 opacity-80 blur-2xl" style={{filter:'blur(60px)'}}></div>
        {/* Decorative SVG Accent */}
        <svg className="absolute top-0 right-0 w-40 h-40 opacity-30 z-0" viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="100" fill="url(#paint0_radial)" /><defs><radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(100 100) scale(100)" gradientUnits="userSpaceOnUse"><stop stopColor="#60a5fa"/><stop offset="1" stopColor="#a78bfa" stopOpacity="0.2"/></radialGradient></defs></svg>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-4 drop-shadow-lg">Our Services</h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-4 font-medium">Empowering job seekers and employers with innovative tools for a seamless hiring experience.</p>
          <span className="inline-block bg-white/70 text-blue-700 font-semibold px-6 py-2 rounded-full shadow-lg backdrop-blur-md text-lg mb-2">Find your dream job or your next great hire</span>
        </div>
      </section>

      {/* Glassmorphism Tabs */}
      <div className="sticky top-0 z-20 flex justify-center py-4 mb-12">
        <div className="flex bg-white/60 backdrop-blur-xl rounded-full shadow-2xl px-2 py-1 relative">
          <button
            className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-200 mr-2 relative ${tab === "seekers" ? "text-white bg-gradient-to-r from-blue-600 to-purple-500 shadow-xl" : "text-gray-700 hover:bg-blue-50"}`}
            onClick={() => setTab("seekers")}
          >
            For Job Seekers
            {tab === "seekers" && <span className="absolute left-1/2 -bottom-1 w-2/3 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full -translate-x-1/2 transition-all"></span>}
          </button>
          <button
            className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-200 ml-2 relative ${tab === "employers" ? "text-white bg-gradient-to-r from-blue-600 to-purple-500 shadow-xl" : "text-gray-700 hover:bg-blue-50"}`}
            onClick={() => setTab("employers")}
          >
            For Employers
            {tab === "employers" && <span className="absolute left-1/2 -bottom-1 w-2/3 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full -translate-x-1/2 transition-all"></span>}
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services[tab].map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group"
            >
              <div className="mb-4 flex items-center justify-center rounded-full bg-blue-50 p-4 shadow group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-500 text-base mb-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full flex flex-col items-center justify-center py-12 bg-white/90 backdrop-blur-lg shadow-inner rounded-t-3xl mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
        <p className="text-gray-600 mb-6">Join thousands of job seekers and employers using our platform to achieve their goals.</p>
        <a
          href="/register"
          className="inline-block px-8 py-3 rounded-full bg-blue-600 text-white font-semibold text-lg shadow-lg hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Get Started
        </a>
      </section>
    </div>
  );
}
