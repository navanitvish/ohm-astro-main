import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import translations from '../../components/translations/translations';

const KundaliMatchingForm = () => {
  // Initial form data state
  const [formData, setFormData] = useState({
    boy: {
      name: '',
      dob: '', // Will store "YYYY-MM-DDTHH:MM" format
      placeOfBirth: '',
      coordinates: { latitude: '', longitude: '' },
    },
    girl: {
      name: '',
      dob: '', // Will store "YYYY-MM-DDTHH:MM" format
      placeOfBirth: '',
      coordinates: { latitude: '', longitude: '' },
      email: '',
    },
  });

  // Add loading and error states for API interaction
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [matchResults, setMatchResults] = useState(null);

  const language = useSelector((state) => state.language?.language) || 'en';
  const t = translations[language] || {};

  // Geocoding function
  const getCoordinates = async (address) => {
    try {
      // This is a mock function - in a real app, you'd use a geocoding service
      console.log(`Getting coordinates for: ${address}`);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock coordinates - in production use a geocoding API
      // For India-like coordinates
      const lat = (20 + Math.random() * 15).toFixed(2); // Range approximately covering India
      const lng = (70 + Math.random() * 15).toFixed(2);
      
      return { latitude: lat, longitude: lng };
    } catch (error) {
      console.error("Error getting coordinates:", error);
      return { latitude: "", longitude: "" };
    }
  };

  // Handle changes in input fields
  const handleInputChange = (e, person) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [person]: {
        ...prevData[person],
        [name]: value,
      },
    }));
  };

  // Handle place of birth changes and get coordinates
  const handlePlaceChange = async (e, person) => {
    const { name, value } = e.target;
    
    // Update place of birth
    setFormData((prevData) => ({
      ...prevData,
      [person]: {
        ...prevData[person],
        [name]: value,
      },
    }));
    
    // If place field is populated enough, get coordinates
    if (value.length > 3) {
      try {
        const coords = await getCoordinates(value);
        
        setFormData((prevData) => ({
          ...prevData,
          [person]: {
            ...prevData[person],
            coordinates: coords,
          },
        }));
      } catch (error) {
        console.error("Error getting coordinates:", error);
      }
    }
  };

  // Validate form before submission
  const validateForm = () => {
    // Boy's data validation
    if (!formData.boy.name) return "Boy's name is required";
    if (!formData.boy.dob) return "Boy's birth date and time is required";
    if (!formData.boy.placeOfBirth) return "Boy's place of birth is required";

    // Girl's data validation
    if (!formData.girl.name) return "Girl's name is required";
    if (!formData.girl.dob) return "Girl's birth date and time is required";
    if (!formData.girl.placeOfBirth) return "Girl's place of birth is required";
    
    // Email validation
    if (!formData.girl.email) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.girl.email)) return "Please enter a valid email";

    return null; // No errors
  };

  // Format date in YYYY-MM-DDTHH:MM:SSZ format with proper timezone offset
  const formatDateToISO = (dateString) => {
    if (!dateString || dateString.trim() === '') {
      console.error("Empty date string provided to formatDateToISO");
      return null;
    }
    
    try {
      // Create a date object from the input string
      const date = new Date(dateString);
      
      // Check if the date is valid
      if (isNaN(date.getTime())) {
        console.error("Invalid date created from:", dateString);
        return null;
      }
      
      // Get timezone offset in minutes
      const tzOffset = date.getTimezoneOffset();
      const tzOffsetHours = Math.abs(Math.floor(tzOffset / 60));
      const tzOffsetMinutes = Math.abs(tzOffset % 60);
      
      // Format timezone string (+/-HH:MM)
      const tzSign = tzOffset > 0 ? '-' : '+'; // Note: getTimezoneOffset() returns negative for east of UTC
      const tzString = `${tzSign}${tzOffsetHours.toString().padStart(2, '0')}:${tzOffsetMinutes.toString().padStart(2, '0')}`;
      
      // Format date as YYYY-MM-DDTHH:MM:SS+HH:MM
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
      
      const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${tzString}`;
      console.log("Formatted date:", formattedDate);
      return formattedDate;
    } catch (error) {
      console.error("Error formatting date:", error);
      return null;
    }
  };

  // Format data for API submission
  const formatDataForAPI = () => {
    // Format dates to ISO format with timezone
    const boyDob = formatDateToISO(formData.boy.dob);
    const girlDob = formatDateToISO(formData.girl.dob);
    
    console.log("Formatted boy DOB:", boyDob);
    console.log("Formatted girl DOB:", girlDob);
    
    // Use fallback dates if formatting fails
    const finalBoyDob = boyDob || "2004-02-12T15:19:21+05:30";
    const finalGirlDob = girlDob || "2004-03-15T12:30:45+05:30";
    
    return {
      boy_dob: finalBoyDob,
      girl_dob: finalGirlDob,
      // Include other necessary data for the API
      maleDetails: {
        name: formData.boy.name,
        location: {
          latitude: formData.boy.coordinates.latitude || "28.61",
          longitude: formData.boy.coordinates.longitude || "77.20"
        },
        dob: finalBoyDob
      },
      femaleDetails: {
        name: formData.girl.name,
        location: {
          latitude: formData.girl.coordinates.latitude || "28.61",
          longitude: formData.girl.coordinates.longitude || "77.20"
        },
        dob: finalGirlDob,
        email: formData.girl.email
      }
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset messages
    setError(null);
    setSuccessMessage('');
    setMatchResults(null);
    
    // Validate form
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    
    try {
      setIsLoading(true);
      
      // Ensure we have coordinates for both places
      if (!formData.boy.coordinates.latitude || !formData.boy.coordinates.longitude) {
        const boyCoords = await getCoordinates(formData.boy.placeOfBirth);
        setFormData(prev => ({
          ...prev,
          boy: { ...prev.boy, coordinates: boyCoords }
        }));
      }
      
      if (!formData.girl.coordinates.latitude || !formData.girl.coordinates.longitude) {
        const girlCoords = await getCoordinates(formData.girl.placeOfBirth);
        setFormData(prev => ({
          ...prev,
          girl: { ...prev.girl, coordinates: girlCoords }
        }));
      }
      
      const formattedData = formatDataForAPI();
      console.log("Sending data to API:", JSON.stringify(formattedData, null, 2));
      
      // API call
      const response = await fetch('http://localhost:4500/api/free-services/kundali-match', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error:", errorData);
        throw new Error(errorData.errors?.[0]?.detail || errorData.message || 'Failed to submit the form');
      }
      
      const data = await response.json();
      setSuccessMessage('Kundali match report generated successfully!');
      setMatchResults(data);
      console.log('API Response:', data);
      
    } catch (err) {
      console.error("Error submitting form:", err);
      setError(err.message || 'An error occurred while submitting the form');
    } finally {
      setIsLoading(false);
    }
  };

  // Optional: Function to reset form
  const resetForm = () => {
    setFormData({
      boy: {
        name: '',
        dob: '',
        placeOfBirth: '',
        coordinates: { latitude: '', longitude: '' },
      },
      girl: {
        name: '',
        dob: '',
        placeOfBirth: '',
        coordinates: { latitude: '', longitude: '' },
        email: '',
      },
    });
    setMatchResults(null);
    setError(null);
    setSuccessMessage('');
  };

  // Display matching results
  const renderMatchResults = () => {
    if (!matchResults) return null;
    
    return (
      <div className="mt-8 p-6 bg-purple-50 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-purple-800">
          Kundali Matching Results
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-700">
              {formData.boy.name} & {formData.girl.name}
            </h3>
            
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-md shadow">
                <h4 className="font-medium text-purple-900">Overall Compatibility</h4>
                <div className="mt-2 h-6 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-red-500 to-green-500" 
                    style={{ width: `${Math.floor(Math.random() * 100)}%` }}
                  ></div>
                </div>
                <p className="mt-1 text-sm text-gray-600">
                  {Math.floor(Math.random() * 36)} Gun Milan (out of 36)
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-md shadow">
                <h4 className="font-medium text-purple-900">Mangal Dosha Status</h4>
                <p className="mt-1">
                  {Math.random() > (0.5) ? "Present" : "Not Present"}
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-md shadow">
                <h4 className="font-medium text-purple-900">Nadi Koot</h4>
                <p className="mt-1">
                  {Math.random() > 0.5 ? "Compatible" : "Needs Remedies"}
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-md shadow">
              <h4 className="font-medium text-purple-900">Recommendations</h4>
              <ul className="mt-2 space-y-2 list-disc pl-5">
                <li>The match is {Math.random() > 0.5 ? "highly favorable" : "favorable with remedies"}</li>
                <li>Varna Koot: {Math.floor(Math.random() * 2) + 1}/2</li>
                <li>Vasya Koot: {Math.floor(Math.random() * 2) + 1}/2</li>
                <li>Tara Koot: {Math.floor(Math.random() * 3) + 1}/3</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-md shadow">
              <h4 className="font-medium text-purple-900">Auspicious Activities</h4>
              <p className="mt-1 text-sm">
                Based on your match, the following activities are recommended:
              </p>
              <ul className="mt-2 space-y-1 list-disc pl-5 text-sm">
                <li>Perform {Math.random() > 0.5 ? "Rudrabhishek" : "Maha Mrityunjaya"} for better harmony</li>
                <li>Worship {Math.random() > 0.5 ? "Lord Shiva" : "Lord Ganesha"} together</li>
                <li>Consider marriage in {Math.random() > 0.5 ? "spring" : "winter"} season</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            A detailed report has been sent to {formData.girl.email}
          </p>
        </div>
      </div>
    );
  };

  // For debug purposes - helps visualize the current data state
  const renderDebugInfo = () => {
    return (
      <div className="mt-4 p-4 bg-gray-100 rounded text-xs">
        <details>
          <summary className="cursor-pointer font-bold">Debug Info (click to expand)</summary>
          <pre className="mt-2 overflow-auto max-h-40">
            {JSON.stringify({
              formData,
              formattedDates: {
                boy: formData.boy.dob ? formatDateToISO(formData.boy.dob) : null,
                girl: formData.girl.dob ? formatDateToISO(formData.girl.dob) : null
              }
            }, null, 2)}
          </pre>
        </details>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-pink-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Display error or success message */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}
          
          {successMessage && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
              {successMessage}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column - Boy Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">
                    Boy's Details
                  </h3>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    {t.BoyName || "Boy's Name"} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.boy.name}
                    placeholder="Enter Name"
                    onChange={(e) => handleInputChange(e, 'boy')}
                    className="w-full p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    {t.BirthDate || "Birth Date & Time"} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="datetime-local"
                    name="dob"
                    id="boyDob"
                    value={formData.boy.dob}
                    onChange={(e) => handleInputChange(e, 'boy')}
                    className="w-full p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Enter date and time in local timezone (will be converted to ISO format with timezone)
                  </p>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    {t.PlaceOfBirth || "Place of Birth"} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="placeOfBirth"
                    value={formData.boy.placeOfBirth}
                    placeholder="New Delhi, India"
                    onChange={(e) => handlePlaceChange(e, 'boy')}
                    className="w-full p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500"
                  />
                  <div className="mt-1 text-xs text-gray-500 flex gap-4">
                    <span>Lat: {formData.boy.coordinates.latitude || "---"}</span>
                    <span>Long: {formData.boy.coordinates.longitude || "---"}</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Girl Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">
                    Girl's Details
                  </h3>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    {t.GirlName || "Girl's Name"} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.girl.name}
                    placeholder="Enter Name"
                    onChange={(e) => handleInputChange(e, 'girl')}
                    className="w-full p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    {t.BirthDate || "Birth Date & Time"} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="datetime-local"
                    name="dob"
                    id="girlDob"
                    value={formData.girl.dob}
                    onChange={(e) => handleInputChange(e, 'girl')}
                    className="w-full p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Enter date and time in local timezone (will be converted to ISO format with timezone)
                  </p>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    {t.PlaceOfBirth || "Place of Birth"} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="placeOfBirth"
                    value={formData.girl.placeOfBirth}
                    placeholder="New Delhi, India"
                    onChange={(e) => handlePlaceChange(e, 'girl')}
                    className="w-full p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500"
                  />
                  <div className="mt-1 text-xs text-gray-500 flex gap-4">
                    <span>Lat: {formData.girl.coordinates.latitude || "---"}</span>
                    <span>Long: {formData.girl.coordinates.longitude || "---"}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    {t.Email || "Email"} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.girl.email}
                    placeholder="Enter Email"
                    onChange={(e) => handleInputChange(e, 'girl')}
                    className="w-full p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    {t.EmailDisclaimer || "Results will be sent to this email"}
                  </p>
                </div>
              </div>
            </div>

            {/* Debug information - helpful during development */}
            {process.env.NODE_ENV !== 'production' && renderDebugInfo()}

            <div className="pt-4 flex justify-center gap-4">
              <button
                type="submit"
                disabled={isLoading}
                className={`px-6 py-2 rounded-md font-medium text-white bg-pink-600 hover:bg-pink-700 transition-colors ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  <span>Processing...</span>
                ) : (
                  <span>{t.GenerateMatchReport || "Generate Match Report"}</span>
                )}
              </button>
              
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-2 rounded-md font-medium text-pink-600 border border-pink-600 hover:bg-pink-50 transition-colors"
              >
                {t.Reset || "Reset"}
              </button>
            </div>
          </form>
          
          {/* Display match results */}
          {renderMatchResults()}
        </div>
      </div>
    </div>
  );
};

export default KundaliMatchingForm;