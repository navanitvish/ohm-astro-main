import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AstrologerRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    expertise: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate form
    if (!validateForm()) {
      setIsLoading(false);
      return;
    }

    // Format phone number to ensure it's clean
    const formattedPhone = formData.phone.replace(/\D/g, '');

    // Create request data with proper formatting
    const requestData = {
      name: formData.name.trim(),
      email: formData.email.toLowerCase().trim(),
      phone: formattedPhone,
      expertise: formData.expertise,
    };

    try {
      const response = await axios.post(
        "https://atro-server.onrender.com/api/astrologer-requests",
        requestData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );

      if (response.data) {
        toast.success("Registration submitted successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        
        setFormData({
          name: "",
          email: "",
          phone: "",
          expertise: "",
        });
      }
    } catch (err) {
      console.error('Registration Error:', err);
      if (err.response?.data?.message) {
        toast.error(err.response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else if (err.response?.status === 500) {
        toast.error("Server error. Please try again later.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.error("Failed to submit registration. Please try again.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const expertiseOptions = [
    "Vedic Astrology",
    "Numerology",
    "Tarot Reading",
    "Vastu",
    "Palmistry",
    "Face Reading",
    "Horoscope",
  ];

  const validateForm = () => {
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.name || formData.name.length < 3) {
      toast.error("Name must be at least 3 characters long", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return false;
    }
    
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return false;
    }
    
    if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      toast.error("Please enter a valid 10-digit phone number", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return false;
    }
    
    if (!formData.expertise) {
      toast.error("Please select your expertise", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return false;
    }
    
    return true;
  };

  return (
    <div>
      <ToastContainer />
      <nav className="bg-red-500 text-white p-4">
        <div className="container mx-auto">
          <div className="flex items-center text-sm">
            <a href="/" className="hover:underline">
              Home
            </a>
            <span className="mx-2">›</span>
            <Link to="/astrologer-registration" className="hover:underline">
              Astrologer Registration
            </Link>
          </div>
        </div>
      </nav>

      <div className="min-h-screen bg-red-500 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-3xl font-bold mb-4">
                BECOME "OHM Astro VERIFIED" ASTROLOGER:
                <span className="text-yellow-300"> JOIN NOW!</span>
              </h1>

              <p className="mb-8">
                Anytime Astro, one of the best online astrology portals gives
                you a chance to be a part of its community of best and top-notch
                Astrologers. Become a part of the team of 1500+ Astrologers and
                offer your consultations to clients from all across the globe, &
                create an online, personalized brand presence.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 text-center text-gray-800">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold">Verified Expert</h3>
                  <p className="text-sm">Astrologers</p>
                </div>

                <div className="bg-white rounded-lg p-4 text-center text-gray-800">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold">1500+ Trusted</h3>
                  <p className="text-sm">Astrologers</p>
                </div>

                <div className="bg-white rounded-lg p-4 text-center text-gray-800">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold">24/7</h3>
                  <p className="text-sm">Availability</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Astrologer Sign Up
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name*"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                    minLength={3}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address*"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="flex">
                  <select className="px-2 py-2 border rounded-l-lg bg-gray-50">
                    <option>🇮🇳 +91</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Mobile Number*"
                    className="w-full px-4 py-2 border border-l-0 rounded-r-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                    pattern="[0-9]{10}"
                    maxLength="10"
                  />
                </div>

                <div>
                  <select
                    name="expertise"
                    value={formData.expertise}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Expertise*</option>
                    {expertiseOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" id="terms" className="rounded" required />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I Agree To OHM Astro Astrologers{" "}
                    <a href="#" className="text-pink-500">
                      Terms Of Use
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-pink-500">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-yellow-400 text-gray-900 font-semibold py-2 rounded-lg transition-colors ${
                    isLoading ? 'opacity-75 cursor-not-allowed' : 'hover:bg-yellow-500'
                  }`}
                >
                  {isLoading ? 'Signing Up...' : 'Sign Up'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstrologerRegistration;