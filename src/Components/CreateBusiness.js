import logo from '../Images/logo.png';
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { OfficeBuildingIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/outline';
import { createBusinessRequest } from '../Redux/slices/businessSlice';
import Select from './Select';

function CreateBusiness() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {ownerId} = useParams()
  const { loading } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    name: '',
    industry: '',
    businessAddress: '',
    phone: '',
    email: '',
    website: '',
    businessDescription: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const industries = [
    'Retail',
    'Technology',
    'Healthcare',
    'Finance',
    'Education',
    'Hospitality',
    'Manufacturing',
    'Other'
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Business name is required';
    if (!formData.industry) newErrors.industry = 'Industry is required';
    if (!formData.email.includes('@')) newErrors.email = 'Valid email is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const data = { details: formData,ownerId, navigate };
    dispatch(createBusinessRequest(data));
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
    setFormData("")
  };

  return (
    <div 
      className="lg:min-h-screen bg-cover bg-center bg-fixed flex flex-col lg:flex-row"
      style={{ backgroundImage: "url('/Images/createbusiness1.jpg')" }}
    >
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Logo at top-left corner */}
      <div className="relative z-20 pt-6 pl-6 lg:pt-8 lg:pl-12">
        <img src={logo} alt="Logo" className="w-16 h-16" />
      </div>

      {/* Left Side - Welcome Content */}
      <div className="relative z-10 w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12">
        <div className="text-white max-w-md lg:max-w-xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Launch Your Business With Us</h2>
          <p className="text-lg lg:text-xl leading-relaxed">
            Register your business to access powerful management tools that will help you streamline operations and accelerate growth.
          </p>
        </div>
      </div>

      {/* Right Side - Form Card */}
      <div className="relative z-10 w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-8">
        <div className="w-full max-w-md bg-white bg-opacity-90 rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-center mb-6">
            <OfficeBuildingIcon className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-bold text-gray-800">Register Your Business</h2>
          </div>
          
          {success && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg flex items-center text-sm">
              <CheckCircleIcon className="h-4 w-4 mr-2" />
              Business registered successfully!
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Business Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Acme Inc."
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-600 flex items-center">
                  <XCircleIcon className="h-3 w-3 mr-1" /> {errors.name}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Select
            label="Industry"
            name='industry'
            options={industries}
            value={formData.industry}
            onChange={handleChange}
          />
        

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="(123) 456-7890"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="contact@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600 flex items-center">
                  <XCircleIcon className="h-3 w-3 mr-1" /> {errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                type="text"
                name="businessAddress"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="123 Main St, City, State"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Website
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                  https://
                </span>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="yourbusiness.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="businessDescription"
                value={formData.description}
                onChange={handleChange}
                rows={2}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Briefly describe your business..."
              />
            </div>

            <div className="pt-2">
              {loading ? (
                <button
                  type="button"
                  className="w-full p-2 bg-blue-500 text-white rounded-lg flex items-center justify-center text-sm"
                  disabled
                >
                  <svg
                    className="animate-spin h-4 w-4 mr-2 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"/>
                    <path fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" className="opacity-75"/>
                  </svg>
                  Processing...
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 font-medium text-sm shadow-sm"
                >
                  Register Business
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateBusiness;