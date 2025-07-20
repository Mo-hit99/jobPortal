import React, { useRef } from "react";
import { useState } from "react";
// Icon imports (use local PNGs for demo, replace with SVGs for production)
import dataIcon from "../assets/jobCategoriesImages/icons8-accounting-50.png";
import cookiesIcon from "../assets/jobCategoriesImages/icons8-web-design-48.png";
import rightsIcon from "../assets/jobCategoriesImages/icons8-human-resource-48.png";
import contactIcon from "../assets/notificationImage/envelope-8006082_1280.png";

const sections = [
  {
    id: "data-collection",
    title: "Data Collection",
    icon: dataIcon,
    content: (
      <>
        <p className="mb-2">We collect information you provide directly, such as when you create an account, apply for jobs, or contact support. This may include your name, email, resume, and other details relevant to job applications.</p>
        <p className="mb-2">We also collect technical data (IP, browser, device) and usage data (pages visited, actions taken) to improve our services.</p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies & Tracking",
    icon: cookiesIcon,
    content: (
      <>
        <p className="mb-2">We use cookies and similar technologies to enhance your experience, remember preferences, and analyze site traffic. You can control cookies via your browser settings, but disabling them may affect site functionality.</p>
      </>
    ),
  },
  {
    id: "user-rights",
    title: "User Rights",
    icon: rightsIcon,
    content: (
      <>
        <p className="mb-2">You have the right to access, update, or delete your personal data. You may also object to certain processing or request data portability. To exercise your rights, contact us at the email below.</p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact & Feedback",
    icon: contactIcon,
    content: (
      <>
        <p className="mb-2">Questions or feedback? Reach out to us at <a href="mailto:jobviatechnologypvt.ltd.com" className="text-blue-600 underline">jobviatechnologypvt.ltd.com</a> or use the feedback form below.</p>
      </>
    ),
  },
];

function AccordionCard({ id, title, icon, content, isOpen, onClick }) {
  return (
    <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg mb-6 border border-gray-200 transition-all">
      <button
        className="w-full flex items-center justify-between p-5 focus:outline-none group"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={id}
        id={`accordion-header-${id}`}
      >
        <div className="flex items-center gap-4">
          <img src={icon} alt="" className="w-8 h-8" />
          <span className="text-lg font-semibold text-gray-800">{title}</span>
        </div>
        <svg
          className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        id={id}
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 py-4 px-6" : "max-h-0 px-6"}`}
        aria-labelledby={`accordion-header-${id}`}
      >
        {isOpen && <div className="text-gray-700 text-base">{content}</div>}
      </div>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRefs = useRef(sections.map(() => React.createRef()));

  // Scroll to section
  const handleTOCClick = (idx) => {
    setOpenIndex(idx);
    sectionRefs.current[idx].current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 font-sans">
      {/* Hero Banner */}
      <header className="relative bg-blue-600 py-14 shadow-lg mb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2 drop-shadow-lg">Privacy Policy</h1>
          <p className="text-lg md:text-xl text-blue-100 font-medium mb-2">Your privacy is our priority at Jobvia</p>
          <p className="text-base text-blue-200 max-w-2xl mx-auto">Learn how we collect, use, and protect your information while providing a safe job search experience.</p>
        </div>
      </header>

      {/* Sticky Table of Contents */}
      <nav className="sticky top-4 z-20 max-w-3xl mx-auto px-4 mb-8">
        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow flex flex-wrap justify-center gap-4 py-3 px-4 border border-gray-200">
          {sections.map((section, idx) => (
            <button
              key={section.id}
              className={`flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-medium transition-all hover:bg-blue-100 hover:text-blue-700 focus:outline-none ${openIndex === idx ? "bg-blue-600 text-white" : "text-gray-700"}`}
              onClick={() => handleTOCClick(idx)}
            >
              <img src={section.icon} alt="" className="w-5 h-5" />
              {section.title}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 pb-16">
        {sections.map((section, idx) => (
          <div ref={sectionRefs.current[idx]} key={section.id} id={section.id}>
            <AccordionCard
              id={section.id}
              title={section.title}
              icon={section.icon}
              content={section.content}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          </div>
        ))}
        {/* Divider */}
        <div className="my-10 border-t border-gray-200" />
        {/* Call-to-Action / Feedback Block */}
        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-8 flex flex-col items-center gap-4 border border-gray-200">
          <img src={contactIcon} alt="Contact" className="w-12 h-12 mb-2" />
          <h3 className="text-xl font-bold text-gray-800 mb-1">We value your feedback!</h3>
          <p className="text-gray-600 text-center mb-2">Let us know if you have questions, suggestions, or concerns about our privacy practices.</p>
          <form className="w-full max-w-md flex flex-col gap-3">
            <input type="email" placeholder="Your email" className="rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-200 outline-none" />
            <textarea placeholder="Your message" rows={3} className="rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-200 outline-none resize-none" />
            <button type="submit" className="bg-blue-600 text-white font-semibold rounded-lg px-6 py-2 shadow hover:bg-blue-700 transition-all">Send Feedback</button>
          </form>
        </div>
      </main>
    </div>
  );
}
