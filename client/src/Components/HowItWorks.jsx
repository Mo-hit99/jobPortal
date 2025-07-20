import React from 'react'
import instructionAboutJobRegistrationImage from '../assets/instructionAboutJobsImage/interview-6956089_1280.png'
export default function HowItWorks() {
  return (
    // <!-- How It Works Section -->
  <section className="mx-auto px-6 lg:px-16 py-16 flex flex-col lg:flex-row  items-center ">
    
    {/* <!-- Left Content (Text & Steps) --> */}
    <div className="w-full">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">How It Work</h2>
      <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg">
        Post a job to tell us about your project. We'll quickly match you with the right freelancers.
      </p>

      {/* <!-- Steps List --> */}
      <div className="mt-8 space-y-6">
        
        {/* <!-- Step 1 --> */}
        <div className="flex items-start">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">1</div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-blue-600">Register an account</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Due to its widespread use as filler text for layouts, non-readability is of great importance.
            </p>
          </div>
        </div>

        {/* <!-- Step 2 --> */}
        <div className="flex items-start">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center font-bold text-lg">2</div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-800">Find your job</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              There are many variations of passages of available bookmark-label, but the majority alter in some form.
            </p>
          </div>
        </div>

        {/* <!-- Step 3 --> */}
        <div className="flex items-start">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center font-bold text-lg">3</div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-800">Apply for job</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              It is a long established fact that a reader will be distracted by the readable content of a page.
            </p>
          </div>
        </div>

      </div>
    </div>

    {/* <!-- Right Content (Image) --> */}
    <div className="w-full  flex justify-center mt-10 lg:mt-0">
      <img src={instructionAboutJobRegistrationImage}
           alt="Job Hiring Illustration" 
           className="w-full h-full object-cover" />
    </div>
  </section>
  )
}
