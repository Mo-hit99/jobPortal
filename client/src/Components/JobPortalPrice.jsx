import React, { useState } from "react";

export default function JobPortalPrice() {
  // Use null initially to indicate no plan is selected.
  const [selectedPlan, setSelectedPlan] = useState("professional");

  return (
    <>
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Heading & Subheading */}
          <div className="text-center mb-10">
            <span className="inline-block bg-yellow-100 text-yellow-600 font-medium px-3 py-1 rounded-full text-sm">
              Choose Your Plan
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
              Save up to <span className="text-blue-600">15%</span>
            </h2>
            <p className="text-gray-600 mt-2">
              The faster, most seamless CI &amp; development you'll find
              anywhere.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Starter Plan */}
            <div
              className={`relative bg-gray-50 ${
                selectedPlan === "starter" ? "border border-blue-400" : "border"
              } rounded-lg shadow p-6 pt-16 flex flex-col text-center cursor-pointer`}
              onClick={() => setSelectedPlan("starter")}
            >
              {/* Icon Circle */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white w-16 h-16 rounded-full shadow flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  id="Layer_5"
                  viewBox="0 0 100 100"
                  style={{
                    enableBackground: "new 0 0 100 100",
                  }}
                  xmlSpace="preserve"
                >
                  <style type="text/css">
                    {
                      "\n\t.st0{fill:#EEEEEE;}\n\t.st1{fill:#37474F;}\n\t.st2{fill:#D0D8DC;}\n\t.st3{fill:#B0BEC5;}\n\t.st4{fill:#90A4AE;}\n\t.st5{fill:#BDDDF4;}\n\t.st6{fill:#ECEFF0;}\n\t.st7{fill:#FFFFFF;}\n\t.st8{fill:#F4AE7A;}\n\t.st9{fill:#A3D1EE;}\n\t.st10{fill:#57A7DB;}\n\t.st11{fill:#71BE71;}\n\t.st12{fill:#E4F2FB;}\n\t.st13{fill:#99CF8C;}\n"
                    }
                  </style>
                  <g>
                    <title />
                    <g id="_Group_">
                      <g id="_Group_2">
                        <path
                          id="_Compound_Path_"
                          className="st0"
                          d="M69.6,33.4l0.2-0.5c0.3,0,0.7,0,1,0l0.2,0.4c0.1,0.3,0.5,0.4,0.7,0.3c0,0,0,0,0,0     l0.6-0.3c0.3-0.1,0.4-0.5,0.3-0.7c0,0,0,0,0,0l-0.2-0.5c0.3-0.2,0.5-0.5,0.7-0.8l0.5,0.2c0.3,0.1,0.6,0,0.7-0.3v0l0.2-0.6     c0.1-0.3,0-0.6-0.3-0.7l-0.5-0.2c0-0.3,0-0.7,0-1l0.4-0.2c0.3-0.1,0.4-0.5,0.3-0.7c0,0,0,0,0,0L74.2,27c-0.1-0.3-0.5-0.4-0.7-0.3     c0,0,0,0,0,0L73,27c-0.2-0.3-0.5-0.5-0.8-0.7l0.2-0.4c0.1-0.3,0-0.6-0.3-0.7l-0.6-0.2c-0.1-0.1-0.3-0.1-0.4,0     c-0.1,0.1-0.3,0.2-0.3,0.3l-0.2,0.5c-0.3,0-0.7,0-1,0l-0.2-0.4c-0.1-0.3-0.5-0.4-0.7-0.3c0,0,0,0,0,0l-0.6,0.3     c-0.3,0.1-0.4,0.5-0.3,0.7c0,0,0,0,0,0l0.2,0.5c-0.3,0.2-0.5,0.5-0.7,0.8l-0.5-0.2c-0.1-0.1-0.3-0.1-0.4,0     c-0.1,0.1-0.3,0.2-0.3,0.3l-0.2,0.6c-0.1,0.1-0.1,0.3,0,0.5c0.1,0.1,0.2,0.3,0.3,0.3l0.5,0.2c0,0.3,0,0.7,0,1l-0.4,0.2     c-0.3,0.1-0.4,0.5-0.3,0.7c0,0,0,0,0,0l0.3,0.6c0.1,0.3,0.5,0.4,0.7,0.3c0,0,0,0,0,0l0.4-0.3c0.2,0.3,0.5,0.5,0.8,0.7L68,32.8     c-0.1,0.1-0.1,0.3,0,0.5c0.1,0.1,0.2,0.3,0.3,0.3l0.6,0.2C69.2,33.9,69.5,33.7,69.6,33.4C69.6,33.4,69.6,33.4,69.6,33.4z      M68.1,30.3c-0.1-0.3-0.2-0.6-0.2-1c0-0.9,0.5-1.7,1.3-2.1c1.1-0.5,2.5,0,3,1.1l0,0c0.1,0.3,0.2,0.6,0.2,1c0,0.9-0.5,1.7-1.3,2.1     C70,31.9,68.7,31.4,68.1,30.3C68.1,30.3,68.1,30.3,68.1,30.3z"
                        />
                        <path
                          id="_Compound_Path_2"
                          className="st0"
                          d="M68,39.1l0.1-0.3c0.2,0,0.4,0,0.6,0l0.1,0.3c0.1,0.2,0.3,0.2,0.4,0.2c0,0,0,0,0,0     l0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.4c0,0,0,0,0,0l-0.1-0.3c0.2-0.1,0.3-0.3,0.4-0.4l0.3,0.1c0.2,0.1,0.3,0,0.4-0.2l0.1-0.3     c0.1-0.2,0-0.3-0.2-0.4l-0.3-0.1c0-0.2,0-0.4,0-0.6l0.3-0.1c0.2-0.1,0.2-0.3,0.2-0.4c0,0,0,0,0,0l-0.1-0.3     c-0.1-0.2-0.3-0.2-0.4-0.2c0,0,0,0,0,0l-0.3,0.1c-0.1-0.2-0.3-0.3-0.4-0.4l0.1-0.3c0.1-0.2,0-0.3-0.2-0.4L69,34.4     c-0.1,0-0.2,0-0.2,0c-0.1,0-0.2,0.1-0.2,0.2l-0.1,0.3c-0.2,0-0.4,0-0.6,0l-0.1-0.3c-0.1-0.2-0.3-0.2-0.4-0.2c0,0,0,0,0,0L67,34.6     c-0.2,0.1-0.2,0.3-0.2,0.4c0,0,0,0,0,0l0.1,0.3c-0.2,0.1-0.3,0.3-0.4,0.4l-0.3-0.1c-0.1,0-0.2,0-0.2,0c-0.1,0-0.2,0.1-0.2,0.2     l-0.1,0.3c0,0.1,0,0.2,0,0.2c0,0.1,0.1,0.1,0.2,0.2l0.3,0.1c0,0.2,0,0.4,0,0.6L66,37.4c-0.2,0.1-0.2,0.3-0.2,0.4c0,0,0,0,0,0     l0.1,0.3c0.1,0.2,0.3,0.2,0.4,0.2c0,0,0,0,0,0l0.3-0.1c0.1,0.2,0.3,0.3,0.4,0.4L67,38.8c0,0.1,0,0.2,0,0.2c0,0.1,0.1,0.2,0.2,0.2     l0.3,0.1C67.7,39.4,67.9,39.3,68,39.1z M67.1,37.4C67,37.2,67,37,67,36.8c0-0.5,0.3-0.9,0.7-1.1c0.6-0.3,1.4,0,1.7,0.6     c0.1,0.2,0.1,0.4,0.1,0.5c0,0.5-0.3,0.9-0.7,1.1C68.2,38.3,67.4,38,67.1,37.4L67.1,37.4z"
                        />
                        <path
                          id="_Compound_Path_3"
                          className="st0"
                          d="M78.1,45.2l0.3-0.8c0.6,0.1,1.2,0,1.8-0.1l0.4,0.8c0.2,0.5,0.8,0.7,1.3,0.5l1-0.4     c0.5-0.2,0.7-0.8,0.5-1.3L83,43.1c0.5-0.4,0.9-0.8,1.2-1.3L85,42c0.5,0.2,1.1-0.1,1.3-0.6l0.4-1c0.2-0.5-0.1-1.1-0.6-1.3     l-0.8-0.3c0.1-0.6,0-1.2-0.1-1.8l0.7-0.4c0.5-0.2,0.7-0.8,0.5-1.3l-0.5-1c-0.2-0.5-0.8-0.7-1.3-0.5l-0.8,0.4     c-0.4-0.5-0.8-0.9-1.3-1.2l0.3-0.8c0.2-0.5-0.1-1.1-0.6-1.3l-1-0.4c-0.2-0.1-0.5-0.1-0.7,0c-0.2,0.1-0.4,0.3-0.5,0.5l-0.3,0.8     c-0.6-0.1-1.2,0-1.8,0.1l-0.4-0.8c-0.2-0.5-0.8-0.7-1.3-0.5l-1,0.5c-0.5,0.2-0.7,0.8-0.5,1.3l0.4,0.8c-0.5,0.4-0.9,0.8-1.2,1.3     l-0.8-0.3c-0.2-0.1-0.5-0.1-0.7,0c-0.2,0.1-0.4,0.3-0.5,0.5l-0.4,1c-0.1,0.2-0.1,0.5,0,0.7c0.1,0.2,0.3,0.4,0.5,0.5l0.8,0.3     c-0.1,0.6,0,1.2,0.1,1.8l-0.8,0.4c-0.5,0.2-0.7,0.8-0.5,1.3l0.4,1c0.2,0.5,0.8,0.7,1.3,0.5l0.8-0.4c0.4,0.5,0.8,0.9,1.3,1.2     l-0.3,0.8c-0.1,0.2-0.1,0.5,0,0.7c0.1,0.2,0.3,0.4,0.5,0.5l1,0.4C77.3,46,77.9,45.7,78.1,45.2C78.1,45.2,78.1,45.2,78.1,45.2z      M75.6,39.8c-0.2-0.5-0.4-1-0.4-1.6c0-2.1,1.7-3.8,3.8-3.8c1.5,0,2.9,0.9,3.5,2.2c0.2,0.5,0.4,1,0.4,1.6c0,2.1-1.7,3.8-3.8,3.8     C77.6,42.1,76.2,41.2,75.6,39.8L75.6,39.8z"
                        />
                      </g>
                    </g>
                    <g>
                      <g id="_Group_3">
                        <path
                          id="_Path_4"
                          className="st1"
                          d="M23.4,35.7c-0.7,0-1.2,0.6-1.2,1.2l0,0l0,0v31c0,0.7,0.6,1.2,1.2,1.3l0,0h48.1     c0.7,0,1.2-0.6,1.2-1.2l0,0v-31c0-0.7-0.6-1.2-1.2-1.2l0,0L23.4,35.7L23.4,35.7z"
                        />
                        <path
                          id="_Path_5"
                          className="st2"
                          d="M19.4,70.6h56.1c1.5,0,2.7-1.2,2.7-2.7H16.8C16.8,69.4,18,70.6,19.4,70.6z"
                        />
                        <path
                          id="_Path_6"
                          className="st3"
                          d="M17.2,69.4c0.5,0.8,1.3,1.2,2.3,1.2h56.1c0.9,0,1.8-0.5,2.3-1.2H17.2z"
                        />
                        <circle
                          id="_Path_7"
                          className="st4"
                          cx={21.6}
                          cy={68.6}
                          r={0.3}
                        />
                        <circle
                          id="_Path_8"
                          className="st4"
                          cx={20.8}
                          cy={68.6}
                          r={0.3}
                        />
                        <circle
                          id="_Path_9"
                          className="st4"
                          cx={19.9}
                          cy={68.6}
                          r={0.3}
                        />
                      </g>
                      <g id="_Group_2-2">
                        <rect
                          x={24.3}
                          y={37.7}
                          className="st5"
                          width={46.4}
                          height={28.9}
                        />
                      </g>
                      <rect
                        x={24.3}
                        y={37.7}
                        className="st6"
                        width={46.4}
                        height={5}
                      />
                      <path
                        className="st7"
                        d="M27.3,41.3l-1.2-1.2l1.2-1.2L27,38.6l-1.5,1.5l1.5,1.5L27.3,41.3z M28.7,41.3l1.2-1.2L28.7,39l0.4-0.4    l1.5,1.5L29,41.6L28.7,41.3z"
                      />
                      <circle className="st5" cx={66.1} cy={38.7} r={0.4} />
                      <circle className="st5" cx={67.7} cy={38.7} r={0.4} />
                      <circle className="st5" cx={69.2} cy={38.7} r={0.4} />
                    </g>
                    <g>
                      <g>
                        <rect
                          id="_Path_27_2_"
                          x={51.3}
                          y={46.3}
                          className="st6"
                          width={6.9}
                          height={6.9}
                        />
                        <rect
                          id="_Path_30-2_2_"
                          x={60.1}
                          y={46.3}
                          className="st6"
                          width={6.9}
                          height={6.9}
                        />
                      </g>
                      <g>
                        <rect
                          id="_Path_27_1_"
                          x={51.3}
                          y={55.2}
                          className="st6"
                          width={6.9}
                          height={6.9}
                        />
                        <rect
                          id="_Path_30-2_1_"
                          x={60.1}
                          y={55.2}
                          className="st6"
                          width={6.9}
                          height={6.9}
                        />
                      </g>
                      <g>
                        <rect
                          x={27.9}
                          y={46.3}
                          className="st7"
                          width={20.2}
                          height={15.7}
                        />
                        <g>
                          <rect
                            x={38.6}
                            y={48.5}
                            transform="matrix(0.1835 -0.983 0.983 0.1835 -16.448 81.085)"
                            className="st8"
                            width={3.9}
                            height={3.9}
                          />
                          <path
                            className="st9"
                            d="M38.5,53.3l-3.2,1c-0.4,0.1-0.8-0.1-0.9-0.5l-1-3.2c-0.1-0.4,0.1-0.8,0.5-0.9l3.2-1      c0.4-0.1,0.8,0.1,0.9,0.5l1,3.2C39.1,52.8,38.9,53.2,38.5,53.3z"
                          />
                          <path
                            className="st3"
                            d="M39.7,60.2c-0.6,0-1.1-0.5-1.1-1.1c0-0.3,0.1-0.5,0.3-0.8l0.1-0.2h-3.1l0.1,0.2c0.2,0.2,0.3,0.5,0.3,0.8      c0,0.6-0.5,1.1-1.1,1.1c-0.6,0-1.1-0.5-1.1-1.1c0-0.3,0.1-0.5,0.3-0.8l0.1-0.2h-0.5c-0.1,0-0.2,0-0.2-0.1s-0.1-0.2,0-0.2      l0.6-1.7c0-0.1,0.1-0.1,0.2-0.2l0.1,0l-2.2-6.3l-1.8-0.7c-0.2-0.1-0.2-0.3-0.2-0.4c0.1-0.1,0.2-0.2,0.3-0.2c0,0,0.1,0,0.1,0      l1.9,0.8c0.1,0,0.2,0.1,0.2,0.2l0.4,1.2h9.4c0.1,0,0.2,0,0.3,0.1c0.1,0.1,0.1,0.2,0,0.3v0l-1.7,5.4c0,0.1-0.2,0.2-0.3,0.2h-6      c0,0-0.1,0-0.1,0l-0.1,0l-0.5,1.3H41c0.1,0,0.3,0.1,0.3,0.3s-0.1,0.3-0.3,0.3h-0.6l0.1,0.2c0.2,0.2,0.3,0.5,0.3,0.8      C40.9,59.7,40.3,60.2,39.7,60.2z M39.7,58.4c-0.4,0-0.6,0.3-0.6,0.6c0,0.4,0.3,0.6,0.6,0.6c0.4,0,0.6-0.3,0.6-0.6      C40.4,58.7,40.1,58.4,39.7,58.4z M35.2,58.4c-0.4,0-0.6,0.3-0.6,0.6c0,0.4,0.3,0.6,0.6,0.6c0.4,0,0.6-0.3,0.6-0.6      C35.9,58.7,35.6,58.4,35.2,58.4z M39.1,55.8v-1.1H37v1.1H39.1z M36.4,55.8v-1.1h-1.5l0.4,1.1H36.4z M40.8,55.8l0.3-1.1h-1.4v1.1      H40.8z M41.4,54l0.4-1.2h-2V54H41.4z M39.1,54v-1.2H37V54H39.1z M36.4,54v-1.2h-2.1l0.4,1.2H36.4z M36.4,52.2V51h-2.7l0.4,1.1      H36.4z M42,52.2l0.4-1.1h-2.6v1.1H42z M39.1,52.2V51H37v1.1H39.1z"
                          />
                        </g>
                      </g>
                    </g>
                    <g>
                      <path
                        className="st9"
                        d="M40,25.5v19.9H13V25h26.5C39.8,25,40,25.2,40,25.5C40,25.5,40,25.5,40,25.5z"
                      />
                      <path
                        className="st10"
                        d="M40,25.5v2.9H13v-2.9c0-0.3,0.2-0.5,0.5-0.5h25.9C39.8,25,40,25.2,40,25.5z"
                      />
                      <path
                        className="st7"
                        d="M15.2,27.1L15.2,27.1c-0.2,0-0.4-0.2-0.4-0.4c0-0.2,0.2-0.4,0.4-0.4c0,0,0,0,0,0l0,0c0.2,0,0.4,0.2,0.4,0.4    C15.6,26.9,15.4,27.1,15.2,27.1z"
                      />
                      <path
                        className="st7"
                        d="M16.4,27.1L16.4,27.1c-0.2,0-0.4-0.2-0.4-0.4c0-0.2,0.2-0.4,0.4-0.4c0,0,0,0,0,0l0,0c0.2,0,0.4,0.2,0.4,0.4    C16.9,26.9,16.7,27.1,16.4,27.1C16.5,27.1,16.4,27.1,16.4,27.1z"
                      />
                      <path
                        className="st7"
                        d="M17.7,27.1L17.7,27.1c-0.2,0-0.4-0.2-0.4-0.4c0-0.2,0.2-0.4,0.4-0.4l0,0c0.2,0,0.4,0.2,0.4,0.4    C18.1,26.9,17.9,27.1,17.7,27.1C17.7,27.1,17.7,27.1,17.7,27.1z"
                      />
                      <path
                        className="st7"
                        d="M37.9,27.1h-0.8c-0.2,0-0.4-0.2-0.4-0.4c0-0.2,0.2-0.4,0.4-0.4h0.8c0.2,0,0.4,0.2,0.4,0.4    S38.1,27.1,37.9,27.1C37.9,27.1,37.9,27.1,37.9,27.1z"
                      />
                      <path
                        className="st7"
                        d="M16.5,35.1h5.4c0.8,0,1.4,0.6,1.4,1.4c0,0.8-0.6,1.4-1.4,1.4h-5.4c-0.8,0-1.4-0.6-1.4-1.4    C15.1,35.7,15.7,35.1,16.5,35.1z"
                      />
                      <path
                        className="st8"
                        d="M17.8,36.5c0,0.8-0.6,1.4-1.4,1.4c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4l0,0    C17.2,35.1,17.8,35.8,17.8,36.5z"
                      />
                      <path
                        className="st7"
                        d="M21.8,33.2h-5.4c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4l0,0h5.4c0.8,0,1.4,0.6,1.4,1.4    S22.6,33.2,21.8,33.2L21.8,33.2z"
                      />
                      <path
                        className="st11"
                        d="M23.2,31.8c0,0.8-0.6,1.4-1.4,1.4s-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4l0,0C22.6,30.4,23.2,31,23.2,31.8z    "
                      />
                      <path
                        className="st7"
                        d="M21.8,42.6h-5.4c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4l0,0h5.4c0.8,0,1.4,0.6,1.4,1.4    C23.2,42,22.6,42.6,21.8,42.6L21.8,42.6z"
                      />
                      <path
                        className="st11"
                        d="M23.2,41.2c0,0.8-0.6,1.4-1.4,1.4s-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4l0,0    C22.6,39.8,23.2,40.5,23.2,41.2z"
                      />
                      <path
                        className="st12"
                        d="M32.6,41.2h-7.3c-0.2,0-0.4-0.2-0.4-0.4c0-0.2,0.2-0.4,0.4-0.4c0,0,0,0,0,0h7.3c0.2,0,0.4,0.2,0.4,0.4    S32.9,41.2,32.6,41.2C32.6,41.2,32.6,41.2,32.6,41.2L32.6,41.2z"
                      />
                      <path
                        className="st12"
                        d="M27.2,42.5h-1.9c-0.2,0-0.4-0.2-0.4-0.4c0-0.2,0.2-0.4,0.4-0.4h1.9c0.2,0,0.4,0.2,0.4,0.4    C27.6,42.3,27.4,42.5,27.2,42.5z"
                      />
                      <path
                        className="st12"
                        d="M37.2,42.5h-8.9c-0.2,0-0.4-0.2-0.4-0.4c0-0.2,0.2-0.4,0.4-0.4h8.9c0.2,0,0.4,0.2,0.4,0.4    C37.7,42.3,37.5,42.5,37.2,42.5z"
                      />
                      <path
                        className="st12"
                        d="M26.7,36.4h-1.4c-0.2,0-0.4-0.2-0.4-0.4c0-0.2,0.2-0.4,0.4-0.4h1.4c0.2,0,0.4,0.2,0.4,0.4    C27.2,36.3,27,36.4,26.7,36.4L26.7,36.4L26.7,36.4z"
                      />
                      <path
                        className="st12"
                        d="M37.2,36.4h-9.3c-0.2,0-0.4-0.2-0.4-0.4c0-0.2,0.2-0.4,0.4-0.4h9.3c0.2,0,0.4,0.2,0.4,0.4    C37.7,36.3,37.5,36.4,37.2,36.4z"
                      />
                      <path
                        className="st12"
                        d="M37.2,37.7H25.3c-0.2,0-0.4-0.2-0.4-0.4c0-0.2,0.2-0.4,0.4-0.4c0,0,0,0,0,0h11.9c0.2,0,0.4,0.2,0.4,0.4    C37.6,37.5,37.4,37.7,37.2,37.7z"
                      />
                      <path
                        className="st12"
                        d="M32.6,31.6h-7.3c-0.2,0-0.4-0.2-0.4-0.4c0-0.2,0.2-0.4,0.4-0.4h7.3c0.2,0,0.4,0.2,0.4,0.4    C33,31.5,32.8,31.6,32.6,31.6L32.6,31.6z"
                      />
                      <path
                        className="st12"
                        d="M32,32.9h-6.7c-0.2,0-0.4-0.2-0.4-0.4c0-0.2,0.2-0.4,0.4-0.4c0,0,0,0,0,0H32c0.2,0,0.4,0.2,0.4,0.4    S32.3,32.9,32,32.9C32,32.9,32,32.9,32,32.9L32,32.9z"
                      />
                      <path
                        className="st12"
                        d="M37.2,32.9h-4.1c-0.2,0-0.4-0.2-0.4-0.4c0-0.2,0.2-0.4,0.4-0.4c0,0,0,0,0,0h4.1c0.2,0,0.4,0.2,0.4,0.4    C37.6,32.7,37.4,32.9,37.2,32.9z"
                      />
                      <path
                        className="st10"
                        d="M24.5,74.2c0.3,0,0.5-0.2,0.5-0.5v0l-0.2-23.5v-0.1c0-0.2,0.1-0.3,0.3-0.4c3.4-1.7,4.7-5.8,3-9.2    c-0.4-0.8-1-1.5-1.7-2.1c-0.2-0.2-0.6-0.2-0.8,0.1c-0.1,0.1-0.1,0.2-0.1,0.4v4.4c0,0.2-0.1,0.3-0.3,0.4l-2.9,1.5    c-0.1,0.1-0.3,0.1-0.4,0l-3-1.5c-0.2-0.1-0.3-0.2-0.3-0.4v-4.4c0-0.2-0.1-0.4-0.3-0.5c-0.2-0.1-0.5-0.1-0.6,0.1    c-2.9,2.4-3.3,6.7-0.8,9.6c0.6,0.7,1.3,1.3,2.1,1.7c0.2,0.1,0.3,0.2,0.3,0.4v0.1l-0.2,23.5c0,0.3,0.2,0.5,0.5,0.5c0,0,0,0,0,0    L24.5,74.2z"
                      />
                    </g>
                    <g>
                      <path
                        className="st10"
                        d="M86.7,60v14.2c0,0.5-0.4,0.8-0.8,0.8H64.5l0,0c-0.5,0-0.8-0.4-0.8-0.8V60l0,0L86.7,60L86.7,60z"
                      />
                      <path
                        className="st13"
                        d="M85.9,56.8c0.4,0,0.8,0.3,0.8,0.8V60l0,0h-23l0,0v-2.5l0,0c0-0.4,0.3-0.8,0.8-0.8H85.9L85.9,56.8z"
                      />
                      <rect
                        x={79.5}
                        y={61.7}
                        className="st5"
                        width={5.4}
                        height={5.4}
                      />
                      <rect
                        x={72.4}
                        y={61.7}
                        className="st5"
                        width={5.4}
                        height={5.4}
                      />
                      <rect
                        x={65.4}
                        y={61.7}
                        className="st5"
                        width={5.4}
                        height={5.4}
                      />
                      <rect
                        x={79.5}
                        y={68.1}
                        className="st5"
                        width={5.4}
                        height={5.4}
                      />
                      <rect
                        x={72.4}
                        y={68.1}
                        className="st5"
                        width={5.4}
                        height={5.4}
                      />
                      <rect
                        x={65.4}
                        y={68.1}
                        className="st5"
                        width={5.4}
                        height={5.4}
                      />
                      <circle className="st11" cx={63.5} cy={57.7} r={5.5} />
                      <path
                        className="st7"
                        d="M60.1,57.7c0,0.2,0.2,0.4,0.4,0.4H63v2.6c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4v-2.6h2.6    c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.2-0.4-0.4-0.4h-2.6v-2.6c0-0.2-0.2-0.4-0.4-0.4S63,54.5,63,54.7v2.6h-2.6    C60.2,57.2,60.1,57.4,60.1,57.7z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Starter</h3>
              <div className="mt-2 text-3xl font-bold text-gray-800">
                $35.99
                <span className="text-base font-medium text-gray-500">/mo</span>
              </div>

              {/* Feature List */}
              <ul className="mt-4 mb-6 text-left mx-auto space-y-2 w-3/4">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Unlimited file recovery</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Professional reports</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Sell on marketplaces</span>
                </li>
                <li className="flex items-center line-through text-gray-400">
                  <svg
                    className="w-5 h-5 text-red-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span>Unlimited Builds</span>
                </li>
                <li className="flex items-center line-through text-gray-400">
                  <svg
                    className="w-5 h-5 text-red-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span>Job displayed for 30 days</span>
                </li>
                <li className="flex items-center line-through text-gray-400">
                  <svg
                    className="w-5 h-5 text-red-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span>Premium Support 24/7</span>
                </li>
              </ul>

              {/* Purchase Button */}
              <a
                href="#"
                className="mt-auto inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition"
              >
                Purchase Now &rarr;
              </a>
            </div>

            {/* Professional Plan */}
            <div
              className={`relative bg-gray-50 ${
                selectedPlan === "professional"
                  ? "border border-blue-400"
                  : "border"
              } rounded-lg shadow p-6 pt-16 flex flex-col text-center cursor-pointer`}
              onClick={() => setSelectedPlan("professional")}
            >
              {/* Icon Circle */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white w-16 h-16 rounded-full shadow flex items-center justify-center">
                <svg
                  id="ICON"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <style>
                      {
                        ".cls-1{fill:#b8d7f1;}.cls-1,.cls-2,.cls-3,.cls-4{stroke:#686881;stroke-linecap:round;stroke-linejoin:round;stroke-width:15px;}.cls-2{fill:#63a7dc;}.cls-3{fill:#fff;}.cls-4{fill:none;}"
                      }
                    </style>
                  </defs>
                  <title />
                  <rect
                    className="cls-1"
                    height={256}
                    rx={25.58}
                    ry={25.58}
                    width={384}
                    x={64}
                    y={153}
                  />
                  <path
                    className="cls-2"
                    d="M127.75,153h256.5a0,0,0,0,1,0,0V258.25A50.75,50.75,0,0,1,333.5,309h-155a50.75,50.75,0,0,1-50.75-50.75V153A0,0,0,0,1,127.75,153Z"
                  />
                  <rect
                    className="cls-3"
                    height={52}
                    rx={26}
                    ry={26}
                    width={72}
                    x={220}
                    y={283}
                  />
                  <path
                    className="cls-4"
                    d="M203.25,103h105a25,25,0,0,1,25,25v25a0,0,0,0,1,0,0h-155a0,0,0,0,1,0,0V128A25,25,0,0,1,203.25,103Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Professional</h3>
              <div className="mt-2 text-3xl font-bold text-gray-800">
                $49.99
                <span className="text-base font-medium text-gray-500">/mo</span>
              </div>

              {/* Feature List */}
              <ul className="mt-4 mb-6 text-left mx-auto space-y-2 w-3/4">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Unlimited file recovery</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Professional reports</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Sell on marketplaces</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Unlimited Builds</span>
                </li>
                <li className="flex items-center line-through text-gray-400">
                  <svg
                    className="w-5 h-5 text-red-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span>Job displayed for 30 days</span>
                </li>
                <li className="flex items-center line-through text-gray-400">
                  <svg
                    className="w-5 h-5 text-red-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span>Premium Support 24/7</span>
                </li>
              </ul>

              {/* Purchase Button */}
              <a
                href="#"
                className="mt-auto inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition"
              >
                Purchase Now &rarr;
              </a>
            </div>

            {/* Enterprise Plan */}
            <div
              className={`relative bg-gray-50 ${
                selectedPlan === "enterprise"
                  ? "border border-blue-400"
                  : "border"
              } rounded-lg shadow p-6 pt-16 flex flex-col text-center cursor-pointer`}
              onClick={() => setSelectedPlan("enterprise")}
            >
              {/* Icon Circle */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white w-16 h-16 rounded-full shadow flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  id="Layer_1"
                  viewBox="0 0 100 100"
                  style={{
                    enableBackground: "new 0 0 100 100",
                  }}
                  xmlSpace="preserve"
                >
                  <style type="text/css">
                    {
                      "\n\t.st0{fill:#D6EEFC;}\n\t.st1{fill:#005EB8;}\n\t.st2{fill:#0A84F2;}\n\t.st3{fill:#A5DDFC;}\n\t.st4{fill:#70BEF2;}\n\t.st5{fill:#FFFFFF;}\n\t.st6{fill:#F1920C;}\n\t.st7{fill:#F9B75F;}\n"
                    }
                  </style>
                  <g>
                    <circle className="st0" cx={47} cy={51.2} r={33.1} />
                    <g>
                      <g>
                        <g>
                          <g>
                            <path
                              className="st1"
                              d="M72.4,73.3H21.7V41.7c0-1.6,1.3-2.9,2.9-2.9h44.8c1.6,0,2.9,1.3,2.9,2.9V73.3z"
                            />
                          </g>
                          <g>
                            <rect
                              x={32.4}
                              y={33.3}
                              transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 103.0321 8.9733)"
                              className="st0"
                              width={29.2}
                              height={45.3}
                            />
                          </g>
                          <g>
                            <path
                              className="st2"
                              d="M15.3,73.3L15.3,73.3h63.4l0,0c0,0.9-0.8,1.7-1.7,1.7H17C16.1,74.9,15.3,74.2,15.3,73.3z"
                            />
                          </g>
                          <g>
                            <path
                              className="st3"
                              d="M38.6,73.5v-0.2h16.9v0.2c0,0.3-0.3,0.6-0.6,0.6H39.2C38.9,74.1,38.6,73.8,38.6,73.5z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <rect
                              x={24.4}
                              y={41.4}
                              className="st2"
                              width={45.3}
                              height={2.7}
                            />
                          </g>
                          <g>
                            <g>
                              <circle
                                className="st4"
                                cx={68.5}
                                cy={42.7}
                                r={0.6}
                              />
                            </g>
                            <g>
                              <circle
                                className="st4"
                                cx={66.6}
                                cy={42.7}
                                r={0.6}
                              />
                            </g>
                            <g>
                              <circle
                                className="st4"
                                cx={64.7}
                                cy={42.7}
                                r={0.6}
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect
                            x={26.3}
                            y={46.2}
                            className="st1"
                            width={25.8}
                            height={22.2}
                          />
                          <path
                            className="st5"
                            d="M29.2,49.2c0,0.3,0.2,0.6,0.6,0.6h1.8l2.1,6.3c0,0.1,0,0.1,0.1,0.2l2,6.1c-0.7,0.3-1.1,0.9-1.1,1.7      c0,1,0.8,1.9,1.9,1.9s1.9-0.8,1.9-1.9c0-0.3-0.1-0.5-0.2-0.8h5.3c-0.1,0.2-0.2,0.5-0.2,0.8c0,1,0.8,1.9,1.9,1.9s1.9-0.8,1.9-1.9      c0-1-0.7-1.7-1.6-1.9c0,0-0.1,0-0.1,0h-8.4l-0.8-2.3h2.6c0,0,0,0,0,0c0,0,0,0,0,0h4.1c0,0,0,0,0,0c0,0,0,0,0,0h3.5      c0.2,0,0.5-0.2,0.5-0.4l2.2-6.7c0.1-0.2,0-0.4-0.1-0.5c-0.1-0.1-0.3-0.2-0.5-0.2h-15l-1-3c-0.1-0.2-0.3-0.4-0.5-0.4h-2.2      C29.5,48.7,29.2,48.9,29.2,49.2z M33.9,53.1h3.5l0.3,2.2h-3L33.9,53.1z M39.2,58.7l-0.3-2.2h3.7l-0.3,2.2H39.2z M38.8,55.4      l-0.3-2.2h4.6l-0.3,2.2H38.8z M47.8,53.1L47,55.4h-3.1l0.3-2.2H47.8z M45.9,58.7h-2.5l0.3-2.2h2.9L45.9,58.7z M35.7,58.7      L35,56.5h2.8l0.3,2.2H35.7z M45.2,63.2c0.4,0,0.8,0.3,0.8,0.8s-0.3,0.8-0.8,0.8s-0.8-0.3-0.8-0.8S44.8,63.2,45.2,63.2z M35.7,64      c0-0.4,0.3-0.8,0.8-0.8c0.4,0,0.8,0.3,0.8,0.8s-0.3,0.8-0.8,0.8C36.1,64.7,35.7,64.4,35.7,64z"
                          />
                        </g>
                      </g>
                      <rect
                        x={53.8}
                        y={46.2}
                        className="st1"
                        width={14.4}
                        height={3.1}
                      />
                      <rect
                        x={53.8}
                        y={51.3}
                        className="st3"
                        width={14.4}
                        height={1.8}
                      />
                      <rect
                        x={53.8}
                        y={54.4}
                        className="st3"
                        width={14.4}
                        height={1.8}
                      />
                      <rect
                        x={53.8}
                        y={57.6}
                        className="st3"
                        width={14.4}
                        height={1.8}
                      />
                      <rect
                        x={53.8}
                        y={60.8}
                        className="st3"
                        width={14.4}
                        height={1.8}
                      />
                      <path
                        className="st6"
                        d="M65.9,68.3H56c-0.7,0-1.3-0.6-1.3-1.3v-1.8c0-0.7,0.6-1.3,1.3-1.3h9.9c0.7,0,1.3,0.6,1.3,1.3v1.8    C67.2,67.8,66.6,68.3,65.9,68.3z"
                      />
                    </g>
                    <circle className="st7" cx={68.9} cy={32.9} r={17.1} />
                    <g>
                      <path
                        className="st5"
                        d="M62.9,37.7h-5.7v-9.6h5.7v2.1h-3.1v1.5h2.9v2.1h-2.9v1.8h3.1V37.7z"
                      />
                      <path
                        className="st5"
                        d="M67.2,34.2v3.5h-2.6v-9.6h3.1c2.6,0,3.9,0.9,3.9,2.8c0,1.1-0.5,2-1.6,2.6l2.8,4.2h-2.9l-2-3.5H67.2z     M67.2,32.2h0.5c0.9,0,1.4-0.4,1.4-1.2c0-0.7-0.4-1-1.3-1h-0.5V32.2z"
                      />
                      <path
                        className="st5"
                        d="M80.7,31.1c0,1.1-0.3,1.9-0.9,2.5c-0.6,0.6-1.5,0.9-2.7,0.9h-0.7v3.2h-2.6v-9.6H77c1.2,0,2.1,0.3,2.7,0.8    C80.3,29.4,80.7,30.1,80.7,31.1z M76.3,32.4h0.5c0.4,0,0.7-0.1,0.9-0.3c0.2-0.2,0.3-0.5,0.3-0.9c0-0.6-0.4-1-1.1-1h-0.7V32.4z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Enterprise</h3>
              <div className="mt-2 text-3xl font-bold text-gray-800">
                $59.99
                <span className="text-base font-medium text-gray-500">/mo</span>
              </div>

              {/* Feature List */}
              <ul className="mt-4 mb-6 text-left mx-auto space-y-2 w-3/4">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Unlimited file recovery</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Professional reports</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Sell on marketplaces</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Unlimited Builds</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Job displayed for 30 days</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Premium Support 24/7</span>
                </li>
              </ul>

              {/* Purchase Button */}
              <a
                href="#"
                className="mt-auto inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition"
              >
                Purchase Now &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gray-50 py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            See everything about your employee at one place.
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            Start working with Jobvia that can provide everything you need to
            generate awareness, drive traffic, connect.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* Contact Button */}
            <a
              href="#"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition"
            >
              <svg
                id="Layer_1"
                style={{
                  enableBackground: "new 0 0 100.354 100.352",
                }}
                viewBox="0 0 100.354 100.352"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={26}
                height={26}
                className="mr-2 fill-current text-white"
              >
                <path d="M93.09,76.224c0.047-0.145,0.079-0.298,0.079-0.459V22.638c0-0.162-0.032-0.316-0.08-0.462  c-0.007-0.02-0.011-0.04-0.019-0.06c-0.064-0.171-0.158-0.325-0.276-0.46c-0.008-0.009-0.009-0.02-0.017-0.029  c-0.005-0.005-0.011-0.007-0.016-0.012c-0.126-0.134-0.275-0.242-0.442-0.323c-0.013-0.006-0.023-0.014-0.036-0.02  c-0.158-0.071-0.33-0.111-0.511-0.123c-0.018-0.001-0.035-0.005-0.053-0.005c-0.017-0.001-0.032-0.005-0.049-0.005H8.465  c-0.017,0-0.033,0.004-0.05,0.005c-0.016,0.001-0.032,0.004-0.048,0.005c-0.183,0.012-0.358,0.053-0.518,0.125  c-0.01,0.004-0.018,0.011-0.028,0.015c-0.17,0.081-0.321,0.191-0.448,0.327c-0.005,0.005-0.011,0.006-0.016,0.011  c-0.008,0.008-0.009,0.019-0.017,0.028c-0.118,0.135-0.213,0.29-0.277,0.461c-0.008,0.02-0.012,0.04-0.019,0.061  c-0.048,0.146-0.08,0.3-0.08,0.462v53.128c0,0.164,0.033,0.32,0.082,0.468c0.007,0.02,0.011,0.039,0.018,0.059  c0.065,0.172,0.161,0.327,0.28,0.462c0.007,0.008,0.009,0.018,0.016,0.026c0.006,0.007,0.014,0.011,0.021,0.018  c0.049,0.051,0.103,0.096,0.159,0.14c0.025,0.019,0.047,0.042,0.073,0.06c0.066,0.046,0.137,0.083,0.21,0.117  c0.018,0.008,0.034,0.021,0.052,0.028c0.181,0.077,0.38,0.121,0.589,0.121h83.204c0.209,0,0.408-0.043,0.589-0.121  c0.028-0.012,0.054-0.03,0.081-0.044c0.062-0.031,0.124-0.063,0.181-0.102c0.03-0.021,0.057-0.048,0.086-0.071  c0.051-0.041,0.101-0.082,0.145-0.129c0.008-0.008,0.017-0.014,0.025-0.022c0.008-0.009,0.01-0.021,0.018-0.03  c0.117-0.134,0.211-0.288,0.275-0.458C93.078,76.267,93.083,76.246,93.09,76.224z M9.965,26.04l25.247,23.061L9.965,72.346V26.04z   M61.711,47.971c-0.104,0.068-0.214,0.125-0.301,0.221c-0.033,0.036-0.044,0.083-0.073,0.121l-11.27,10.294L12.331,24.138h75.472  L61.711,47.971z M37.436,51.132l11.619,10.613c0.287,0.262,0.649,0.393,1.012,0.393s0.725-0.131,1.011-0.393l11.475-10.481  l25.243,23.002H12.309L37.436,51.132z M64.778,49.232L90.169,26.04v46.33L64.778,49.232z" />
              </svg>
              Contact
            </a>
            {/* FAQ's Button */}
            <a
              href="#"
              className="inline-flex items-center border border-blue-600 text-blue-600 hover:bg-green-50 font-semibold px-6 py-3 rounded-md transition"
            >
              <svg
                style={{
                  enableBackground: "new 0 0 24 24",
                }}
                viewBox="0 0 24 24"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                height={26}
                width={26}
                className="mr-2"
                stroke="#2563eb"
                strokeWidth={1}
              >
                <style type="text/css">
                  {
                    "\n\t.st0{opacity:0.2;fill:none;stroke:#000000;stroke-width:5.000000e-02;stroke-miterlimit:10;}\n"
                  }
                </style>
                <g id="Layer_1" />
                <g id="Layer_2">
                  <g>
                    <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8    S16.4,20,12,20z" />
                    <path d="M12.1,7.3h-0.1c-1,0-1.9,0.5-2.4,1.3C9.2,9.1,9.3,9.7,9.8,10c0.5,0.3,1.1,0.2,1.4-0.3c0.2-0.3,0.5-0.4,0.8-0.4h0.1    c0.5,0,0.9,0.4,0.9,0.9c0,0.4-0.3,0.8-0.6,0.9l-0.7,0.2c-0.4,0.1-0.7,0.5-0.7,0.9V13c0,0.6,0.4,1,1,1c0.5,0,1-0.4,1-0.9    c1.2-0.4,2-1.5,2-2.8C15,8.7,13.7,7.3,12.1,7.3z" />
                    <circle cx={12} cy={16} r={1} />
                  </g>
                </g>
              </svg>
              FAQ's
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-8 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <h2 className="text-3xl font-bold">15,000+</h2>
                <p className="mt-1">Available Jobs</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">7500+</h2>
                <p className="mt-1">Applications</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">8.85K</h2>
                <p className="mt-1">Positive Feedback</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">9875</h2>
                <p className="mt-1">Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
