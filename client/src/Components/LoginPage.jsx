import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux'
// import bg_image from "../assets/signUpAndLoginIn_image/recruit-agent-analyzing-candidates_74855-4565.jpg";
import { authAPI, getErrorMessage, ERROR_MESSAGES } from "../services/api";
import { setUser } from "../redux/authSlice";

export default function LoginPage() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  function inputHandler(e) {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
    if (error) setError("");
  }

  const validateForm = () => {
    if (!loginData.email || !loginData.password || !loginData.role) {
      setError("All fields are required");
      return false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(loginData.email)) {
      setError("Please enter a valid email address");
      return false;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(loginData.password)) {
      setError("Password must be 8 characters long and contain at least one uppercase, lowercase, number and special character");
      return false;
    }

    return true;
  };

  async function submitHandler(e) {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await authAPI.login(loginData);
      if (response.data) {
        dispatch(setUser(response.data.existUser));
        setLoginData({
          email: "",
          password: "",
          role: "",
        });
        navigate('/');
      }
    } catch (error) {
      const errorMessage = getErrorMessage(error, ERROR_MESSAGES.LOGIN);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Left: Login Form */}
      <div className="flex flex-col justify-center md:w-1/2 w-full px-8 py-12 md:py-0 md:px-24 bg-white z-10">
        {/* Logo */}
        <div className="flex items-center mb-8">
          <span className="w-3 h-3 rounded-full bg-purple-600 mr-2"></span>
          <span className="font-bold text-lg text-gray-700">Finnger</span>
        </div>
        <h1 className="text-4xl font-bold mb-2 text-gray-900">Holla,<br/>Welcome Back</h1>
        <p className="text-gray-500 mb-8">Hey, welcome back to your special place</p>
        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        <form className="space-y-4" onSubmit={submitHandler}>
          <div>
            <input
              type="email"
              id="email"
              placeholder="stanley@gmail.com"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-50"
              name="email"
              onChange={inputHandler}
              value={loginData.email}
              disabled={loading}
              autoComplete="username"
            />
          </div>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-50"
              onChange={inputHandler}
              value={loginData.password}
              disabled={loading}
              autoComplete="current-password"
            />
          </div>
          {/* Role selection */}
          <div className="flex space-x-6 items-center mb-2">
            <label className="flex items-center text-sm text-gray-700 font-medium">
              <input
                type="radio"
                name="role"
                value="Student"
                checked={loginData.role === "Student"}
                onChange={inputHandler}
                disabled={loading}
                className="accent-purple-600 mr-2"
              />
              Student
            </label>
            <label className="flex items-center text-sm text-gray-700 font-medium">
              <input
                type="radio"
                name="role"
                value="Recruiter"
                checked={loginData.role === "Recruiter"}
                onChange={inputHandler}
                disabled={loading}
                className="accent-purple-600 mr-2"
              />
              Recruiter
            </label>
          </div>
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="accent-purple-600 mr-2"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                disabled={loading}
              />
              Show password
            </label>
            <NavLink
              to={"/forgotpassword"}
              className="text-gray-500 hover:text-purple-600 hover:underline"
            >
              Forgot Password?
            </NavLink>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="rememberMe"
              className="accent-purple-600 mr-2"
              // You can add logic for remember me if needed
            />
            <label htmlFor="rememberMe" className="text-gray-600 text-sm">Remember me</label>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-8">
          Don't have an account?{' '}
          <NavLink to={"/register"} className="text-purple-600 hover:underline font-medium">
            Sign Up
          </NavLink>
        </p>
      </div>
      {/* Right: Illustration */}
      <div className="hidden md:flex flex-1 items-center justify-center bg-gradient-to-tr from-purple-100 via-purple-200 to-purple-300 relative">
        {/* Placeholder SVG illustration, replace with your own if needed */}
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="400" rx="40" fill="url(#paint0_linear)"/>
          <g>
            <ellipse cx="300" cy="100" rx="60" ry="30" fill="#fff" fillOpacity="0.7"/>
            <ellipse cx="100" cy="320" rx="50" ry="20" fill="#fff" fillOpacity="0.7"/>
            <ellipse cx="350" cy="300" rx="30" ry="15" fill="#fff" fillOpacity="0.7"/>
            <ellipse cx="60" cy="80" rx="30" ry="15" fill="#fff" fillOpacity="0.7"/>
          </g>
          <rect x="120" y="80" width="160" height="240" rx="32" fill="#8B5CF6" stroke="#fff" strokeWidth="8"/>
          <rect x="150" y="120" width="100" height="40" rx="12" fill="#fff" fillOpacity="0.8"/>
          <circle cx="200" cy="220" r="32" fill="#fff" fillOpacity="0.8"/>
          <rect x="170" y="270" width="60" height="16" rx="8" fill="#fff" fillOpacity="0.8"/>
          <rect x="320" y="180" width="40" height="40" rx="8" fill="#fff" fillOpacity="0.8"/>
          <path d="M340 200v-10a10 10 0 0 1 20 0v10" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round"/>
          <defs>
            <linearGradient id="paint0_linear" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="#a78bfa"/>
              <stop offset="1" stopColor="#f472b6"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
