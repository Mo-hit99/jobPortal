import React from "react";
import contactUsImage from "../assets/ContactUs/call-center-7040784_1280.png";
export default function ContactUsPage() {
  return (
    // <!-- Contact Section -->
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* <!-- Left Column (Form) --> */}
          <div>
            <h2 className="text-3xl font-bold mb-2">Get in touch</h2>
            <p className="text-gray-600 mb-8 max-w-md">
              Start working with Jobvia that can provide everything you need to
              generate awareness, drive traffic, connect.
            </p>

            <form className="space-y-4 shadow p-4 rounded bg-blue-200">
              {/* <!-- Name --> */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 
                         focus:outline-none focus:ring-1 focus:ring-blue-500 
                         focus:border-blue-500"
                />
              </div>

              {/* <!-- Email & Subject --> */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 
                           focus:outline-none focus:ring-1 focus:ring-blue-500 
                           focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Enter your subject"
                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 
                           focus:outline-none focus:ring-1 focus:ring-blue-500 
                           focus:border-blue-500"
                  />
                </div>
              </div>

              {/* <!-- Message --> */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  rows="4"
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 
                         focus:outline-none focus:ring-1 focus:ring-blue-500 
                         focus:border-blue-500"
                ></textarea>
              </div>

              {/* <!-- Submit Button --> */}
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold px-6 py-3 
                       rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* <!-- Right Column (Illustration + Contact Info) --> */}
          <div className="flex flex-col items-center md:items-start md:justify-center space-y-6">
            {/* <!-- Illustration --> */}
            <img
              src={contactUsImage}
              alt="Illustration"
              className="w-full h-auto object-cover"
            />

            {/* <!-- Contact Info --> */}
            <div className="space-y-3">
              {/* <!-- Address --> */}
              <div className="flex items-center text-gray-600">
                {/* <!-- Location Icon --> */}
                <svg
                  style={{
                    enableBackground: "new 0 0 48 48",
                  }}
                  viewBox="0 0 48 48"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  height={25}
                  width={25}
                  className="mr-2"
                >
                  <g id="Icons">
                    <ellipse
                      cx={24}
                      cy={38.97918}
                      rx={2.97}
                      ry={0.85673}
                      style={{
                        fill: "#4AA0EC",
                      }}
                    />
                    <g>
                      <path
                        d="M23.99965,8.16195c-5.37,0-9.71002,4.35004-9.71002,9.71002c0,1.71002,0.44,3.31,1.23004,4.70001    l-0.01001,0.01001l7.76996,11.63c0.34003,0.51001,1.10004,0.51001,1.44,0l7.76001-11.63v-0.01001    c0.79004-1.39001,1.23004-2.98999,1.23004-4.70001C33.70967,12.51198,29.34962,8.16195,23.99965,8.16195z M24.32966,24.05196    c-2.84003,0.17999-5.29004-1.96997-5.47003-4.81c-0.17999-2.83002,1.98004-5.27997,4.82001-5.45996    c2.83002-0.18005,5.28003,1.97998,5.46002,4.81C29.31965,21.43197,27.15962,23.87197,24.32966,24.05196z"
                        style={{
                          fill: "#4AA0EC",
                        }}
                      />
                      <line
                        style={{
                          fill: "none",
                          stroke: "#303030",
                          strokeWidth: 0.7,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                        }}
                        x1={16.48186}
                        x2={16.50631}
                        y1={24.03164}
                        y2={24.05609}
                      />
                      <path
                        d="    M32.48301,22.58122l-7.76333,11.63006c-0.34316,0.51408-1.09871,0.51408-1.44187,0l-7.76333-11.63006l0.00163-0.0043    c-0.78238-1.39361-1.22246-2.99503-1.22246-4.70648c0-5.35438,4.33974-9.70635,9.70635-9.70635    c5.35439,0,9.70635,4.35197,9.70635,9.70635c0,1.71145-0.44009,3.31287-1.22247,4.70648L32.48301,22.58122z"
                        style={{
                          fill: "none",
                          stroke: "#303030",
                          strokeWidth: 0.7,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                        }}
                      />
                      <path
                        d="    M30.97119,15.14711c0.17787,0.62385,0.26063,1.28602,0.23215,1.96898"
                        style={{
                          fill: "none",
                          stroke: "#303030",
                          strokeWidth: 0.7,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                        }}
                      />
                      <path
                        d="    M25.22595,10.61856c2.09651,0.08741,3.91058,1.20312,4.9756,2.83991"
                        style={{
                          fill: "none",
                          stroke: "#303030",
                          strokeWidth: 0.7,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                        }}
                      />
                      <ellipse
                        cx={24}
                        cy={18.91938}
                        rx={5.14617}
                        ry={5.14617}
                        style={{
                          fill: "none",
                          stroke: "#303030",
                          strokeWidth: 0.7,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                        }}
                        transform="matrix(0.998 -0.06316 0.06316 0.998 -1.14698 1.55354)"
                      />
                    </g>
                    <ellipse
                      cx={24}
                      cy={38.97918}
                      rx={2.97}
                      ry={0.85673}
                      style={{
                        fill: "none",
                        stroke: "#303030",
                        strokeWidth: 0.7,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeMiterlimit: 10,
                      }}
                    />
                  </g>
                </svg>
                <span>2453 Clinton Street, Little Rock, California, USA</span>
              </div>

              {/* <!-- Email --> */}
              <div className="flex items-center text-gray-600">
                {/* <!-- Email Icon --> */}
                <svg
                  viewBox="0 0 60 60"
                  xmlns="http://www.w3.org/2000/svg"
                  width={25}
                  height={25}
                  className="mr-2"
                >
                  <rect fill="#fff" height={60} rx={10} width={60} />
                  <rect
                    fill="#f1f3f4"
                    height={28}
                    rx={4}
                    width={36}
                    x={16}
                    y={16}
                  />
                  <path
                    d="M48,45.5H20A5.506,5.506,0,0,1,14.5,40V20A5.506,5.506,0,0,1,20,14.5H48A5.506,5.506,0,0,1,53.5,20V40A5.506,5.506,0,0,1,48,45.5Zm-28-28A2.5,2.5,0,0,0,17.5,20V40A2.5,2.5,0,0,0,20,42.5H48A2.5,2.5,0,0,0,50.5,40V20A2.5,2.5,0,0,0,48,17.5Z"
                    fill="#8d9cf4"
                  />
                  <path
                    d="M30.771,33.584a4,4,0,0,0,6.458,0L49.772,16.431A3.956,3.956,0,0,0,48,16H20a3.956,3.956,0,0,0-1.772.431Z"
                    fill="#f1f3f4"
                  />
                  <path
                    d="M34,36.723a5.446,5.446,0,0,1-4.44-2.253h0L17.018,17.316a1.5,1.5,0,0,1,.543-2.229A5.453,5.453,0,0,1,20,14.5H48a5.453,5.453,0,0,1,2.439.587,1.5,1.5,0,0,1,.543,2.229L38.44,34.47A5.446,5.446,0,0,1,34,36.723ZM31.982,32.7a2.5,2.5,0,0,0,4.036,0L47.131,17.5H20.869Z"
                    fill="#bec6f4"
                  />
                  <polygon fill="#c1f7fd" points="30 52 8 48 8 12 30 8 30 52" />
                  <path
                    d="M30,53.5a1.537,1.537,0,0,1-.269-.024l-22-4A1.5,1.5,0,0,1,6.5,48V12a1.5,1.5,0,0,1,1.231-1.476l22-4A1.5,1.5,0,0,1,31.5,8V52A1.5,1.5,0,0,1,30,53.5ZM9.5,46.748l19,3.455V9.8l-19,3.455Z"
                    fill="#8d9cf4"
                  />
                  <path
                    d="M19,39.5c-3.645,0-6.5-4.173-6.5-9.5s2.855-9.5,6.5-9.5,6.5,4.173,6.5,9.5S22.645,39.5,19,39.5Zm0-16c-1.655,0-3.5,2.669-3.5,6.5s1.845,6.5,3.5,6.5,3.5-2.669,3.5-6.5S20.655,23.5,19,23.5Z"
                    fill="#8d9cf4"
                  />
                </svg>
                <span>contactus@jobvia.com</span>
              </div>

              {/* <!-- Phone --> */}
              <div className="flex items-center text-gray-600">
                {/* <!-- Phone Icon --> */}
                <svg
                  data-name="Layer 1"
                  id="Layer_1"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  width={25}
                  height={25}
                  className="mr-2"
                >
                  <defs>
                    <style>
                      {
                        ".cls-1{fill:none;stroke:#078cd6;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}"
                      }
                    </style>
                  </defs>
                  <title />
                  <path
                    className="cls-1"
                    d="M33.06,46.94A31.45,31.45,0,0,1,16.89,30.55l4.21-2.84a26.28,26.28,0,0,1-1.77-9.44H9.27A36.46,36.46,0,0,0,45.73,54.73V44.67A26.29,26.29,0,0,1,36,42.78Z"
                  />
                  <path className="cls-1" d="M30.73,21.27a12,12,0,0,1,12,12" />
                  <path className="cls-1" d="M30.73,15.27a18,18,0,0,1,18,18" />
                  <path className="cls-1" d="M30.73,9.27a24,24,0,0,1,24,24" />
                </svg>
                <span>(+245) 223 1245</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
