import React from "react";
import { NavLink } from "react-router";

export default function DashboardIntro() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="flex flex-col-reverse items-center justify-center w-full max-w-6xl px-6 mx-auto md:flex-row md:gap-8">
        {/* Text Content */}
        <div className="flex-1 mt-8 md:mt-0">
          <h1 className="text-3xl font-extrabold text-gray-800 sm:text-5xl">
            Welcome to Your Recruiter Dashboard
          </h1>
          <p className="mt-4 text-lg text-gray-600 sm:mt-6">
          Explore the <span className="font-bold text-blue-600">dashboard</span> to manage positions, review candidates, and more!
          </p>
          <NavLink to={'/recruiter/addjobs'} className="inline-block mt-6 rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow hover:bg-blue-500">
            Get Started
          </NavLink>
        </div>

        {/* Animated SVG */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-64 h-64">
            {/* Simple spinning circle as an example */}
            <svg
              className="absolute inset-0 w-full h-full animate-spin-slow text-blue-400"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="currentColor"
                strokeWidth="10"
                strokeDasharray="280"
                strokeDashoffset="210"
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>
            {/* Center icon (static) */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle cx="50" cy="50" r="20" fill="currentColor" />
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full max-w-4xl px-6 mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 sm:text-3xl">
          About Your Recruiter
        </h2>
        <p className="mt-4 text-gray-600">
          With 10+ years of experience in talent acquisition, I’ve helped companies of all sizes 
          find the right candidates. I believe in a personalized approach to recruiting and look 
          forward to helping you succeed in your job search or hiring process!
        </p>
      </section>
    </main>
  );
}


