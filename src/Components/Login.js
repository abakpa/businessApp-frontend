import logo from '../Images/logo.png';
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createLoginRequest } from "../Redux/slices/loginSlice";
import { Link } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = { email, password };
    const data = { details, navigate };
    dispatch(createLoginRequest(data));
    setEmail("");
    setPassword("");
  };

  return (
    <div className="relative min-h-screen">
      {/* Background image with fixed positioning */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: "url('/Images/login-image.png')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="relative z-20 pt-6 pl-6 lg:pt-8 lg:pl-12">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-16 h-16 lg:w-20 lg:h-20" />
          </Link>
        </nav>

        {/* Main content */}
        <div className="flex-grow flex flex-col lg:flex-row items-center justify-center px-4 py-8 lg:py-12">
          {/* Welcome Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center p-4 lg:p-12 mb-8 lg:mb-0">
            <div className="text-center lg:text-left text-white max-w-xl">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">Welcome Back!</h2>
              <p className="text-lg lg:text-xl leading-relaxed">
                Login to access your business dashboard and manage operations efficiently.
              </p>
            </div>
          </div>

          {/* Login Form */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-8">
            <div className="w-full max-w-md bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-2xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
              
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="••••••••"
                    required
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                
                {loading ? (
                  <button
                    type="button"
                    className="w-full p-3 bg-blue-500 text-white rounded-lg flex items-center justify-center"
                    disabled
                  >
                    <svg
                      className="animate-spin h-5 w-5 mr-2 text-white"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        className="opacity-25"
                      />
                      <path
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        className="opacity-75"
                      />
                    </svg>
                    Processing...
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200 font-medium text-base shadow-md"
                  >
                    Sign In
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;