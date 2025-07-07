import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LocationMarkerIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/outline';
import { createBranchRequest } from "../Redux/slices/branchSlice";

function CreateBranch() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    location: '',
    phone: ''
  });
  const businessId = localStorage.getItem("businessId");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Branch name is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    
    try {
      const data = { details: formData,businessId, navigate };
      dispatch(createBranchRequest(data));
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setFormData({ name: '', location: '', phone: '' });
      }, 2000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header Section */}
          <div className="bg-blue-600 px-6 py-4 flex items-center">
            <div className="p-2 bg-blue-700 rounded-lg">
              <LocationMarkerIcon className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-bold text-white">Add New Branch</h2>
              <p className="text-blue-100 text-sm">Fill in the branch details below</p>
            </div>
          </div>

          {/* Form Section */}
          <div className="px-6 py-8">
            {success && (
              <div className="mb-6 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center animate-fade-in">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-green-700 font-medium">Branch created successfully!</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Branch Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Branch Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                    errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-blue-400'
                  }`}
                  placeholder="e.g. Main Branch"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600 flex items-center animate-fade-in">
                    <XCircleIcon className="h-4 w-4 mr-1.5 flex-shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Location */}
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                    errors.location ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-blue-400'
                  }`}
                  placeholder="e.g. 123 Main St, City"
                />
                {errors.location && (
                  <p className="mt-2 text-sm text-red-600 flex items-center animate-fade-in">
                    <XCircleIcon className="h-4 w-4 mr-1.5 flex-shrink-0" />
                    <span>{errors.location}</span>
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                    errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-blue-400'
                  }`}
                  placeholder="e.g. (123) 456-7890"
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-600 flex items-center animate-fade-in">
                    <XCircleIcon className="h-4 w-4 mr-1.5 flex-shrink-0" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex justify-center items-center py-3 px-6 rounded-xl shadow-md transition-all ${
                    loading 
                      ? 'bg-blue-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5'
                  }`}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                      </svg>
                      <span className="font-medium text-white">Processing...</span>
                    </>
                  ) : (
                    <span className="font-medium text-white">Create Branch</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBranch;