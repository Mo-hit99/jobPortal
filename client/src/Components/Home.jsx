import React, { useState } from "react";
import job1 from "../assets/JobImages/4563775.jpg";
import { useNavigate } from "react-router";
export default function Home() {
  const [query ,setQuery] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(query.trim()){
      setTimeout(()=>{
        navigate(`/jobs/?search=${encodeURIComponent(query)}`)
      },400)
    }
  };
  console.log(query)
  return (
    <section className="container mx-auto px-4 py-8 flex justify-center items-center h-screen">
      <div className="flex flex-col md:flex-row items-center">
        {/* <!-- Left Text Section --> */}
        <div className=" space-y-4 p-3">
          <p className="text-gray-600 font-medium">
            WE HAVE 150,000+ LIVE JOBS
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Find your dream jobs with
            <span className="text-blue-600 ml-2">Jobvia</span>
          </h1>
          <p className="text-gray-600">
            Find jobs, create trackable resumes and enrich your applications.
            Carefully crafted after analyzing the needs of different industries.
          </p>

          {/* <!-- Search Form --> */}
          <div className="w-full flex justify-center items-center mt-6">
            <form onSubmit={handleSubmit} className="relative w-full max-w-xl">
              <div className="flex items-center">
                <input
                  type="text"
                  id="job-search"
                  placeholder="Job, Company name..."
                  value={query}
                  onChange={(e)=>setQuery(e.target.value)}
                  className="w-full pl-6 pr-16 py-4 rounded-full border-none shadow-md focus:outline-none text-lg bg-white"
                  style={{boxShadow: '0 2px 16px rgba(0,0,0,0.08)'}}
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  style={{boxShadow: '0 4px 16px rgba(0,0,0,0.18)'}}
                >
                  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" width={28} height={28}>
                    <style>{
                      ".st2{fill:none;stroke:#fff;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}"
                    }</style>
                    <g id="Layer_2">
                      <path className="st2" d="M109 56c0-20.5-16.6-37-37-37S35 35.6 35 56s16.6 37 37 37c14.3 0 26.7-8.1 32.9-20" />
                      <path className="st2" d="M36.8 91.2L17.6 110.4" />
                    </g>
                  </svg>
                </button>
              </div>
              <div className="absolute inset-0 -z-10 rounded-full bg-gray-200" style={{filter: 'blur(1px)'}}></div>
            </form>
          </div>
        </div>

        {/* <!-- Right Illustration Section --> */}
        <div className="mt-8 md:mt-0 md:w-[70%] flex justify-center">
          {/* <!-- Replace with your actual illustration or inline SVG --> */}
          <img src={job1} alt="Illustration" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}
