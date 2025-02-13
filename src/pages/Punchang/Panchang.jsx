import React from "react";
import VedicAstrologersSection from "../ConsultWithTopVedicAstrologers";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import translations from '../../components/translations/translations';
const PanchangData = {
  components: [
    {
      name: "Tithi",
      description: "It is also called Din and refers to The Lunar Day",
    },
    {
      name: "Vara",
      description: "It refers to Day as per the Hindu Lunar calendar.",
    },
    { name: "Nakshatra", description: "It refers to the Lunar Mansion." },
    { name: "Yoga", description: "It refers to Luni Solar Day." },
    {
      name: "Karana",
      description: "It refers to Half of Tithi or Half Lunar Day.",
    },
  ],
};

const Breadcrumb = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];

    return (
      <div className="bg-red-500 text-white py-3 px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm">
          <Link to="/" className="hover:underline">
            {t.Home}
          </Link>
          <span>›</span>
          <p  className="hover:underline">
          {t.Panchang}
          </p>
        </div>
      </div>
    );
  };

const Panchang = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  return (
    <div>
        <Breadcrumb />
      <div className="max-w-6xl mx-auto p-6">
        {/* Main Title */}
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text">{t.Panchang}</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Content Section */}
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-4">
                Significance of Panchang
              </h2>
              <p className="text-gray-700 mb-4">
                The Panchang is a Hindu daily calendar that is based on the
                Vedic Astrology concepts. It presents significant Astrological
                information in the form of a table and is determined by
                thoroughly studying the daily planetary positions. Favorable
                dates or tithis, timings, festivals, Upvas, etc. can be
                determined by reading Panchang or Panchangam.
              </p>
              <p className="text-gray-700 mb-6">
                Panchang is very useful in day-to-day life as it gives a clear
                idea of favorable and unfavorable planetary positions ruling
                different aspects. By referring to the information provided in
                it, an individual can decide whether or not it is a favorable
                time to carry out a particular task.
              </p>

              {/* Today's Panchang Box */}
              <div className="border border-red-200 rounded-lg p-4 mb-6 bg-white">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex-shrink-0">
                    <img
                      src="https://cdn.anytimeastro.com/anytimeastro/web/content/images/icon/Today-Panchang.png"
                      alt="Panchang Icon"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Today's Panchang</h3>
                    <p className="text-gray-600 text-sm">
                      Know Daily Panchangam or Today's Panchang with Festivals
                      and Fasting days here
                    </p>
                  </div>
                </div>
              </div>

              {/* Panchang Components */}
              <div>
                <p className="text-gray-700 mb-4">
                  The word Panchang has a Sanskrit origin and it translates to
                  five limbs which are five visible and invisible sources of
                  energy. Majorly, there are five components of Panchang:-
                </p>
                <ul className="space-y-2">
                  {PanchangData.components.map((component) => (
                    <li key={component.name} className="flex gap-2">
                      <span className="font-semibold">{component.name} -</span>
                      <span className="text-gray-700">
                        {component.description}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700 mt-4">
                  With the change in date and time, the 5 components of Panchang
                  also change.
                </p>

                <p>
                  It is believed that when an individual commences their task
                  after carefully studying the favorability and unfavorability
                  of these 5 components, it helps them in the accomplishment of
                  their important tasks and brings fortune, luck, and prosperity
                  to their lives. Thus, it is necessary to keep yourself updated
                  with the Panchang for the day. On Anytime Astro, you can find
                  Aaj ka Panchang in Hindu Calendar or Panchang for Today.
                </p>
              </div>
            </section>
          </div>

          {/* Right Content Section */}
          <div className="bg-red-400 rounded-lg p-6 text-white relative h-[400px]">
            <div className="space-y-4">
              <div className="text-center space-y-2">
                <p className="text-lg">ARE YOU</p>
                <p className="text-3xl font-bold">GETTING MARRIED</p>
                <p className="text-xl">TO THE RIGHT PERSON?</p>
              </div>

              <div className="mt-6 flex justify-center">
                <img
                  src="https://cdn.anytimeastro.com/anytimeastro/web/content/images/ads/indian-bride-ads.png"
                  alt="Wedding couple"
                  className="rounded-lg w-[400px] max-w-sm"
                />
              </div>

              <div className="mt-6 flex justify-center">
                <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
                  Consult Now
                </button>
              </div>
            </div>

            {/* Decorative moon shapes */}
            <div className="absolute top-4 right-4 text-yellow-200 text-2xl">
              🌙
            </div>
            <div className="absolute bottom-4 left-4 text-yellow-200 text-2xl">
              🌙
            </div>
          </div>
        </div>
      </div>
      <VedicAstrologersSection />
    </div>
  );
};

export default Panchang;
