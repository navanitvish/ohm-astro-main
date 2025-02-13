import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const JanamKundaliForm = () => {
  const [showBirthTime, setShowBirthTime] = useState(true);

  const contentData = {
    whyKundali: {
      title: "WHY SHOULD YOU GET YOUR JANAM KUNDALI?",
      description:
        "A Janam Kundali or Birth Chart is simply a way to get clarity about your future to make better decisions and choices in life. It is a blueprint of the position of the planets and the stars in the Universe at the time of your birth on the basis of which the predictions about your future are made. There are many ways in which your Janam Kundali by date of birth and time can help you in your life.",
      benefits: [
        "Make better professional decisions and career choices.",
        "Gain better clarity about your personality, strengths and weaknesses.",
        "Know the favorable and unfavorable time periods of your life.",
        "Know how to make better financial choices and attract prosperity in life,",
        "Choose the right partner for marriage with Kundali Matching.",
      ],
    },
    software: {
      title: "FREE ONLINE KUNDLI SOFTWARE",
      description:
        "Janam Kundli is a blueprint of an individual's life that can help them in analyzing various aspects of their lives. This is the reason that Anytime Astro has created a free Kundali software that provides accurate predictions of an individual's birth chart.",
      additionalInfo:
        "With the help of Anytime Astro's free online Kundli software, one can get extensive and accurate readings of their Janam Kundali. This software is recognized worldwide. A mobile app will prove very useful if you plan to use the software frequently. There are a few more wonderful features available in this Astrology and Kundli-making app for Android and iOS devices.It is possible to create Kundli both in Hindi and English, without compromising on the accuracy and precision.",
    },
    createKundali: {
      title: "CREATE ONLINE JANAM KUNDALI",
      description:
        "An online Janam Kundli is only accurate when you have exact information about your date of birth and time of birth. A lot of people make the mistake of entering the incorrect birth time, which results in an incorrect Kundali and predictions that are totally irrelevant.",
    },
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const years = Array.from({ length: 100 }, (_, i) => 2024 - i);
  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 60 }, (_, i) =>
    i.toString().padStart(2, "0")
  );

  const ContentSection = ({ title, description, benefits, additionalInfo }) => (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
        {title}
      </h2>
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-700 mb-4">{description}</p>
        {benefits && (
          <ul className="space-y-2 mb-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="h-2 w-2 mt-2 mr-2 bg-gray-500 rounded-full"></span>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        )}
        {additionalInfo && <p className="text-gray-700">{additionalInfo}</p>}
      </div>
    </div>
  );

  const housesData = {
    title: "HOUSES IN KUNDLI AND THEIR SIGNIFICANCE",
    description:
      "A birth chart or a Kundli is divided into 12 houses and each house is linked with different planets and Zodiac signs. Every House represents different aspects of life such as career, money, relationships, etc.",
    houses: [
      {
        house: "1st House",
        rulingSign: "Aries",
        significance:
          "Appearance, Personality, Ego, Temperament, New Beginnings",
      },
      {
        house: "2nd House",
        rulingSign: "Taurus",
        significance: "Inheritance, Finance, Eating Habits",
      },
      {
        house: "3rd House",
        rulingSign: "Gemini",
        significance: "Communication, Thinking, Courage, Younger Siblings",
      },
      {
        house: "4th House",
        rulingSign: "Cancer",
        significance:
          "Parents, Mother, Home, Childhood, Luxuries, Material Things",
      },
      {
        house: "5th House",
        rulingSign: "Leo",
        significance:
          "Education, Self-Expression, Karma of Past life, Children",
      },
      {
        house: "6th House",
        rulingSign: "Virgo",
        significance:
          "Diet, Health, Fitness, Hygiene, Debt, Enemy, Social Service",
      },
      {
        house: "7th House",
        rulingSign: "Libra",
        significance: "Partnerships, Business deals, Marriage, Life Partner",
      },
      {
        house: "8th House",
        rulingSign: "Scorpio",
        significance: "Death and Reincarnation",
      },
      {
        house: "9th House",
        rulingSign: "Sagittarius",
        significance: "Denotes higher mind, expansion of luck and horizons",
      },
      {
        house: "10th House",
        rulingSign: "Capricorn",
        significance:
          "Represents father and his influence on your childhood and profession",
      },
      {
        house: "11th House",
        rulingSign: "Aquarius",
        significance:
          "Roles taken during several stages of life are denoted by this house",
      },
      {
        house: "12th House",
        rulingSign: "Pisces",
        significance:
          "Represents spiritual journey, enlightenment, and liberation",
      },
    ],
  };

  const HousesTable = () => (
    <div className="mb-12 overflow-x-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
        {housesData.title}
      </h2>
      <p className="text-gray-700 mb-6 text-center max-w-4xl mx-auto">
        {housesData.description}
      </p>

      <div className="w-full shadow-sm overflow-hidden rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-pink-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-red-500 uppercase tracking-wider">
                House
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-red-500 uppercase tracking-wider">
                Ruling Sign
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-red-500 uppercase tracking-wider">
                Significance
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {housesData.houses.map((house, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-pink-50"}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {house.house}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {house.rulingSign}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {house.significance}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Original Form Section */}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          GET FUTURE PREDICTIONS WITH FREE{" "}
          <span className="text-red-500">ONLINE JANAM KUNDALI</span>
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          The free online Janam Kundali at Anytime Astro is prepared after
          consulting with experienced Astrologers and is absolutely accurate &
          authentic. Having doubts in life? Confused about your future? Simply
          fill in your details and get the free online Kundali that will tell
          you everything about your personality, future & all the other
          important events in your life.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 bg-pink-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-red-500 mb-6 text-center">
            ENTER DETAILS
          </h2>

          <form className="space-y-6">
            {/* Form fields remain the same as in previous version */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div>
                <label className="block mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              {/* Place of Birth Input */}
              <div>
                <label className="block mb-2">
                  Place of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="New Delhi, India"
                  className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              {/* Birth Date Select Group */}
              <div>
                <label className="block mb-2">
                  Birth Date <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <select className="px-2 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-pink-500">
                    {months.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <select className="px-2 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-pink-500">
                    {days.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                  <select className="px-2 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-pink-500">
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Birth Time Select Group */}
              <div>
                <label className="block mb-2">
                  Birth Time <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <select className="px-2 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-pink-500">
                    {hours.map((hour) => (
                      <option key={hour} value={hour}>
                        {hour}
                      </option>
                    ))}
                  </select>
                  <select className="px-2 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-pink-500">
                    {minutes.map((minute) => (
                      <option key={minute} value={minute}>
                        {minute}
                      </option>
                    ))}
                  </select>
                  <select className="px-2 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-pink-500">
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
                <div className="mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-pink-500"
                      onChange={() => setShowBirthTime(!showBirthTime)}
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      Don't Know Birth Time
                    </span>
                  </label>
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              {/* Gender Select */}
              <div>
                <label className="block mb-2">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-pink-500">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-3 px-6 rounded-full 
                       transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              Show Kundali
            </button>
          </form>
        </div>

        <div className="md:w-72 bg-pink-50 rounded-lg p-6 h-fit">
          <div className="text-center">
            <p className="text-lg text-pink-400 mb-4">
              Please sign in to check your saved profiles!
            </p>
            <button
              className="px-8 py-2 border-2 border-pink-400 text-pink-400 rounded-full 
                           hover:bg-pink-400 hover:text-white transition duration-300"
            >
              Sign In
            </button>
          </div>
        </div>

       
      </div>

       {/* Content Sections */}
       <ContentSection {...contentData.whyKundali} />
        <ContentSection {...contentData.software} />
        <ContentSection {...contentData.createKundali} />

        <HousesTable />
    </div>
  );
};

export default JanamKundaliForm;
