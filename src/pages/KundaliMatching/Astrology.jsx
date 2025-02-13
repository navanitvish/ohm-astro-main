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
        <span>Astrology</span>
      </div>
    </div>
  );
};
const Astrology = () => {
  return (
    <div>
      <Breadcrumb />
      <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-12">
          ASTROLOGY
          <div className="w-24 h-1 bg-red-500 mx-auto mt-2"></div>
        </h1>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="md:col-span-2">
            {/* Significance Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                Significance Of Astrology
              </h2>
              <p className="text-gray-700 mb-6">
                Astrology has been playing a significant role in transforming
                the lives of people since ancient times. Astrologers from
                various cultures analyze the positions and movements of
                celestial objects to predict future events. Through the medium
                of this divine science, people are able to minimize the risk of
                uncertainties in their career, business, relationship, health, &
                much more.
              </p>

              {/* Service Cards */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {/* Kundali Matching Card */}
                <div className="border rounded-lg p-4 flex items-center space-x-4 hover:shadow-lg transition-shadow">
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
                    <h3 className="font-bold">Kundali Matching</h3>
                    <p className="text-sm text-gray-600">
                      Get Kundali and horoscope matching along with Guna Milan
                      Compatibility
                    </p>
                  </div>
                </div>

                {/* Janam Kundali Card */}
                <div className="border rounded-lg p-4 flex items-center space-x-4 hover:shadow-lg transition-shadow">
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
                    <h3 className="font-bold">Free Janam Kundali</h3>
                    <p className="text-sm text-gray-600">
                      Get an in-depth analysis of your Birth Chart by renowned
                      Vedic Astrologers
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Is Astrology Important Section */}
              <section>
                <h2 className="text-2xl font-bold mb-4">
                  Why Is Astrology Important?
                </h2>
                <p className="text-gray-700 mb-4">
                  Astrology has a profound impact on our lives. Our minds and
                  emotions are affected by the movement of the Moon and the
                  alignment of the planets, even when we are unaware of it. Our
                  Birth Chart shows the position of the planets at the time when
                  we were born, and it can be compared with any time in history.
                </p>
                <p className="text-gray-700 mb-4">
                  We are not only influenced by the planetary combinations
                  present in our Kundali, but also by the planetary movements of
                  the people whom we meet on a daily basis. They can be our
                  parents, spouse, children, and other acquaintances. This is a
                  vice-versa situation.
                </p>
                <p className="text-gray-700">
                  Astrology enables us to connect with the divine and spiritual
                  powers of the Universe. It enlightens our path so that we can
                  make the most out of our lives. It is a chord that keeps our
                  past, present, and future connected. Astrology is far from the
                  world of discrimination and helps an individual during their
                  tough times.
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
      <VedicAstrologersSection/>
    </div>
  );
};

export default Astrology;





