import React from "react";
import blogImage from "../assets/JobImages/Tiny people searching for business opportunities.jpg";

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Our Blog</h1>
          <p className="text-gray-500">Insights, stories, and tips from the world of jobs and careers.</p>
        </header>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Blog Posts */}
          <main className="flex-1 space-y-8">
            <article className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row gap-6">
              <img src={blogImage} alt="Blog" className="w-full md:w-60 h-40 object-cover rounded" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">How to Ace Your Next Job Interview</h2>
                <p className="text-gray-600 mb-2">Discover proven strategies to impress recruiters and land your dream job. From resume tips to interview etiquette, we've got you covered.</p>
                <span className="text-xs text-gray-400">Posted on May 1, 2024</span>
              </div>
            </article>
            <article className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row gap-6">
              <img src={blogImage} alt="Blog" className="w-full md:w-60 h-40 object-cover rounded" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Top 5 Skills Employers Look For in 2024</h2>
                <p className="text-gray-600 mb-2">Stay ahead in your career by mastering these in-demand skills. Learn what makes candidates stand out in today's competitive job market.</p>
                <span className="text-xs text-gray-400">Posted on April 20, 2024</span>
              </div>
            </article>
          </main>
          {/* Sidebar */}
          <aside className="w-full md:w-64 bg-white rounded-lg shadow p-6 h-fit">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Categories</h3>
            <ul className="space-y-2">
              <li><span className="text-blue-600 font-medium cursor-pointer">Career Tips</span></li>
              <li><span className="text-gray-700 cursor-pointer">Interviews</span></li>
              <li><span className="text-gray-700 cursor-pointer">Job Search</span></li>
              <li><span className="text-gray-700 cursor-pointer">Company Culture</span></li>
            </ul>
            <h3 className="text-lg font-bold mt-8 mb-4 text-gray-800">Tags</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">#jobs</span>
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">#career</span>
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">#interview</span>
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">#skills</span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
} 