import React from "react";
import accountingIcon from "../assets/jobCategoriesImages/icons8-accounting-50.png";
import globeIcon from "../assets/jobCategoriesImages/icons8-globe-with-meridians-48.png";
import governmentIcon from "../assets/jobCategoriesImages/icons8-goverment-64.png";
import hrIcon from "../assets/jobCategoriesImages/icons8-human-resource-48.png";
import softwareIcon from "../assets/jobCategoriesImages/icons8-software-development-48.png";
import techIcon from "../assets/jobCategoriesImages/icons8-technology-40.png";
import webDesignIcon from "../assets/jobCategoriesImages/icons8-web-design-48.png";

const categories = [
  { name: "Accounting", icon: accountingIcon },
  { name: "Global", icon: globeIcon },
  { name: "Government", icon: governmentIcon },
  { name: "Human Resource", icon: hrIcon },
  { name: "Software Development", icon: softwareIcon },
  { name: "Technology", icon: techIcon },
  { name: "Web Design", icon: webDesignIcon },
];

export default function BrowserCategories() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Browse Categories</h1>
          <p className="text-gray-500">Explore jobs by category.</p>
        </header>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col items-center hover:shadow-lg transition">
              <img src={cat.icon} alt={cat.name} className="w-12 h-12 mb-3" />
              <h2 className="text-lg font-semibold text-gray-800">{cat.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 