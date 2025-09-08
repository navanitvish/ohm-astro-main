// src/pages/HoroscopePage.js
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { zodiacData, getHoroscope } from '../../components/content/zodiacData ';
import SignsNavigation from './SignsNavigation';  // Import the new component
import { useSelector } from "react-redux";
import translations from "../../components/translations/translations";
const HoroscopePage = () => {
  const { sign } = useParams();
  const navigate = useNavigate();
    const language = useSelector((state) => state.language.language);
  const t = translations[language];
  
  // Default to 'Aries' if no valid sign is provided
  const [activeSign, setActiveSign] = useState(() => {
    const validSign = sign && zodiacData[sign] ? sign : 'Aries';
    return validSign;
  });
  const [activeTab, setActiveTab] = useState('daily');

  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  useEffect(() => {
    // Redirect to valid sign if invalid sign is provided in URL
    if (sign && !zodiacData[sign]) {
      navigate('/horoscope/aries', { replace: true });
    } else if (sign && zodiacData[sign]) {
      setActiveSign(sign);
    }
  }, [sign, navigate]);

  // Safe data access with error handling
  const currentSignData = zodiacData[activeSign] || zodiacData['Aries'];
  const currentHoroscope = (() => {
    try {
      return getHoroscope(activeSign, activeTab) || {
        prediction: "Horoscope temporarily unavailable",
        luckyColor: ["N/A"],
        luckyNumber: [0],
        element: "N/A",
        ruler: "N/A"
      };
    } catch (error) {
      console.error('Error fetching horoscope:', error);
      return {
        prediction: "Horoscope temporarily unavailable",
        luckyColor: ["N/A"],
        luckyNumber: [0],
        element: "N/A",
        ruler: "N/A"
      };
    }
  })();

  const handleSignChange = (newSign) => {
    if (zodiacData[newSign]) {
      setActiveSign(newSign);
      navigate(`/horoscope/${newSign.toLowerCase()}`);
    }
  };

  // Ensure we have valid data before rendering
  if (!currentSignData) {
    return (
      <div className="w-full max-w-6xl mx-auto p-4">
        <p>Loading horoscope data...</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Signs Navigation */}
      <SignsNavigation 
        activeSign={activeSign} 
        handleSignChange={handleSignChange} 
      />

      {/* Content Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {activeSign} Daily Horoscope
          </h1>
          <p className="text-gray-600">{currentDate}</p>
        </div>

        {/* Horoscope Tabs */}
        <div className="flex space-x-4 mb-6">
          {['daily', 'monthly', 'yearly'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full ${
                activeTab === tab
                  ? 'bg-pink-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Prediction Text */}
        <div className="mb-8">
          <p className="text-gray-700 leading-relaxed">
            {currentHoroscope.prediction}
          </p>
        </div>

        {/* Lucky Colors and Numbers */}
        {activeTab === 'daily' && currentHoroscope.luckyColor && currentHoroscope.luckyNumber && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Today's Lucky Color and Number For {activeSign}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Lucky Colors */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white">●</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      {activeSign} Lucky Color For Today
                    </p>
                    <p className="text-gray-600">
                      {currentHoroscope.luckyColor.join(', ')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Lucky Numbers */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white">{currentHoroscope.luckyNumber[0]}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      {activeSign} Lucky Number For Today
                    </p>
                    <p className="text-gray-600">
                      {currentHoroscope.luckyNumber.join(', ')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HoroscopePage;
