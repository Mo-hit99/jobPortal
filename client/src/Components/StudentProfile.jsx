import React, { useRef, useState, useEffect } from 'react';
import { AcademicCapIcon, BriefcaseIcon, CheckBadgeIcon, DocumentArrowDownIcon, ArrowUpTrayIcon, SparklesIcon, EnvelopeIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function StudentProfile() {
  // Dummy data for demonstration
  const stats = [
    { label: 'Applied', value: 24, icon: <BriefcaseIcon className="w-6 h-6 text-blue-500" /> },
    { label: 'Interviews', value: 5, icon: <SparklesIcon className="w-6 h-6 text-green-500" /> },
    { label: 'Offers', value: 2, icon: <CheckBadgeIcon className="w-6 h-6 text-yellow-500" /> },
  ];
  const skills = [
    { name: 'JavaScript', icon: <i className="devicon-javascript-plain colored" />, desc: 'ES6+, DOM, async, OOP' },
    { name: 'Python', icon: <i className="devicon-python-plain colored" />, desc: 'Scripting, Flask, Data Science' },
    { name: 'React', icon: <i className="devicon-react-original colored" />, desc: 'Hooks, SPA, Context API' },
    { name: 'Tailwind CSS', icon: <i className="devicon-tailwindcss-plain colored" />, desc: 'Utility-first, Responsive' },
    { name: 'Node.js', icon: <i className="devicon-nodejs-plain colored" />, desc: 'APIs, Express, REST' },
  ];
  const education = [
    {
      title: 'B.Sc. Computer Science',
      institution: 'University of Example',
      period: '2020 - 2024',
      icon: <AcademicCapIcon className="w-6 h-6 text-blue-400" />,
      badge: 'Current',
    },
    {
      title: 'High School Diploma',
      institution: 'High School Name',
      period: '2016 - 2020',
      icon: <AcademicCapIcon className="w-6 h-6 text-gray-400" />,
      badge: null,
    },
  ];
  const certifications = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon',
      year: '2023',
      icon: <CheckBadgeIcon className="w-5 h-5 text-indigo-500" />,
    },
    {
      name: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      year: '2022',
      icon: <CheckBadgeIcon className="w-5 h-5 text-green-500" />,
    },
  ];
  const projects = [
    {
      name: 'Job Portal App',
      desc: 'A full-stack job portal for students and recruiters.',
      tags: ['React', 'Node.js', 'MongoDB'],
      url: 'https://github.com/example/job-portal',
    },
    {
      name: 'Portfolio Website',
      desc: 'Personal portfolio with interactive animations and blog.',
      tags: ['React', 'Tailwind CSS'],
      url: 'https://github.com/example/portfolio',
    },
  ];

  // Animated counters for stats
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));
  useEffect(() => {
    const intervals = stats.map((stat, i) => {
      let current = 0;
      const increment = Math.ceil(stat.value / 30);
      return setInterval(() => {
        current += increment;
        setAnimatedStats(prev => {
          const updated = [...prev];
          updated[i] = current > stat.value ? stat.value : current;
          return updated;
        });
        if (current >= stat.value) clearInterval(intervals[i]);
      }, 20);
    });
    return () => intervals.forEach(clearInterval);
    // eslint-disable-next-line
  }, []);

  // Resume upload state
  const [resumeName, setResumeName] = useState('');
  const fileInputRef = useRef();
  const handleResumeUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setResumeName(e.target.files[0].name);
      toast.success('Resume uploaded: ' + e.target.files[0].name);
    }
  };

  // Modal for Hire Me
  const [showModal, setShowModal] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formLoading, setFormLoading] = useState(false);
  const handleContactChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };
  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      setShowModal(false);
      setContactForm({ name: '', email: '', message: '' });
      toast.success('Message sent! I will get back to you soon.');
    }, 1200);
  };

  // Tooltip state
  const [tooltip, setTooltip] = useState({ show: false, text: '', x: 0, y: 0 });
  const handleSkillMouseOver = (desc, e) => {
    setTooltip({ show: true, text: desc, x: e.clientX, y: e.clientY });
  };
  const handleSkillMouseOut = () => {
    setTooltip({ show: false, text: '', x: 0, y: 0 });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100/60 via-white to-blue-50/80 py-10 px-2 sm:px-6 font-sans">
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar theme="colored" />
      {/* Tooltip */}
      <AnimatePresence>
        {tooltip.show && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed z-50 px-3 py-2 bg-gray-900 text-white text-xs rounded shadow-lg pointer-events-none"
            style={{ left: tooltip.x + 12, top: tooltip.y + 12 }}
          >
            {tooltip.text}
          </motion.div>
        )}
      </AnimatePresence>
      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative"
            >
              <button onClick={() => setShowModal(false)} className="absolute top-3 right-3 text-gray-400 hover:text-red-500">
                <XMarkIcon className="w-6 h-6" />
              </button>
              <h2 className="text-2xl font-bold mb-4 text-blue-700">Contact Me</h2>
              <form onSubmit={handleContactSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  placeholder="Your Name"
                  className="border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  placeholder="Your Email"
                  className="border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  placeholder="Your Message"
                  className="border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  rows={4}
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold py-2 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all text-lg disabled:opacity-60"
                  disabled={formLoading}
                >
                  {formLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Profile Card */}
        <div className="md:col-span-1 flex flex-col items-center">
          <div className="relative w-full">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-400 via-indigo-400 to-pink-400 blur-lg opacity-30 animate-pulse z-0" style={{filter:'blur(32px)'}}></div>
            <div className="relative z-10 bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 flex flex-col items-center border border-blue-100">
              <div className="relative mb-4">
                <img src="https://via.placeholder.com/150" alt="Profile" className="w-36 h-36 rounded-full border-4 border-blue-300 shadow-xl object-cover transition-transform duration-300 hover:scale-105" />
                <span className="absolute bottom-2 right-2 bg-green-400 border-2 border-white w-6 h-6 rounded-full shadow"></span>
              </div>
              <h1 className="mt-2 text-3xl font-extrabold text-gray-800 tracking-tight">John Doe</h1>
              <p className="text-blue-500 font-semibold text-lg">Computer Science Student</p>
              <p className="mt-2 text-gray-500 text-center text-base">Aspiring software developer passionate about building impactful web applications and learning new technologies.</p>
              <a href="mailto:john.doe@example.com" className="mt-3 flex items-center gap-2 text-blue-600 hover:underline"><EnvelopeIcon className="w-5 h-5" />john.doe@example.com</a>
              <button onClick={() => setShowModal(true)} className="mt-6 w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold py-3 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all text-lg tracking-wide ring-2 ring-blue-200 ring-offset-2">Hire Me</button>
              <a href="resume.pdf" target="_blank" rel="noopener" onClick={() => toast.info('Downloading resume...')} className="mt-3 w-full flex items-center justify-center gap-2 bg-white/80 border border-blue-500 text-blue-600 font-semibold py-2.5 rounded-2xl shadow hover:bg-blue-50 transition-all hover:scale-105 text-base"><DocumentArrowDownIcon className="w-5 h-5" />Download Resume</a>
              <label className="mt-3 w-full flex items-center justify-center gap-2 cursor-pointer bg-blue-50/80 border border-dashed border-blue-300 text-blue-500 font-medium py-2.5 rounded-2xl hover:bg-blue-100 transition-all">
                <ArrowUpTrayIcon className="w-5 h-5" />
                <span>{resumeName ? resumeName : 'Upload Resume'}</span>
                <input type="file" className="hidden" ref={fileInputRef} onChange={handleResumeUpload} />
              </label>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2 flex flex-col gap-10">
          {/* Stats */}
          <div className="flex flex-wrap gap-6 justify-between">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex-1 min-w-[140px] bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 flex items-center gap-4 hover:shadow-2xl transition-all border border-blue-100">
                <div className="bg-blue-100 rounded-full p-3 shadow">{stat.icon}</div>
                <div>
                  <div className="text-3xl font-extrabold text-gray-800 tracking-tight">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 * i }}
                    >
                      {animatedStats[i]}
                    </motion.span>
                  </div>
                  <div className="text-gray-500 text-base font-medium">{stat.label}</div>
                </div>
                {stat.label === 'Offers' && <span className="ml-auto bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-1 rounded-full animate-bounce">New</span>}
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-8 border border-blue-100">
            <h2 className="text-2xl font-bold mb-5 flex items-center gap-2 text-blue-700"><SparklesIcon className="w-7 h-7 text-blue-400" />Skills</h2>
            <div className="flex flex-wrap gap-4">
              {skills.map(skill => (
                <span
                  key={skill.name}
                  className="flex items-center gap-2 bg-blue-50/80 text-blue-700 px-4 py-2 rounded-full shadow-sm hover:bg-blue-100 hover:scale-105 transition-all cursor-pointer border border-blue-100 text-base font-medium relative"
                  onMouseOver={e => handleSkillMouseOver(skill.desc, e)}
                  onMouseMove={e => handleSkillMouseOver(skill.desc, e)}
                  onMouseOut={handleSkillMouseOut}
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-8 border border-blue-100">
            <h2 className="text-2xl font-bold mb-5 flex items-center gap-2 text-blue-700"><AcademicCapIcon className="w-7 h-7 text-blue-400" />Education</h2>
            <ol className="relative border-l-4 border-blue-200 ml-3">
              {education.map((edu) => (
                <li key={edu.title} className="mb-10 ml-6 relative">
                  <span className="absolute -left-8 flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full shadow border-2 border-blue-200 animate-pulse">{edu.icon}</span>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-gray-800">{edu.title}</h3>
                    {edu.badge && <span className="bg-blue-100 text-blue-600 text-xs font-bold px-2 py-1 rounded-full">{edu.badge}</span>}
                  </div>
                  <div className="text-gray-500">{edu.institution}</div>
                  <div className="text-gray-400 text-sm">{edu.period}</div>
                </li>
              ))}
            </ol>
          </div>

          {/* Certifications Timeline */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-8 border border-blue-100">
            <h2 className="text-2xl font-bold mb-5 flex items-center gap-2 text-indigo-700"><CheckBadgeIcon className="w-7 h-7 text-indigo-400" />Certifications</h2>
            <ol className="relative border-l-4 border-indigo-200 ml-3">
              {certifications.map(cert => (
                <li key={cert.name} className="mb-8 ml-6 relative">
                  <span className="absolute -left-8 flex items-center justify-center w-10 h-10 bg-indigo-50 rounded-full shadow border-2 border-indigo-200 animate-pulse">{cert.icon}</span>
                  <div className="flex items-center gap-2">
                    <h3 className="text-md font-bold text-gray-800">{cert.name}</h3>
                    <span className="bg-indigo-100 text-indigo-600 text-xs font-bold px-2 py-1 rounded-full">{cert.year}</span>
                  </div>
                  <div className="text-gray-500 text-sm">{cert.issuer}</div>
                </li>
              ))}
            </ol>
          </div>

          {/* Projects */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-8 border border-blue-100">
            <h2 className="text-2xl font-bold mb-5 flex items-center gap-2 text-green-700"><BriefcaseIcon className="w-7 h-7 text-green-400" />Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {projects.map(project => (
                project.url ? (
                  <a
                    key={project.name}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-50/80 rounded-2xl p-6 shadow hover:shadow-2xl hover:scale-[1.03] transition-all border border-blue-100 flex flex-col gap-2 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-blue-400/10 opacity-0 group-hover:opacity-100 transition-all" />
                    <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-700 transition-all">{project.name}</h3>
                    <p className="text-gray-500 mb-2">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="bg-white border border-blue-200 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full shadow-sm">{tag}</span>
                      ))}
                    </div>
                    <span className="absolute top-3 right-4 text-xs text-blue-400 group-hover:text-blue-700 transition-all">View Project →</span>
                  </a>
                ) : (
                  <div key={project.name} className="bg-blue-50/80 rounded-2xl p-6 shadow hover:shadow-2xl hover:scale-[1.03] transition-all border border-blue-100 flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{project.name}</h3>
                    <p className="text-gray-500 mb-2">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="bg-white border border-blue-200 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full shadow-sm">{tag}</span>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
