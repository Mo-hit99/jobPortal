import React, { useState } from "react";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="bg-white shadow rounded-lg">
      <button
        className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
        onClick={toggleAccordion}
      >
        <span className="font-semibold">{question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 ">
          <hr className="py-2"/>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

function FAQPage() {
  const faqItems = [
    {
      question: "General",
      answer:
        "If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.",
    },
    {
      question: "Buying",
      answer: "Information and tips on the buying process are provided here.",
    },
    {
      question: "Payment",
      answer: "Details regarding our payment methods and policies.",
    },
    {
      question: "Support",
      answer:
        "Find answers to common questions and contact details for support.",
    },
    {
      question: "Where does it come from?",
      answer:
        "It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.",
    },
    {
      question: "How Jobvia Work?",
      answer:
        "Discover how Jobvia connects buyers and sellers, streamlining the process and providing an intuitive platform for all users.",
    },
    {
      question: "What is your shipping policy?",
      answer:
        "Our shipping policy outlines the methods, cost details, and timelines for the delivery of products.",
    },
    {
      question: "Where To Place A FAQ Page",
      answer:
        "We recommend placing your FAQ page in an easily accessible area of your website, such as in the header or footer.",
    },
    {
      question: "Why do we use it?",
      answer:
        "Our FAQ page is designed to offer quick answers to common questions, helping to improve user experience and streamline support.",
    },
    {
      question: "Where can I get some?",
      answer:
        "More details on where you can find our products or services are provided here.",
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <header className="py-8 bg-blue-500 shadow">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center">
            FAQ - Jobvia
          </h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default FAQPage;
