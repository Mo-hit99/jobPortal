import React from 'react'
import refundPolicyImage_1 from '../assets/refundPolicy/6859535.jpg'
import refundPolicyImage_2 from '../assets/refundPolicy/20945410.jpg'
import { NavLink } from 'react-router'
export default function RefundPolicy() {
  return (
    <div className="w-full flex flex-col">
    {/* Hero Section */}
    <section className="py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side: Headline */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-4">
            Refund Policy
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Your satisfaction is our priority. Learn how our refund policy
            protects your subscription investment.
          </p>
        </div>

        {/* Right Side: Illustration (Optional) */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          {/* Replace with your own image or remove */}
          <img
            src={refundPolicyImage_1}
            alt="Refund Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>

    {/* Policy Content Section */}
    <section className="bg-white py-12 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Introduction */}
        <div>
          <h2 className="text-2xl font-bold text-blue-500 mb-3">
            Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our services are offered on a subscription basis—monthly or
            annually. We strive to ensure you get the best value, but we
            understand that circumstances can change. This policy details our
            refund process, eligibility, and how to request one.
          </p>
        </div>

        {/* Section: Subscription-Based Purchases */}
        <div className="md:grid md:grid-cols-2 md:gap-8 items-start">
          <div>
            <h3 className="text-xl font-semibold text-blue-500 mb-2">
              1. Subscription-Based Purchases
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              By choosing a subscription, you agree to be charged at regular
              intervals (monthly or yearly). Renewal fees will be automatically
              processed unless you cancel before the renewal date.
            </p>
          </div>
          {/* Optional icon or illustration */}
          <div className="flex justify-center mt-4 md:mt-0">
            <img
              src={refundPolicyImage_2}
              alt="Subscription"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Section: Eligibility for Refunds */}
        <div>
          <h3 className="text-xl font-semibold text-blue-500 mb-2">
            2. Eligibility for Refunds
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>14-Day Money-Back Guarantee:</strong> If you’re
              dissatisfied with our service within the first 14 days, you can
              request a full refund.
            </li>
            <li>
              <strong>Renewals:</strong> Charges for subscription renewals are
              non-refundable once processed. To avoid being charged, cancel
              before your renewal date.
            </li>
            <li>
              <strong>Promotional Offers:</strong> Subscriptions purchased
              under promotional discounts may have different eligibility
              criteria. Check the specific terms of the offer.
            </li>
          </ul>
        </div>

        {/* Section: How to Request a Refund */}
        <div>
          <h3 className="text-xl font-semibold text-blue-500 mb-2">
            3. How to Request a Refund
          </h3>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>
              <strong>Contact Support:</strong> Email us at{" "}
              <a
                href="mailto:support@yourdomain.com"
                className="text-blue-500 underline"
              >
                support@yourdomain.com
              </a>{" "}
              with your account details and reason for requesting a refund.
            </li>
            <li>
              <strong>Review Process:</strong> Our team will verify your
              eligibility and, if approved, process your refund within 5–7
              business days.
            </li>
            <li>
              <strong>Confirmation:</strong> You will receive an email once
              the refund is processed. If you don’t see it, check your spam
              folder or contact support again.
            </li>
          </ol>
        </div>

        {/* Section: Contact & Final Notes */}
        <div>
          <h3 className="text-xl font-semibold text-blue-500 mb-2">
            4. Contact & Final Notes
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to modify this refund policy at any time. We
            recommend reviewing this page periodically. If you have any
            questions or need clarification, please reach out to our support
            team.
          </p>
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section className="py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h4 className="text-2xl font-semibold text-blue-600">
            Need more help?
          </h4>
          <p className="text-gray-700 mt-1">
            Our support team is here to answer all your questions.
          </p>
        </div>
        <NavLink
        to={'/contactUs'}
          className="px-6 py-3 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition-colors"
        >
          Contact Support
        </NavLink>
      </div>
    </section>
  </div>
  )
}
