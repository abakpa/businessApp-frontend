import logo from '../Images/logo.png';
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUserRequest } from "../Redux/slices/userSlice";
import { Link } from 'react-router-dom';
// import { fetchBranchRequest } from "../redux/slices/branchSlice";



function Register() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, loading } = useSelector((state) => state.user);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = {  email, password, firstName, lastName };
    const data = { details, navigate };
    dispatch(createUserRequest(data));

   
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  
  };
    return (
        <div 
          className="min-h-screen bg-cover bg-center bg-fixed flex flex-col"
          style={{ backgroundImage: "url('/Images/register-image.png')" }}
        >
          {/* Dark overlay for better readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          {/* Logo at top-left corner */}
          <div className="relative z-20 pt-6 pl-6 lg:pt-8 lg:pl-12">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-16 h-16 lg:w-20 lg:h-20" />
            </Link>
          </div>
    
          {/* Main content area */}
          <div className="flex flex-col lg:flex-row w-full relative z-10 flex-grow items-center justify-center">
            {/* Welcome Section */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center p-8 pt-4 lg:pt-8 lg:pl-12">
              <div className="text-center lg:text-left text-white max-w-2xl">
                <h2 className="text-3xl lg:text-6xl font-bold mb-4">Ready to Transform Your Business?</h2>
                <p className="text-lg lg:text-xl leading-relaxed">
                Register your account now to access powerful tools that will help you save time and grow faster.
                </p>
              </div>
            </div>
    
            {/* Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 lg:p-12 pb-12 lg:pb-8">
              <div className="w-full max-w-md bg-white bg-opacity-90 lg:backdrop-blur-sm rounded-xl shadow-2xl p-6 sm:p-10">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-800">Create Account</h2>
                {error && <p className="text-red-600 mb-4 text-sm">{error}</p>}
                <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                     First Name
                    </label>
                    <input
                      id="firstName"
                      type="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="your first name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="you last name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="••••••••"
                      required
                    />
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
                    className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition duration-200 font-medium text-base sm:text-lg shadow-md"
                  >
                    Sign Up
                  </button>
          )}
                </form>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Register;
