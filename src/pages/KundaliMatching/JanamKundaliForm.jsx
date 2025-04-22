import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useSelector } from "react-redux";
import translations from "../../components/translations/translations";
const JanamKundaliForm = () => {
  const [showBirthTime, setShowBirthTime] = useState(true);
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  const contentData = {
    whyKundali: {
      title: t.Kundalititle,
      description: t.Kundalidescription,
      benefits: t.benefits
    },
    software: {
      title: t.softwaretitle,
      description: t.softwaredescription,
      additionalInfo: t.softwareadditionalInfo
    },
    createKundali: {
      title: t.createKundalititle,
      description:
        t.createKundalidescription
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
    title: t.housestitle,
    description: t.housesdescription,
    houses: t.houses
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
                {t.houseTitle}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-red-500 uppercase tracking-wider">
                {t.rulingSignTitle}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-red-500 uppercase tracking-wider">
                {t.significanceTitle}
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
    <div>
      {/* <header className="bg-red-500 text-white p-2 flex items-center justify-center">
        <div className="container mx-auto flex items-center text-sm">
          <a href="#" className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <span>Astrology</span>
          </a>
          <span className="mx-2">›</span>
          <span>Free Janam Kundali</span>
        </div>
      </header>

      {/* Title */}
      {/* <div className="container mx-auto py-6 px-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-medium text-gray-800 relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-red-500">
            Free Janam Kundali
          </h1>
          <div className="w-16 h-16">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="text-red-500">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
              <polygon points="50,20 60,40 85,40 65,55 75,80 50,65 25,80 35,55 15,40 40,40" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>  */}
      <div className="max-w-6xl mx-auto px-4 py-8">



        {/* Original Form Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            {t.getFuturePrediction}
            <span className="text-red-500">{t.onlineJanamKundalititle}</span>
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
           {t.onlineJanamKundalidescription}

          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 bg-pink-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-red-500 mb-6 text-center">
              {t.label_hi}
            </h2>

            <form className="space-y-6">
              {/* Form fields remain the same as in previous version */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div>
                  <label className="block mb-2">
                    {t.name_en} <span className="text-red-500">*</span>
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
                    {t.PlaceOfBirth} <span className="text-red-500">*</span>
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
                   {t.BirthDate} <span className="text-red-500">*</span>
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
                   {t.BirthTime} <span className="text-red-500">*</span>
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
                  <label className="block mb-2">{t.Email}</label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                {/* Gender Select */}
                <div>
                  <label className="block mb-2">
                    {t.gender} <span className="text-red-500">*</span>
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
              {t.show}
              </button>
            </form>
          </div>

          {/* <div className="md:w-72 bg-pink-50 rounded-lg p-6 h-fit">
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
          </div> */}


        </div>

        {/* Content Sections */}
        <ContentSection {...contentData.whyKundali} />
        <ContentSection {...contentData.software} />
        <ContentSection {...contentData.createKundali} />

        <HousesTable />
      </div>
    </div>
  );
};

export default JanamKundaliForm;
