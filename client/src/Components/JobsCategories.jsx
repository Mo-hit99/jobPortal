import React from "react";
import sowftwareImage from "../assets/jobCategoriesImages/icons8-software-development-48.png";
import technologyImage from "../assets/jobCategoriesImages/icons8-technology-40.png";
import govermentImage from "../assets/jobCategoriesImages/icons8-goverment-64.png";
import accountingFinanceImage from "../assets/jobCategoriesImages/icons8-accounting-50.png";
import contructionImage from "../assets/jobCategoriesImages/icons8-road-construction-48.png";
import teleComunicationImage from "../assets/jobCategoriesImages/icons8-globe-with-meridians-48.png";
import webDesignImage from "../assets/jobCategoriesImages/icons8-web-design-48.png";
import hrImage from "../assets/jobCategoriesImages/icons8-human-resource-48.png";

const JobCategories = [
  {
    id: 1,
    title: "IT & Software",
    totalJobs: "2024 Jobs",
    imgUrl: sowftwareImage,
  },
  {
    id: 2,
    title: "Technology",
    totalJobs: "1250 Jobs",
    imgUrl: technologyImage,
  },
  {
    id: 3,
    title: "Government",
    totalJobs: "802 Jobs",
    imgUrl: govermentImage,
  },
  {
    id: 4,
    title: "Accounting / Finance",
    totalJobs: "577 Jobs",
    imgUrl: accountingFinanceImage,
  },
  {
    id: 5,
    title: " Design & Multimedia",
    totalJobs: "1045 Jobs",
    imgUrl: webDesignImage,
  },
  {
    id: 6,
    title: "Construction / Facilities",
    totalJobs: "285 Jobs",
    imgUrl: contructionImage,
  },
  {
    id: 7,
    title: "Tele-communications",
    totalJobs: "495 Jobs",
    imgUrl: teleComunicationImage,
  },
  {
    id: 8,
    title: "Human Resource",
    totalJobs: "1516 Jobs",
    imgUrl: hrImage,
  },
];
export default function JobsCategories() {
  return (
    // <!-- Browse Job Categories Section -->
    <section className=" w-full px-4 py-16 text-center bg-gray-50">
      {/* <!-- Section Title --> */}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
        Browser Jobs Categories
      </h2>
      <p className="text-gray-600 mb-10">
        Post a job to tell us about your project.
      </p>

      {/* <!-- Categories Grid --> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        {/* <!-- Single Category Card --> */}
        {JobCategories &&
          JobCategories.map((jobs) => (
            <button
              key={jobs.id}
              className="flex flex-col items-center p-4 rounded-md 
              transition-colors 
              hover:bg-blue-100 
              active:bg-blue-200 
              focus:outline-none 
              focus:bg-blue-200"
            >
              {/* <!-- Replace with your actual icon/SVG --> */}
              <img
                src={jobs.imgUrl}
                alt={jobs.title}
                className="mb-4 w-16 h-16 object-contain"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {jobs.title}
              </h3>
              <p className="text-gray-500">{jobs.totalJobs}</p>
            </button>
          ))}
      </div>

      {/* <!-- Browse All Button --> */}
      <button
        type="button"
        className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Browse All Categories &rarr;
      </button>
    </section>
  );
}
