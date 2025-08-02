import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { authAPI } from "../services/api";
import { logout } from "../redux/authSlice";
import Avatar from "./Avatar";
export default function NavLinks() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const user = useSelector((authSlice)=> authSlice.auth.user)
  const [userDropdown,setUserDropdown]=useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  async function logoutHandler(){
    try {
      const response = await authAPI.logout();
      
      if(response.status === 200){
        dispatch(logout());
        navigate('/login');
      }
    } catch (error) {
      console.log('Logout error:', error);
      // Even if logout fails, clear local state and redirect
      dispatch(logout());
      navigate('/login');
    }
  }
  return (
    <header
      className={`${isSticky ? "bg-gray-900 sticky top-0 z-40" : "relative"} transition-all duration-300 ease-in-out shadow`}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Company Name */}
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <NavLink
              className={`${
                isSticky
                  ? "text-white transition hover:text-gray-500/75"
                  : "text-black transition hover:text-gray-500/75"
              }`}
              to={"/"}
            >
              <span>Company Name</span>
            </NavLink>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <NavLink
                    className={`${
                      isSticky
                        ? "text-white transition hover:text-gray-500/75"
                        : "text-black transition hover:text-gray-500/75"
                    }`}
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <div className="relative inline-block text-left">
                    <button
                      onClick={() => setDropdown(!dropdown)}
                      className={`flex ${
                        isSticky
                          ? "text-white transition hover:text-gray-500/75"
                          : "text-black transition hover:text-gray-500/75"
                      }`}
                    >
                      Company
                      <svg
                        className={`ml-1 mt-1 -mr-1 h-3 w-3  ${
                          dropdown
                            ? "transition-[transform] transform rotate-180"
                            : "transition-[transform] transform rotate-0"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {dropdown && (
                      <div
                        className="origin-top-right absolute right-0 mt-2 w-56 
                rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
                focus:outline-none z-40"
                        role="menu"
                      >
                        <div className="py-1" role="none">
                          <NavLink
                            to={"/aboutUs"}
                            className="block px-4 py-2 text-sm text-gray-700 
                            hover:bg-gray-100"
                            role="menuitem"
                          >
                            About Us
                          </NavLink>
                          <NavLink
                            to={"/service"}
                            className="block px-4 py-2 text-sm text-gray-700
                            hover:bg-gray-100"
                            role="menuitem"
                          >
                            Services
                          </NavLink>
                          <NavLink
                            to={"/privacyPolicy"}
                            className="block px-4 py-2 text-sm text-gray-700
                            hover:bg-gray-100"
                            role="menuitem"
                          >
                            Privacy Policy
                          </NavLink>
                          <NavLink
                            to={"/refundpolicy"}
                            className="block px-4 py-2 text-sm text-gray-700
                            hover:bg-gray-100"
                            role="menuitem"
                          >
                            Refund Policy
                          </NavLink>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
                <li>
                  <NavLink
                    className={`${
                      isSticky
                        ? "text-white transition hover:text-gray-500/75"
                        : "text-black transition hover:text-gray-500/75"
                    }`}
                    to={"/jobs"}
                  >
                    Jobs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={`${
                      isSticky
                        ? "text-white transition hover:text-gray-500/75"
                        : "text-black transition hover:text-gray-500/75"
                    }`}
                    to={"/contactUs"}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>

            {/* Desktop Login/Register */}
            <div className="hidden md:flex sm:hidden sm:gap-3">
              {user ? (
                <div className="relative">
                <button
                  id="profileButton"
                  className="flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-full"
                  onClick={()=> setUserDropdown(!userDropdown)}
                >
                  <Avatar user={user} />
                </button>
                <div
                  id="profileDropdown"
                  className={`${userDropdown ? 'absolute right-0  mt-2 w-64 rounded-lg shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transform  scale-95 transition-all duration-200 z-40' : 'hidden'} `}
                >
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">{user.FullName}</p>
                    <p className="text-sm text-gray-500 truncate">
                      {user.email}
                    </p>
                  </div>
          
                  <div className="py-1">
                    {user?.role === 'Student' && (
                    <NavLink
                      to={'/studentprofile'}
                      className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition-colors duration-150"
                    >
                      <svg
                        className="mr-3 h-5 w-5 text-gray-400 group-hover:text-indigo-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        ></path>
                      </svg>
                      Profile Settings
                    </NavLink>
                    )}
                    {/* Role-based navigation links */}
                    {user?.role === 'Recruiter' && (
                      <NavLink
                        to={'/recruiter/dashboardIntro'}
                        className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition-colors duration-150"
                      >
                        <svg
                          className="mr-3 h-5 w-5 text-gray-400 group-hover:text-indigo-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z"
                          ></path>
                        </svg>
                        Recruiter Dashboard
                      </NavLink>
                    )}

                    {user?.role === 'Student' && (
                      <NavLink
                        to={'/jobapplicationtracker'}
                        className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition-colors duration-150"
                      >
                        <svg
                          className="mr-3 h-5 w-5 text-gray-400 group-hover:text-indigo-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                                                  <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        ></path>
                        </svg>
                        Job Applications
                      </NavLink>
                    )}
          
                    <a
                      href="#"
                      className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition-colors duration-150"
                    >
                      <svg
                        className="mr-3 h-5 w-5 text-gray-400 group-hover:text-indigo-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                      Account Settings
                    </a>
          
                    <a
                      href="#"
                      className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition-colors duration-150"
                    >
                      <svg
                        className="mr-3 h-5 w-5 text-gray-400 group-hover:text-indigo-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        ></path>
                      </svg>
                      Dark Mode
                    </a>
          
                    <NavLink
                      to={'/support'}
                      className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition-colors duration-150"
                    >
                      <svg
                        className="mr-3 h-5 w-5 text-gray-400 group-hover:text-indigo-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      Help & Support
                    </NavLink>
          
                    <div className="border-t border-gray-100"></div>
          
                    <button
                      className="group flex items-center px-4 py-2 text-sm text-red-700 hover:bg-red-50 transition-colors duration-150"
                      onClick={logoutHandler}
                    >
                      <svg
                        className="mr-3 h-5 w-5 text-red-400 group-hover:text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                                              <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      ></path>
                      </svg>
                      Logout
                    </button>
                  </div>
                </div>
              </div>
                 
              ):(
                <>
              <NavLink
                className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                to={"/login"}
                >
                Login
              </NavLink>
              <NavLink
                className="relative overflow-hidden rounded-md px-10 py-2.5 text-sm font-medium text-blue-600 bg-gray-100"
                to={"/register"}
                >
                {/* <!-- Button Body --> */}
                <span
                  className={`absolute inset-px z-10 flex items-center justify-center rounded-md ${
                    isSticky
                      ? "bg-black bg-gradient-to-t from-neutral-800 text-white"
                      : "bg-white text-blue-600"
                  }`}
                >
                  Register
                </span>

                {/* <!-- Animated Border --> */}
                <span
                  aria-hidden
                  className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-purple-700 before:via-red-500 before:to-blue-600"
                  />
              </NavLink>
                  </>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                {isMobileMenuOpen ? (
                  // Close Icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  // Hamburger Icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-gray-900">
          <ul className="flex flex-col gap-4 px-4 py-4 text-sm">
            <li>
              <NavLink
                className="block text-white transition hover:text-gray-500/75"
                to={"/"}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <div className="relative inline-block text-left">
                <button
                  onClick={() => setDropdown(!dropdown)}
                  className={`flex ${"text-white transition hover:text-gray-500/75"}`}
                >
                  Company
                  <svg
                    className={`ml-1 mt-1 -mr-1 h-3 w-3  ${
                      dropdown
                        ? "transition-[transform] transform rotate-180"
                        : "transition-[transform] transform rotate-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {dropdown && (
                  <div
                    className="origin-top-right absolute left-0 mt-2 w-56 
           rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
           focus:outline-none z-10"
                    role="menu"
                  >
                    <div className="py-1" role="none">
                      <NavLink
                        to={"/aboutUs"}
                        className="block px-4 py-2 text-sm text-gray-700 
                       hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        About Us
                      </NavLink>
                      <NavLink
                        to={"/service"}
                        className="block px-4 py-2 text-sm text-gray-700
                       hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Services
                      </NavLink>
                      <NavLink
                        to={"/privacyPolicy"}
                        className="block px-4 py-2 text-sm text-gray-700
                       hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Privacy Policy
                      </NavLink>
                      <NavLink
                        to={"/refundpolicy"}
                        className="block px-4 py-2 text-sm text-gray-700
                            hover:bg-gray-100"
                        role="menuitem"
                      >
                        Refund Policy
                      </NavLink>
                    </div>
                  </div>
                )}
              </div>
            </li>
            <li>
              <NavLink
                className="block text-white transition hover:text-gray-500/75"
                to={"/jobs"}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                className="block text-white transition hover:text-gray-500/75"
                to={"/contactUs"}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
            {user ? (
              
              <div className="relative">
              <button
                id="profileButton"
                className="flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-full"
                onClick={()=> setUserDropdown(!userDropdown)}
              >
                <Avatar user={user} />
              </button>
              <div
                id="profileDropdown"
                className={`${userDropdown ? 'absolute -left-5  mt-2 w-64 rounded-lg shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transform  scale-95 transition-all duration-200' : 'hidden'} `}
              >
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-900">{user.FullName}</p>
                  <p className="text-sm text-gray-500 truncate">
                    {user.email}
                  </p>
                </div>
        
                <div className="py-1">
                  {user?.role === 'Student' && (
                  <NavLink
                    to={"/studentprofile"}
                    className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition-colors duration-150"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg
                      className="mr-3 h-5 w-5 text-gray-400 group-hover:text-indigo-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                    Profile Settings
                  </NavLink>
                  )}
                         {/* Role-based navigation links */}
                    {user?.role === 'Recruiter' && (
                      <NavLink
                        to={'/recruiter/dashboardIntro'}
                        className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition-colors duration-150"
                      >
                        <svg
                          className="mr-3 h-5 w-5 text-gray-400 group-hover:text-indigo-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z"
                          ></path>
                        </svg>
                        Recruiter Dashboard
                      </NavLink>
                    )}

                    {user?.role === 'Student' && (
                      <NavLink
                        to={'/jobapplicationtracker'}
                        className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition-colors duration-150"
                      >
                        <svg
                          className="mr-3 h-5 w-5 text-gray-400 group-hover:text-indigo-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                          ></path>
                        </svg>
                        Job Applications
                      </NavLink>
                    )}
                  <NavLink
                    to={"/accountSettings"}
                    className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition-colors duration-150"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg
                      className="mr-3 h-5 w-5 text-gray-400 group-hover:text-indigo-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                    Account Settings
                  </NavLink>
        
                  <NavLink  
                    to={"/darkMode"}
                    className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition-colors duration-150"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg
                      className="mr-3 h-5 w-5 text-gray-400 group-hover:text-indigo-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      ></path>
                    </svg>
                    Dark Mode
                  </NavLink>
        
                  <NavLink
                    to={"/helpSupport"}
                    className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition-colors duration-150"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg
                      className="mr-3 h-5 w-5 text-gray-400 group-hover:text-indigo-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    Help & Support
                  </NavLink>
        
                  <div className="border-t border-gray-100"></div>
        
                  <NavLink
                    className="group flex items-center px-4 py-2 text-sm text-red-700 hover:bg-red-50 transition-colors duration-150"
                    onClick={logoutHandler}
                  >
                    <svg
                      className="mr-3 h-5 w-5 text-red-400 group-hover:text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      ></path>
                    </svg>
                    Logout
                  </NavLink>
                </div>
              </div>
            </div>
             
            ) : (
              <>
                <li>
                  <NavLink
                    className="block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                    to={"/login"}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="block rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-600"
                    to={"/register"}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
