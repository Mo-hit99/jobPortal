import React, { useState } from 'react';
import { companyAPI, getErrorMessage, ERROR_MESSAGES } from '../services/api';

export default function CompanyCreationForm({ onCompanyCreated }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  const [companyData, setCompanyData] = useState({
    companyName: '',
    email: '',
    phoneNumber: '',
    address: '',
    website: '',
    description: '',
    location: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompanyData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validation
    if (!companyData.companyName) {
      setError("Company name is required");
      return;
    }

    setLoading(true);
    try {
      const response = await companyAPI.createCompany(companyData);
      if (response.data) {
        setSuccess("Company created successfully!");
        // Reset form
        setCompanyData({
          companyName: '',
          email: '',
          phoneNumber: '',
          address: '',
          website: '',
          description: '',
          location: ''
        });
        
        // Call the callback to refresh companies list
        if (onCompanyCreated) {
          setTimeout(() => {
            onCompanyCreated();
          }, 1000);
        }
      }
    } catch (error) {
      const errorMessage = getErrorMessage(error, ERROR_MESSAGES.CREATE_COMPANY);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Create Company Profile</h2>
      
      {/* Error and Success Messages */}
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      {success && (
        <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Company Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
            Company Name *
          </label>
          <input 
            type="text" 
            id="name" 
            name="companyName" 
            placeholder="Enter company name" 
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
            value={companyData.companyName}
            onChange={handleInputChange}
            disabled={loading}
          /> 
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter company email" 
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
            value={companyData.email}
            onChange={handleInputChange}
            disabled={loading}
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input 
            type="tel" 
            id="phoneNumber" 
            name="phoneNumber" 
            placeholder="Enter phone number" 
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
            value={companyData.phoneNumber}
            onChange={handleInputChange}
            disabled={loading}
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="location">
            Location
          </label>
          <input 
            type="text" 
            id="location" 
            name="location" 
            placeholder="Enter company location" 
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
            value={companyData.location}
            onChange={handleInputChange}
            disabled={loading}
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="address">
            Address
          </label>
          <textarea 
            id="address" 
            name="address" 
            placeholder="Enter company address" 
            rows="3"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
            value={companyData.address}
            onChange={handleInputChange}
            disabled={loading}
          />
        </div>

        {/* Website */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="website">
            Website
          </label>
          <input 
            type="url" 
            id="website" 
            name="website" 
            placeholder="Enter company website" 
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
            value={companyData.website}
            onChange={handleInputChange}
            disabled={loading}
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="description">
            Description
          </label>
          <textarea 
            id="description" 
            name="description" 
            placeholder="Enter company description" 
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
            value={companyData.description}
            onChange={handleInputChange}
            disabled={loading}
          />
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Creating Company..." : "Create Company"}
          </button>
        </div>
      </form>
    </div>
  );
} 