import React from "react";

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Help Center</h1>
          <p className="text-gray-500">How can we assist you? Search our FAQs or contact support.</p>
        </header>
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search for help..."
            className="w-full md:w-2/3 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="font-bold text-gray-700">How do I reset my password?</h3>
              <p className="text-gray-600">Go to the login page, click on 'Forgot Password', and follow the instructions sent to your email.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="font-bold text-gray-700">How can I apply for a job?</h3>
              <p className="text-gray-600">Browse available jobs, click on the job you are interested in, and use the 'Apply' button to submit your application.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="font-bold text-gray-700">How do I contact support?</h3>
              <p className="text-gray-600">You can contact our support team using the button below or by emailing support@jobvia.com.</p>
            </div>
          </div>
        </section>
        <div className="text-center">
          <button className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition">Contact Support</button>
        </div>
      </div>
    </div>
  );
} 