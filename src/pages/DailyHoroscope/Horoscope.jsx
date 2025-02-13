import React from "react";
import { Link } from "react-router-dom";
import VedicAstrologersSection from "../ConsultWithTopVedicAstrologers";

const Breadcrumb = () => {
  return (
    <div className="bg-red-500 text-white py-3 px-4">
      <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <span>›</span>
        <span>Horoscope</span>
      </div>
    </div>
  );
};
const Horoscope = () => {
  return (
    <div>
      <Breadcrumb />
      <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-12">
          Horoscope
          <div className="w-24 h-1 bg-red-500 mx-auto mt-2"></div>
        </h1>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="md:col-span-2">
            {/* Significance Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                Significance Of Horoscope
              </h2>
              <p className="text-gray-700 mb-6">
                A well-crafted Horoscope can assist a person in making
                significant decisions in life and knowing in advance the
                consequences of an action in their life. It helps while getting
                married, buying a new property, starting a new business, buying
                a new vehicle, deciding the name of a newborn, and more. This
                makes it essential to consult only the best Astrologers.
              </p>

              {/* Service Cards */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {/* Kundali Matching Card */}
                <Link to="/DailyHoroscope" className="border rounded-lg p-4 flex items-center space-x-4 hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-pink-500"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold">Daily Horoscope</h3>
                    <p className="text-sm text-gray-600">
                      Get an in-depth analysis of your Birth Chart by renowned
                      Vedic Astrologers
                    </p>
                  </div>
                </Link>

                {/* Janam Kundali Card */}
                <Link to="/monthly-horoscope" className="border rounded-lg p-4 flex items-center space-x-4 hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-blue-500"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19Z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold">Monthly Horoscope</h3>
                    <p className="text-sm text-gray-600">
                      Get an in-depth analysis of your Birth Chart by renowned
                      Vedic Astrologers
                    </p>
                  </div>
                </Link>

                <Link to="/yearly-horoscope" className="border rounded-lg p-4 flex items-center space-x-4 hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-blue-500"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19Z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold">Yearly Horoscope</h3>
                    <p className="text-sm text-gray-600">
                      Get an in-depth analysis of your Birth Chart by renowned
                      Vedic Astrologers
                    </p>
                  </div>
                </Link>
              </div>

              {/* Why Is Astrology Important Section */}
              <section>
                <h2 className="text-2xl font-bold mb-4">
                  Why Is Astrology Important?
                </h2>
                <p className="text-gray-700 mb-4">
                Astrology and Horoscopes can be considered ancient astronomical studies used to identify the impact of celestial bodies on our lives. It has its roots in India in the Vedic Era, where Sage Bhrigu, one of the seven Vedic Sages, brought it to practice. His legacy is being carried on today by our renowned Astrologers.
                </p>
                
              </section>
            </section>
          </div>

          {/* Right Sidebar - Consultation Card */}
          <div className="md:col-span-1">
            <div className="bg-pink-50 rounded-lg p-6">
              <div className="text-center mb-4">
                <h2 className="text-xl font-bold">
                  ARE YOU <span className="text-red-500">GETTING MARRIED</span>
                </h2>
                <p className="text-lg">TO THE RIGHT PERSON?</p>
              </div>
              <div className="mb-4">
                <img
                  src="https://cdn.anytimeastro.com/anytimeastro/web/content/images/ads/indian-bride-ads.png"
                  alt="Couple in traditional wedding attire"
                  className="w-full rounded-lg"
                />
              </div>
              <button className="w-full bg-yellow-400 text-black font-bold py-3 px-6 rounded-full hover:bg-yellow-500 transition-colors">
                Consult Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <VedicAstrologersSection />
    </div>
  );
};

export default Horoscope;
