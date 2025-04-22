import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import translations from '../../components/translations/translations';

const KundaliMatchingForm = () => {
  const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", 
    "September", "October", "November", "December",
  ];
  const days = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, "0"));
  const years = Array.from({ length: 100 }, (_, i) => 2024 - i);
  const hours = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0"));
  const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0"));
  const meridiem = ["AM", "PM"];

  // State object for both boy and girl details
  const [formData, setFormData] = useState({
    boy: {
      name: '',
      birthDate: { month: '', day: '', year: '' },
      birthTime: { hour: '', minute: '', second: '', meridiem: '' },
      placeOfBirth: '',
      dontKnowBirthTime: false,
    },
    girl: {
      name: '',
      birthDate: { month: '', day: '', year: '' },
      birthTime: { hour: '', minute: '', second: '', meridiem: '' },
      placeOfBirth: '',
      email: '',
      dontKnowBirthTime: false,
    },
  });

  // Add loading and error states for API interaction
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const language = useSelector((state) => state.language.language);
  const t = translations[language];

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

  const handleDateChange = (e, person, field) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [person]: {
        ...prevData[person],
        birthDate: {
          ...prevData[person].birthDate,
          [name]: value,
        },
      },
    }));
  };

  const handleTimeChange = (e, person, field) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [person]: {
        ...prevData[person],
        birthTime: {
          ...prevData[person].birthTime,
          [name]: value,
        },
      },
    }));
  };

  const handleCheckboxChange = (e, person) => {
    const { checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [person]: {
        ...prevData[person],
        dontKnowBirthTime: checked,
      },
    }));
  };

  // Format data for API submission
  const formatDataForAPI = () => {
    // Format boy's data
    const boyData = {
      name: formData.boy.name,
      birthDate: `${formData.boy.birthDate.year}-${getMonthNumber(formData.boy.birthDate.month)}-${formData.boy.birthDate.day}`,
      birthTime: formData.boy.dontKnowBirthTime ? "00:00:00" : 
        `${convertTo24Hour(formData.boy.birthTime.hour, formData.boy.birthTime.meridiem)}:${formData.boy.birthTime.minute}:${formData.boy.birthTime.second}`,
      placeOfBirth: formData.boy.placeOfBirth,
    };

    // Format girl's data
    const girlData = {
      name: formData.girl.name,
      birthDate: `${formData.girl.birthDate.year}-${getMonthNumber(formData.girl.birthDate.month)}-${formData.girl.birthDate.day}`,
      birthTime: formData.girl.dontKnowBirthTime ? "00:00:00" : 
        `${convertTo24Hour(formData.girl.birthTime.hour, formData.girl.birthTime.meridiem)}:${formData.girl.birthTime.minute}:${formData.girl.birthTime.second}`,
      placeOfBirth: formData.girl.placeOfBirth,
      email: formData.girl.email,
    };

    return {
      boy: boyData,
      girl: girlData
    };
  };

  // Helper function to convert month name to number
  const getMonthNumber = (monthName) => {
    const monthIndex = months.findIndex(month => month === monthName);
    return String(monthIndex + 1).padStart(2, "0");
  };

  // Helper function to convert 12-hour format to 24-hour format
  const convertTo24Hour = (hour, meridiem) => {
    let hourNum = parseInt(hour, 10);
    
    if (meridiem === "PM" && hourNum < 12) {
      hourNum += 12;
    } else if (meridiem === "AM" && hourNum === 12) {
      hourNum = 0;
    }
    
    return String(hourNum).padStart(2, "0");
  };

  // Validate form before submission
  const validateForm = () => {
    // Boy's data validation
    if (!formData.boy.name) return "Boy's name is required";
    if (!formData.boy.birthDate.year || !formData.boy.birthDate.month || !formData.boy.birthDate.day) 
      return "Boy's birth date is required";
    if (!formData.boy.dontKnowBirthTime && 
        (!formData.boy.birthTime.hour || !formData.boy.birthTime.minute || !formData.boy.birthTime.second || !formData.boy.birthTime.meridiem))
      return "Boy's birth time is required";
    if (!formData.boy.placeOfBirth) return "Boy's place of birth is required";

    // Girl's data validation
    if (!formData.girl.name) return "Girl's name is required";
    if (!formData.girl.birthDate.year || !formData.girl.birthDate.month || !formData.girl.birthDate.day) 
      return "Girl's birth date is required";
    if (!formData.girl.dontKnowBirthTime && 
        (!formData.girl.birthTime.hour || !formData.girl.birthTime.minute || !formData.girl.birthTime.second || !formData.girl.birthTime.meridiem))
      return "Girl's birth time is required";
    if (!formData.girl.placeOfBirth) return "Girl's place of birth is required";
    
    // Email validation
    if (!formData.girl.email) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.girl.email)) return "Please enter a valid email";

    return null; // No errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset messages
    setError(null);
    setSuccessMessage('');
    
    // Validate form
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    
    try {
      setIsLoading(true);
      const formattedData = formatDataForAPI();
      
      const response = await fetch('https://astrology-3bjo.onrender.com/api/free-services/kundali-match', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit the form');
      }
      
      setSuccessMessage('Kundali match report has been sent to your email!');
      console.log('API Response:', data);
      
      // Optional: Reset form after successful submission
      // resetForm();
    } catch (err) {
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
        birthDate: { month: '', day: '', year: '' },
        birthTime: { hour: '', minute: '', second: '', meridiem: '' },
        placeOfBirth: '',
        dontKnowBirthTime: false,
      },
      girl: {
        name: '',
        birthDate: { month: '', day: '', year: '' },
        birthTime: { hour: '', minute: '', second: '', meridiem: '' },
        placeOfBirth: '',
        email: '',
        dontKnowBirthTime: false,
      },
    });
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
                  <label className="block text-gray-700 mb-2">
                    {t.BoyName} <span className="text-red-500">*</span>
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
                    {t.BirthDate} <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <select
                      name="month"
                      value={formData.boy.birthDate.month}
                      onChange={(e) => handleDateChange(e, 'boy', 'birthDate')}
                      className="p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500"
                    >
                      <option value="">Month</option>
                      {months.map((month) => (
                        <option key={month} value={month}>
                          {month}
                        </option>
                      ))}
                    </select>
                    <select
                      name="day"
                      value={formData.boy.birthDate.day}
                      onChange={(e) => handleDateChange(e, 'boy', 'birthDate')}
                      className="p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500"
                    >
                      <option value="">Day</option>
                      {days.map((day) => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
                    </select>
                    <select
                      name="year"
                      value={formData.boy.birthDate.year}
                      onChange={(e) => handleDateChange(e, 'boy', 'birthDate')}
                      className="p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500"
                    >
                      <option value="">Year</option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    {t.BirthTime} <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center">
                    <div className="grid grid-cols-4 gap-2 flex-grow">
                      <select
                        name="hour"
                        value={formData.boy.birthTime.hour}
                        onChange={(e) => handleTimeChange(e, 'boy', 'birthTime')}
                        className="p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500"
                        disabled={formData.boy.dontKnowBirthTime}
                      >
                        <option value="">Hour</option>
                        {hours.map((hour) => (
                          <option key={hour} value={hour}>
                            {hour}
                          </option>
                        ))}
                      </select>
                      <select
                        name="minute"
                        value={formData.boy.birthTime.minute}
                        onChange={(e) => handleTimeChange(e, 'boy', 'birthTime')}
                        className="p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500"
                        disabled={formData.boy.dontKnowBirthTime}
                      >
                        <option value="">Min</option>
                        {minutes.map((minute) => (
                          <option key={minute} value={minute}>
                            {minute}
                          </option>
                        ))}
                      </select>
                      <select
                        name="second"
                        value={formData.boy.birthTime.second}
                        onChange={(e) => handleTimeChange(e, 'boy', 'birthTime')}
                        className="p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500"
                        disabled={formData.boy.dontKnowBirthTime}
                      >
                        <option value="">Sec</option>
                        {minutes.map((second) => (
                          <option key={second} value={second}>
                            {second}
                          </option>
                        ))}
                      </select>
                      <select
                        name="meridiem"
                        value={formData.boy.birthTime.meridiem}
                        onChange={(e) => handleTimeChange(e, 'boy', 'birthTime')}
                        className="p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500"
                        disabled={formData.boy.dontKnowBirthTime}
                      >
                        <option value="">AM/PM</option>
                        {meridiem.map((m) => (
                          <option key={m} value={m}>
                            {m}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="ml-4">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.boy.dontKnowBirthTime}
                          onChange={(e) => handleCheckboxChange(e, 'boy')}
                          className="form-checkbox text-pink-500"
                        />
                        <span className="ml-2 text-sm text-gray-600">
                          {t.DontKnowBirthTime}
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    {t.PlaceOfBirth} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="placeOfBirth"
                    value={formData.boy.placeOfBirth}
                    placeholder="New Delhi, India"
                    onChange={(e) => handleInputChange(e, 'boy')}
                    className="w-full p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500"
                  />
                </div>
              </div>

              {/* Right Column - Girl Details */}
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">
                    {t.GirlName} <span className="text-red-500">*</span>
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
                    {t.BirthDate} <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <select
                      name="month"
                      value={formData.girl.birthDate.month}
                      onChange={(e) => handleDateChange(e, 'girl', 'birthDate')}
                      className="p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500"
                    >
                      <option value="">Month</option>
                      {months.map((month) => (
                        <option key={month} value={month}>
                          {month}
                        </option>
                      ))}
                    </select>
                    <select
                      name="day"
                      value={formData.girl.birthDate.day}
                      onChange={(e) => handleDateChange(e, 'girl', 'birthDate')}
                      className="p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500"
                    >
                      <option value="">Day</option>
                      {days.map((day) => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
                    </select>
                    <select
                      name="year"
                      value={formData.girl.birthDate.year}
                      onChange={(e) => handleDateChange(e, 'girl', 'birthDate')}
                      className="p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500"
                    >
                      <option value="">Year</option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    {t.BirthTime} <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center">
                    <div className="grid grid-cols-4 gap-2 flex-grow">
                      <select
                        name="hour"
                        value={formData.girl.birthTime.hour}
                        onChange={(e) => handleTimeChange(e, 'girl', 'birthTime')}
                        className="p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500"
                        disabled={formData.girl.dontKnowBirthTime}
                      >
                        <option value="">Hour</option>
                        {hours.map((hour) => (
                          <option key={hour} value={hour}>
                            {hour}
                          </option>
                        ))}
                      </select>
                      <select
                        name="minute"
                        value={formData.girl.birthTime.minute}
                        onChange={(e) => handleTimeChange(e, 'girl', 'birthTime')}
                        className="p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500"
                        disabled={formData.girl.dontKnowBirthTime}
                      >
                        <option value="">Min</option>
                        {minutes.map((minute) => (
                          <option key={minute} value={minute}>
                            {minute}
                          </option>
                        ))}
                      </select>
                      <select
                        name="second"
                        value={formData.girl.birthTime.second}
                        onChange={(e) => handleTimeChange(e, 'girl', 'birthTime')}
                        className="p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500"
                        disabled={formData.girl.dontKnowBirthTime}
                      >
                        <option value="">Sec</option>
                        {minutes.map((second) => (
                          <option key={second} value={second}>
                            {second}
                          </option>
                        ))}
                      </select>
                      <select
                        name="meridiem"
                        value={formData.girl.birthTime.meridiem}
                        onChange={(e) => handleTimeChange(e, 'girl', 'birthTime')}
                        className="p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500"
                        disabled={formData.girl.dontKnowBirthTime}
                      >
                        <option value="">AM/PM</option>
                        {meridiem.map((m) => (
                          <option key={m} value={m}>
                            {m}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="ml-4">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.girl.dontKnowBirthTime}
                          onChange={(e) => handleCheckboxChange(e, 'girl')}
                          className="form-checkbox text-pink-500"
                        />
                        <span className="ml-2 text-sm text-gray-600">
                          {t.DontKnowBirthTime}
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    {t.PlaceOfBirth} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="placeOfBirth"
                    value={formData.girl.placeOfBirth}
                    placeholder="New Delhi, India"
                    onChange={(e) => handleInputChange(e, 'girl')}
                    className="w-full p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    {t.Email} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.girl.email}
                    placeholder="Enter Email"
                    onChange={(e) => handleInputChange(e, 'girl')}
                    className="w-full p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isLoading}
                className={`${
                  isLoading ? 'bg-yellow-300 cursor-not-allowed' : 'bg-yellow-400 hover:bg-yellow-500'
                } text-gray-800 px-8 py-2 rounded-full font-medium transition-colors flex items-center`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  t.GetReport
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default KundaliMatchingForm;