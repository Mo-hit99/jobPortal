import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutusImage from "../assets/AboutUs/job-1845954_1280.png";
import profileImage from "../assets/profileImage/profile-image.png";

const team = [
  {
    name: "Alice Johnson",
    role: "CEO & Founder",
    image: profileImage,
    bio: "Visionary leader with 10+ years in tech startups."
  },
  {
    name: "Bob Smith",
    role: "Lead Developer",
    image: profileImage,
    bio: "Full-stack developer passionate about scalable web apps."
  },
  {
    name: "Carol Lee",
    role: "Product Manager",
    image: profileImage,
    bio: "Expert in agile product development and UX design."
  },
  {
    name: "David Kim",
    role: "Marketing Head",
    image: profileImage,
    bio: "Growth hacker and digital marketing strategist."
  }
];

export default function AboutUsPage() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-100 via-white to-blue-200 py-20 px-4 flex flex-col items-center justify-center text-center overflow-hidden" data-aos="fade-down">
        <div className="absolute inset-0 bg-blue-600 opacity-10 blur-2xl" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight tracking-tight">
            Empowering Careers, Connecting Talent
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 font-medium">
            We help people and companies find the perfect match, making job search and hiring seamless and inspiring.
          </p>
          <img src={aboutusImage} alt="About Us" className="mx-auto w-64 md:w-80 rounded-2xl shadow-xl border-4 border-blue-100" data-aos="zoom-in" />
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4 bg-white" data-aos="fade-up">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-8 shadow flex flex-col items-center" data-aos="fade-right">
            <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 0V7a4 4 0 10-8 0v5a4 4 0 004 4h1a4 4 0 004-4z" /></svg>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600 text-center">To bridge the gap between talent and opportunity, empowering individuals and organizations to reach their full potential.</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-8 shadow flex flex-col items-center" data-aos="fade-left">
            <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 7v7m0 0h4m-4 0H8" /></svg>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Vision</h3>
            <p className="text-gray-600 text-center">To be the most trusted platform for career growth and talent acquisition, fostering innovation and success worldwide.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-50" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <header className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Meet Our Team</h2>
            <p className="text-gray-500">Passionate professionals dedicated to your success.</p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition duration-300" data-aos="zoom-in-up">
                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-100 shadow" />
                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                <p className="text-blue-600 text-sm mb-2">{member.role}</p>
                <p className="text-gray-500 text-center text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-white" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Why Choose Us</h2>
          <p className="text-gray-600">Discover what makes us the preferred choice for job seekers and employers.</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 flex flex-col items-center shadow hover:shadow-md transition" data-aos="fade-up" data-aos-delay="100">
            <svg className="w-10 h-10 text-blue-500 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h3m4 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className="text-gray-800 font-medium">Personalized Matches</span>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 flex flex-col items-center shadow hover:shadow-md transition" data-aos="fade-up" data-aos-delay="200">
            <svg className="w-10 h-10 text-blue-500 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 0V7a4 4 0 10-8 0v5a4 4 0 004 4h1a4 4 0 004-4z" /></svg>
            <span className="text-gray-800 font-medium">Verified Companies</span>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 flex flex-col items-center shadow hover:shadow-md transition" data-aos="fade-up" data-aos-delay="300">
            <svg className="w-10 h-10 text-blue-500 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 7v7m0 0h4m-4 0H8" /></svg>
            <span className="text-gray-800 font-medium">Career Growth</span>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 flex flex-col items-center shadow hover:shadow-md transition" data-aos="fade-up" data-aos-delay="400">
            <svg className="w-10 h-10 text-blue-500 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            <span className="text-gray-800 font-medium">Trusted Support</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 text-white text-center relative" data-aos="fade-up">
        <div className="absolute inset-0 bg-blue-900 opacity-20 blur-2xl" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to take the next step?</h2>
          <p className="mb-8 text-lg">Join thousands of professionals and companies who trust us to power their careers and hiring.</p>
          <a href="#" className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-50 transition text-lg">Get Started Now</a>
        </div>
      </section>
    </>
  );
}
