import React from "react";
import BrandSlider from "./BrandSlider";
import notificationImage from "../assets/notificationImage/envelope-8006082_1280.png";
import { NavLink } from "react-router";
export default function FooterContent() {
    const year = new Date().getFullYear();
  return (
    // <!-- Brand/Logo Bar -->
    <>
      {/* <section className="w-full bg-gray-100 py-6">
        <BrandSlider />
      </section> */}

      {/* // <!-- Dark Subscribe Section --> */}
      <section className="bg-gray-800 text-white py-12 relative overflow-hidden">
        <img
          src={notificationImage}
          alt="notification"
          className="absolute 
               w-32 h-32 sm:w-40 sm:h-40 
               md:w-[20rem] md:h-[20rem] 
               right-[-2rem] sm:right-[-3rem] md:right-[-8rem] 
               bottom-[-4rem] sm:bottom-[-6rem] md:bottom-[-10rem]"
        />
        <div className="container px-4 flex flex-col md:flex-row items-center justify-center">
          {/* Text */}
          <div className="mb-6 md:mb-0 md:w-2/3">
            <h3 className="text-2xl font-bold">Get New Jobs Notification!</h3>
            <p className="mt-2 text-gray-300">
              Subscribe &amp; get all related jobs notification.
            </p>
          </div>
          {/* Subscribe Form */}
          <form className="flex w-full z-10 md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l focus:outline-none w-full md:w-64 text-gray-700"
            />
            <button
              type="submit"
              className="bg-blue-500 px-4 py-2 text-white rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* <!-- Main Footer --> */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
            {/* <!-- Footer Column 1: --> */}
            <div className="sm:col-span-2">
              <h4 className="text-white text-xl font-bold mb-4">Jobvia</h4>
              <p className="text-sm leading-relaxed mb-4">
                It is a long established fact that a reader will be of a page
                reader will be of at its layout.
              </p>
              <p className="font-semibold">Follow Us on:</p>
              <div className="mt-2 flex space-x-3">
                {/* <!-- Replace # with your social links --> */}
                <a href="#" className="hover:text-blue-300">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.225 0H1.771C.792 0 0 .792 0 1.771v20.454C0 23.208.792 24 1.771 24h20.454C23.208 24 24 23.208 24 22.229V1.771C24 .792 23.208 0 22.225 0zm-6.154 8.691c.05.733-.517 1.65-1.491 1.65-.441 0-.933-.234-1.467-.701l-.61.568h-.03v3.965H10.49V8.898h1.986v.746l.028.027c.283-.312.513-.531.694-.654.181-.122.397-.184.646-.184.494 0 .826.303.84.614zM7.209 18.173H4.755V8.898h2.454v9.275zm-1.227-10.64c-.846 0-1.378-.558-1.378-1.25 0-.706.547-1.25 1.41-1.25.863 0 1.378.544 1.393 1.25 0 .692-.53 1.25-1.425 1.25zm14.09 10.64h-2.454v-4.98c0-1.188-.424-1.997-1.482-1.997-.808 0-1.289.539-1.502 1.06-.077.184-.096.441-.096.698v5.219h-2.454s.032-8.469 0-9.275h2.454v1.313c.326-.503.912-1.217 2.22-1.217 1.62 0 2.86 1.057 2.86 3.327v5.852z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-300">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.676 0H1.326C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24h11.495v-9.283H9.692v-3.623h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.324 0 2.462.099 2.792.143v3.24l-1.917.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.59l-.467 3.623h-3.123V24h6.118C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.676 0z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-300">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.556c-.885.392-1.83.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.896-.954-2.173-1.549-3.59-1.549-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.088-.205-7.72-2.164-10.148-5.144-.424.729-.666 1.574-.666 2.476 0 1.708.87 3.213 2.188 4.096-.808-.026-1.568-.248-2.23-.616v.062c0 2.385 1.697 4.374 3.946 4.827-.413.111-.85.171-1.299.171-.317 0-.626-.03-.928-.086.626 1.956 2.444 3.379 4.6 3.42-1.685 1.32-3.809 2.107-6.115 2.107-.397 0-.79-.023-1.177-.068C2.29 19.29 5.015 20 7.94 20c9.526 0 14.742-7.901 14.742-14.742 0-.225-.005-.45-.015-.674.996-.72 1.862-1.62 2.548-2.648z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* <!-- Footer Column 2: Company --> */}
            <div>
              <h5 className="text-white font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <NavLink to={'/aboutus'} className="hover:text-white">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/contactus'} className="hover:text-white">
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/service'} className="hover:text-white">
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/blog'} className="hover:text-white">
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/team'} className="hover:text-white">
                    Team
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/prices'} className="hover:text-white">
                    Pricing
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* <!-- Footer Column 3: For Jobs --> */}
            <div>
              <h5 className="text-white font-semibold mb-4">For Jobs</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <NavLink to={'/browsercategories'} className="hover:text-white">
                    Browser Categories
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/browserjobs'} className="hover:text-white">
                    Browser Jobs
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/jobdetails'} className="hover:text-white">
                    Job Details
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/bookmarkjobs'} className="hover:text-white">
                    Bookmark Jobs
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* <!-- Footer Column 4: For Candidates & Support --> */}
            <div>
              <h5 className="text-white font-semibold mb-4">For Candidates</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <NavLink to={'/candidatelist'} className="hover:text-white">
                    Candidate List
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/candidategrid'} className="hover:text-white">
                    Candidate Grid
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/candidatedetails'} className="hover:text-white">
                    Candidate Details
                  </NavLink>
                </li>
              </ul>
              <h5 className="text-white font-semibold mt-6 mb-4">Support</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <NavLink to={'/helpcenter'} className="hover:text-white">
                    Help Center
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/FAQ'} className="hover:text-white">
                    FAQ's
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/privacypolicy'} className="hover:text-white">
                    Privacy Policy
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <!-- Bottom Bar --> */}
        <div className="border-t border-gray-700 py-4">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <p className="mb-2 md:mb-0">
              {year} © <span className="text-white">Jobvia. All Rights Reserved.</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
