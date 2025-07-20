import React, { useState, useEffect, useRef } from "react";
import { NavLink, Outlet } from "react-router";

const RecruiterDashboard = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const mobileMenuRef = useRef(null);

  // Close mobile menu when clicking outside
  const handleClickOutside = (event) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <div className="flex h-full">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
        <div className="p-4 text-center">
          <h2 className="text-xl font-bold text-gray-700">Recruiter Portal</h2>
        </div>
        <nav className="flex-1">
          <ul>
            <li className="border-t">
              <NavLink
                to={"/recruiter/dashboardIntro"}
                className={`flex items-center p-4 hover:bg-gray-200 ${selectedMenu === 'dashboard' ? 'border-l-4 border-blue-500 bg-gray-200': ''}`}
                onClick={() => setSelectedMenu('dashboard')}
              >
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  width={26}
                  height={26}
                >
                  <defs>
                    <style>
                      {
                        ".cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}"
                      }
                    </style>
                  </defs>
                  <title />
                  <g id="dashboard">
                    <line className="cls-1" x1={3} x2={29} y1={29} y2={29} />
                    <line className="cls-1" x1={3} x2={3} y1={3} y2={29} />
                    <line className="cls-1" x1={16} x2={16} y1={7} y2={25} />
                    <line className="cls-1" x1={22} x2={22} y1={11} y2={25} />
                    <line className="cls-1" x1={10} x2={10} y1={16} y2={25} />
                  </g>
                </svg>
                <span className="ml-2 text-gray-700">Dashboard</span>
              </NavLink>
            </li>
            <li className="border-t">
              <NavLink
                to={"/recruiter/createcompany"}
                className={`flex items-center p-4 hover:bg-gray-200 ${selectedMenu === 'createcompany' ? 'border-l-4 border-blue-500 bg-gray-200': ''}`}
                onClick={() => setSelectedMenu('createcompany')}
              >
                <svg
                  fill="none"
                  height={24}
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 21V19a4 4 0 00-4-4H9a4 4 0 00-4 4v2"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx={12}
                    cy={7}
                    r={4}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="ml-2 text-gray-700">Create Company</span>
              </NavLink>
            </li>
            <li className="border-t">
              <NavLink
                to={"/recruiter/addjobs"}
                className={`flex items-center p-4 hover:bg-gray-200 ${selectedMenu === 'addjobs' ? 'border-l-4 border-blue-500 bg-gray-200': ''}`}
                onClick={() => setSelectedMenu('addjobs')}
              >
                <svg
                  fill="none"
                  height={24}
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 18H20M22 18H20M20 18V16M20 18V20"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 11L20 11"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L14 17"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 5L20 5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="ml-2 text-gray-700">AddJobs</span>
              </NavLink>
            </li>
            <li className="border-t">
              <NavLink
                to={"/recruiter/viewjobs"}
                className={`flex items-center p-4 hover:bg-gray-200 ${selectedMenu === 'viewjobs' ? 'border-l-4 border-blue-500 bg-gray-200': ''}`}
                onClick={() => setSelectedMenu('viewjobs')}
              >
                <svg
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                >
                  <rect fill="none" />
                  <rect
                    fill="none"
                    height={144}
                    rx={8}
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={12}
                    width={192}
                    x={32}
                    y={72}
                  />
                  <path
                    d="M168,72V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V72"
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={12}
                  />
                  <line
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={12}
                    x1={32}
                    x2={224}
                    y1={160}
                    y2={160}
                  />
                </svg>
                <span className="ml-2 text-gray-700">View Jobs</span>
              </NavLink>
            </li>
           
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white flex items-center justify-between">
          <div className="flex items-center">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden mr-4"
            >
              <svg
                className=" text-black bg-slate-100 p-1 rounded ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                height={34}
                width={34}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="h-full">
          <Outlet />
        </main>
      </div>
      {/* End Main Content Area */}

      {/* Mobile Sidebar (Off-canvas) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div
            ref={mobileMenuRef}
            className="absolute left-0 top-0 h-full w-64 bg-white shadow-lg"
          >
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold text-gray-700">
                Recruiter Portal
              </h2>
            </div>
            <nav>
            <ul>
            <li className="border-t">
              <NavLink
                to={"/recruiter/dashboardIntro"}
                className="flex items-center p-4 hover:bg-gray-200"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  width={26}
                  height={26}
                >
                  <defs>
                    <style>
                      {
                        ".cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}"
                      }
                    </style>
                  </defs>
                  <title />
                  <g id="dashboard">
                    <line className="cls-1" x1={3} x2={29} y1={29} y2={29} />
                    <line className="cls-1" x1={3} x2={3} y1={3} y2={29} />
                    <line className="cls-1" x1={16} x2={16} y1={7} y2={25} />
                    <line className="cls-1" x1={22} x2={22} y1={11} y2={25} />
                    <line className="cls-1" x1={10} x2={10} y1={16} y2={25} />
                  </g>
                </svg>
                <span className="ml-2 text-gray-700">Dashboard</span>
              </NavLink>
            </li>
            <li className="border-t">
              <NavLink
                to={"/recruiter/createcompany"}
                className={`flex items-center p-4 hover:bg-gray-200 ${selectedMenu === 'createcompany' ? 'border-l-4 border-blue-500 bg-gray-200': ''}`}
                onClick={() => setSelectedMenu('createcompany')}
              >
                <svg
                  fill="none"
                  height={24}
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 21V19a4 4 0 00-4-4H9a4 4 0 00-4 4v2"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx={12}
                    cy={7}
                    r={4}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="ml-2 text-gray-700">Create Company</span>
              </NavLink>
            </li>
            <li className="border-t">
              <NavLink
                to={"/recruiter/addjobs"}
                className="flex items-center p-4 hover:bg-gray-200"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg
                  fill="none"
                  height={24}
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 18H20M22 18H20M20 18V16M20 18V20"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 11L20 11"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L14 17"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 5L20 5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="ml-2 text-gray-700">AddJobs</span>
              </NavLink>
            </li>
            <li className="border-t">
              <NavLink
                to={"/recruiter/viewjobs"}
                className="flex items-center p-4 hover:bg-gray-200"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                >
                  <rect fill="none" />
                  <rect
                    fill="none"
                    height={144}
                    rx={8}
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={12}
                    width={192}
                    x={32}
                    y={72}
                  />
                  <path
                    d="M168,72V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V72"
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={12}
                  />
                  <line
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={12}
                    x1={32}
                    x2={224}
                    y1={160}
                    y2={160}
                  />
                </svg>
                <span className="ml-2 text-gray-700">View Jobs</span>
              </NavLink>
            </li>
           
          </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecruiterDashboard;
