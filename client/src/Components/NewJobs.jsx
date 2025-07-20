import React, { useState } from "react";
import wordressImage from "../assets/newJobsImages/icons8-wordpress-50.png";
import BusinessAssociateImage from "../assets/newJobsImages/icons8-business-100.png";
const newJobs = [
  {
    id: 1,
    title: "Web Developer",
    company: "Web Technology pvt.Ltd",
    address: "Oakridge Lane ssRichardson",
    jobTime: "Full Time",
    jobType: "Private",
    jobExperiance: "Experience: 1 - 2 years",
    salary: "$1000-$1200/m",
    imageUrl: wordressImage,
  },
  {
    id: 2,
    title: "Business Associate",
    company: "Pixel Technology pvt.Ltd",
    address: "Dodge City, Louisiana",
    jobTime: "Part Time",
    jobType: "Private",
    salary: "$800-$1800/m",
    imageUrl: BusinessAssociateImage,
    jobExperiance: "Experience: 0 - 1 years",
  },
];
export default function NewJobs() {
  const [newJob, setNewJob] = useState("recentJobs");
  return (
    <section className="container mx-auto px-4 py-16">
      {/* Section Title & Description */}
      <div className="text-center mb-10 ">
        {/* 
        - text-xl for mobile
        - text-3xl for small devices
        - text-4xl for medium and above
      */}
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          New Jobs
        </h2>
        {/* 
        - text-sm for mobile
        - text-base for small devices
        - text-lg for medium and above
      */}
        <p className="text-sm sm:text-base md:text-lg text-gray-600">
          Post a job to tell us about your project. We'll quickly match you with
          the right freelancers.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-10 items-center border w-full p-3 mx-auto max-w-[50rem] bg-slate-100 rounded-full shadow">
        <button
          className={`px-4 sm:px-6 py-2 ${
            newJob === "recentJobs"
              ? "bg-blue-600 text-white"
              : " bg-white text-black"
          }   rounded-full shadow text-xs sm:text-sm md:text-base`}
          onClick={() => setNewJob("recentJobs")}
        >
          Recent Jobs
        </button>

        <button
          className={`px-4 sm:px-6 py-2 ${
            newJob === "FeaturedJobs"
              ? "bg-blue-600 text-white"
              : " bg-white text-black"
          }   rounded-full shadow text-xs sm:text-sm md:text-base`}
          onClick={() => setNewJob("FeaturedJobs")}
        >
          Featured Jobs
        </button>

        <button
          className={`px-4 sm:px-6 py-2 ${
            newJob === "Freelancer"
              ? "bg-blue-600 text-white"
              : " bg-white text-black"
          }   rounded-full shadow text-xs sm:text-sm md:text-base`}
          onClick={() => setNewJob("Freelancer")}
        >
          Freelancer
        </button>

        <button
          className={`px-4 sm:px-6 py-2 ${
            newJob === "PartTime"
              ? "bg-blue-600 text-white"
              : " bg-white text-black"
          }   rounded-full shadow text-xs sm:text-sm md:text-base`}
          onClick={() => setNewJob("PartTime")}
        >
          Part Time
        </button>

        <button
          className={`px-4 sm:px-6 py-2 ${
            newJob === "FullTime"
              ? "bg-blue-600 text-white"
              : " bg-white text-black"
          }   rounded-full shadow text-xs sm:text-sm md:text-base`}
          onClick={() => setNewJob("FullTime")}
        >
          Full Time
        </button>
      </div>

      {/* Job Cards */}
      <div className="space-y-4">
        {/* Card 1 */}
        {newJobs &&
          newJobs.map((newjob) => (
            <div
              key={newjob.id}
              className="relative bg-white rounded-md mt-5 shadow p-4 hover:-translate-y-2 hover:shadow-md  transition-transform duration-200 ease-in-out"
            >
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex items-center md:w-1/4 pl-10 mb-2 md:mb-0">
                  <img
                    src={newjob.imageUrl}
                    alt={newjob.title}
                    className="w-12 h-12 object-contain"
                  />
                  <div className="ml-3 text-left">
                    {/* 
                - text-base for mobile
                - text-lg for small devices and above
              */}
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                      {newjob.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {newjob.company}
                    </p>
                  </div>
                </div>

                <div className="flex-1 flex flex-col md:flex-row items-start md:items-center md:justify-between">
                  {/* 
              - text-xs for mobile
              - text-sm for small devices
              - text-base for medium and above
              */}
                  <div className="text-gray-600 mb-2 md:mb-0 text-xs sm:text-sm md:text-base">
                    {newjob.address}
                  </div>
                  <div className="mb-2 md:mb-0 text-xs sm:text-sm md:text-base">
                    <span className="font-bold text-gray-800 mr-4">
                      {newjob.salary}
                    </span>
                    <span className="inline-block bg-green-100 text-green-600 text-xs px-2 py-1 rounded-md mr-1">
                      {newjob.jobTime}
                    </span>
                    <span className="inline-block bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-md">
                      {newjob.jobType}
                    </span>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="text-blue-600 hover:underline text-xs sm:text-sm md:text-base"
                    >
                      Apply Now →
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-2 text-xs sm:text-sm md:text-base text-gray-500 flex flex-col sm:flex-row sm:justify-end">
                <div>{newjob.jobExperiance}</div>
              </div>
            </div>
          ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-8">
        <button
          type="button"
          className="bg-blue-600 text-white mx-auto px-3 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm sm:text-base md:text-lg "
        >
          View More
        </button>
      </div>
    </section>
  );
}
