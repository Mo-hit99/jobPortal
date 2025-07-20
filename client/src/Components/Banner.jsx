import React from 'react'

export default function Banner() {
  return (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4 text-center">
      {/* <!-- Main Heading --> */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
        <span className="text-gray-600">Browse Our</span>
        <span className="text-blue-500"> 5,000+ </span>
        <span className="text-gray-600">Latest Jobs</span>
      </h1>
      
      {/* <!-- Subtext --> */}
      <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg">
        Post a job to tell us about your project. We'll quickly match you with the right freelancers.
      </p>
      
      {/* <!-- Button --> */}
      <button
        type="button"
        className="inline-flex items-center mt-6 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
               text-sm sm:text-base md:text-lg"
      >
    <svg
      className="w-6 h-6 text-white mr-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M21 21l-3.5-3.5M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
        Started Now
        {/* <!-- Example Rocket Icon (Heroicons) --> */}
      </button>
    </div>
  </section>
  
  )
}
