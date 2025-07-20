import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import bg_image from "../assets/signUpAndLoginIn_image/man-search-hiring-job-online-from-laptop_1150-52728.jpg";
import { authAPI } from "../services/api";

export default function SignUp() {
  const navigate = useNavigate();
  const [SignUpData, setSignUpData] = useState({
    FullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [profilePreview, setProfilePreview] = useState(null);

  function inputHandler(e) {
    const { name, value } = e.target;
    setSignUpData({
      ...SignUpData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (error) setError("");
  }

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    if (!SignUpData.FullName || !SignUpData.email || !SignUpData.phoneNumber || !SignUpData.password || !SignUpData.role) {
      setError("All fields are required");
      return false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(SignUpData.email)) {
      setError("Please enter a valid email address");
      return false;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(SignUpData.password)) {
      setError("Password must be 8 characters long and contain at least one uppercase, lowercase, number and special character");
      return false;
    }

    return true;
  };

  async function submitHandler(e) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await authAPI.register(SignUpData);
      if (response.data) {
        setSuccess("Registration successful! Please check your email for OTP verification.");
        setShowOTPModal(true);
      }
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const handleOTPVerification = async () => {
    if (!otp) {
      setError("Please enter OTP");
      return;
    }

    setLoading(true);
    try {
      const response = await authAPI.verifyOTP(otp);
      if (response.data) {
        setSuccess("Email verified successfully! You can now login.");
        setShowOTPModal(false);
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
    } catch (error) {
      setError(error.response?.data?.message || "OTP verification failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div
          className="bg-gradient-to-tr 
                      from-[rgba(0,123,255,0.4)] 
                     via-[rgba(128,0,128,0.4)] 
                    to-[rgba(255,64,129,0.4)] 
                      bg-[length:200%] 
                      animate-gradient w-full h-full absolute top-0 z-[20] backdrop-blur"
        ></div>
        {/* Background Image */}
        <img
          src={bg_image}
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          alt="Background"
        />

        {/* Form Content */}
        <div className="bg-white p-6 sm:p-8 rounded-lg w-full max-w-md shadow-xl z-30 relative">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
            Create Account
          </h1>
          
          {/* Error and Success Messages */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md text-sm">
              {success}
            </div>
          )}

          <form onSubmit={submitHandler} className="space-y-4">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                name="FullName"
                id="fullName"
                value={SignUpData.FullName}
                onChange={inputHandler}
                placeholder="Full Name"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                disabled={loading}
                required
              />
            </div>
            
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={SignUpData.email}
                onChange={inputHandler}
                placeholder="you@example.com"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                disabled={loading}
                required
              />
            </div>
            
            {/* Phone Number */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                value={SignUpData.phoneNumber}
                onChange={inputHandler}
                placeholder="+914584305894"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                disabled={loading}
                required
              />
            </div>
            
            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={SignUpData.password}
                onChange={inputHandler}
                placeholder="Enter Your Password"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                disabled={loading}
                required
              />
            </div>
            
            {/* Show Password */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="showpassword"
                className="h-4 w-4 focus:ring-blue-500 border-gray-300 rounded"
                onChange={() => setShowPassword(!showPassword)}
                disabled={loading}
              />
              <label
                htmlFor="showpassword"
                className="ml-2 block text-sm text-gray-700"
              >
                Show password
              </label>
            </div>
            
            {/* User Type */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-3">
                I am a:
              </label>
              <div className="flex space-x-6">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="Student"
                    onChange={inputHandler}
                    className="h-4 w-4 focus:ring-blue-500 border-gray-300"
                    checked={SignUpData.role === "Student"}
                    disabled={loading}
                    required
                  />
                  <span className="ml-2 text-gray-700 text-sm">Student</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="Recruiter"
                    onChange={inputHandler}
                    className="h-4 w-4 focus:ring-blue-500 border-gray-300"
                    checked={SignUpData.role === "Recruiter"}
                    disabled={loading}
                    required
                  />
                  <span className="ml-2 text-gray-700 text-sm">Recruiter</span>
                </label>
              </div>
            </div>
            
            {/* Profile Picture */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Profile Picture (Optional)
              </label>
              <input
                type="file"
                accept="image/*"
                id="profilePicture"
                onChange={handleProfilePictureChange}
                className="w-full file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all duration-300"
                disabled={loading}
              />
              {profilePreview && (
                <div className="mt-3 flex justify-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-200 shadow-lg">
                    <img
                      src={profilePreview}
                      alt="Profile Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
            
            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white py-3 rounded-md transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <NavLink to="/login" className="text-blue-600 hover:underline font-medium">
                Log In
              </NavLink>
            </p>
            <NavLink
              to="/forgotpassword"
              className="text-sm text-blue-500 hover:underline mt-2 inline-block"
            >
              Forgot Password?
            </NavLink>
          </div>
        </div>
      </div>

      {/* OTP Verification Modal */}
      {showOTPModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-center">Verify Your Email</h2>
            <p className="text-gray-600 mb-4 text-center text-sm">
              Please enter the OTP sent to your email address.
            </p>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4 text-center text-lg font-mono"
              maxLength="4"
              pattern="[0-9]{4}"
            />
            <div className="flex space-x-3">
              <button
                onClick={handleOTPVerification}
                className="flex-1 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 disabled:opacity-50 font-medium"
                disabled={loading}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
              <button
                onClick={() => setShowOTPModal(false)}
                className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 font-medium"
                disabled={loading}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
