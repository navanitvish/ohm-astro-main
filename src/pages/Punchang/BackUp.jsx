import React, { useState } from "react";
import { Calendar, MapPin, Sun, X } from "lucide-react";
import { Facebook, Twitter, Linkedin, MoreHorizontal } from "lucide-react";
import AstorolagerChat from "../AstorolagerChat";
import AstrologicalCharts from "../AstrologicalCharts";
import { planetaryData } from "../../components/content/astordata";
import ConsultWithTopVedicAstrologers from "../ConsultWithTopVedicAstrologers";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import translations from "../../components/translations/translations";
import { useQuery } from "@tanstack/react-query";
import { fetchPanchang } from "../../api/apiCalls";
import LocationAutocomplete from "../../components/Autocomplete";

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
        <Link to="/Panchangs" className="hover:underline">
          {t.Panchang}
        </Link>
        <span>›</span>
        <span>{t.todayPanchang}</span>
      </div>
    </div>
  );
};

const CalendarModal = ({ isOpen, onClose, onSelectDate }) => {
  if (!isOpen) return null;

  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  const getDaysInMonth = (month, year) =>
    new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
  const monthNames = [
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

  const renderCalendarDays = () => {
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <button
          key={day}
          onClick={() => {
            const date = new Date(currentYear, currentMonth, day);
            const formattedDate = date.toLocaleDateString("en-GB");
            onSelectDate(formattedDate);
            onClose();
          }}
          className="h-10 w-10 rounded-full hover:bg-rose-100 flex items-center justify-center"
        >
          {day}
        </button>
      );
    }
    return days;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Select Date</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => setCurrentMonth((prev) => prev - 1)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            ←
          </button>
          <div className="font-semibold">
            {monthNames[currentMonth]} {currentYear}
          </div>
          <button
            onClick={() => setCurrentMonth((prev) => prev + 1)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            →
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center text-sm font-medium">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">{renderCalendarDays()}</div>
      </div>
    </div>
  );
};

const PanchangPage = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  const [selectedDate, setSelectedDate] = useState("19/11/2024");
  const [selectedLocation, setSelectedLocation] = useState(
    "New Delhi, NCT, India"
  );
  const [location, setLocation] = useState({
    address: "New Delhi, NCT, India",
    latitude: 28.6139,
    longitude: 77.209,
  });
  const [activeTab, setActiveTab] = useState("today");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const months = [
    { id: "Jan", label: "Jan" },
    { id: "Feb", label: "Feb" },
    { id: "Mar", label: "Mar" },
    { id: "Apr", label: "Apr" },
    { id: "May", label: "May" },
    { id: "Jun", label: "Jun" },
    { id: "Jul", label: "Jul" },
    { id: "Aug", label: "Aug" },
    { id: "Sep", label: "Sep" },
    { id: "Oct", label: "Oct" },
    { id: "Nov", label: "Nov", active: true },
    { id: "Dec", label: "Dec" },
  ];

  const [showDropdown, setShowDropdown] = useState(false);

  const socialIcons = [
    { name: "facebook", icon: <Facebook className="w-4 h-4" /> },
    { name: "twitter", icon: <Twitter className="w-4 h-4" /> },
    { name: "linkedin", icon: <Linkedin className="w-4 h-4" /> },
    { name: "more", icon: <MoreHorizontal className="w-4 h-4" /> },
  ];

  const dropdownItems = [
    { name: "Choghadiya", href: "#choghadiya" },
    { name: "Gowri Panchangam", href: "#gowri-panchangam" },
    { name: "Shubha Hora", href: "#shubha-hora" },
    { name: "Rahu Kaal", href: "#rahu-kaal" },
  ];

  const panchangData = {
    tithi: "Chaturthi upto 05:34 PM",
    nakshatra: "Ardra upto 02:58 PM",
    Yoga: "Vishakha upto 06:34 PM",
    "First Karana": "Vishakha upto 06:34 PM",
    "Second Karana": "Vishakha upto 06:34 PM",
    Vaar: "tuesday",
  };
  const AdditionalInfo = {
    sunrise: "06:51 AM",
    sunset: "05:21 PM",
    Moonrise: "06:51 AM",
    Moonset: "05:21 PM",
    "Shaka Samvat": "1946 Krodhi",
    "Amanta Month": "Kartika",
    Purnimanta: "Margashirsha",
    "Sun Sign": "Vrischika",
    "Moon Sign": "Mithuna",
    Paksha: "Krishan",
  };
  const InauspiciousTime = {
    "Gulikai Kalam": "12:06 PM − 01:25 PM",
    Yamaganda: "09:28 AM − 10:47 AM",
    "Dur Muhurtam": "06:51 AM",
    "Varjyam Kalam": "05:21 PM -05:21 PM 07:49 PM - 05:49 PM",
    "Shaka Samvat": "None",
    "Rahu Kalam": "02:44 PM − 04:02 PM",
  };

  const Auspicioustime = {
    Abhijit: "12:06 PM − 01:25 PM",
    "Amrit Kalam": "None",
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["panchang"],
    queryFn: fetchPanchang,
  });

  console.log("data is panchnage", data);
  // if (isLoading) return <p>Loading Panchang data...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Breadcrumb />
      <div className="bg-red-100 p-6">
        <div className="flex justify-end gap-2 mt-6 relative ">
          {socialIcons.map((item) => (
            <button
              key={item.name}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
              onClick={() => {
                if (item.name === "more") {
                  setShowDropdown(!showDropdown);
                }
              }}
            >
              {item.icon}
              <span className="sr-only">{item.name}</span>
            </button>
          ))}

          {showDropdown && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-10">
              {dropdownItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-pink-600 text-transparent bg-clip-text">
            {t.todayPanchang}
          </h1>
          <p className="text-gray-600">
            Aaj ka Panchang | {selectedLocation}, {selectedDate}
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <div className="relative flex-1">
            <input
              type="text"
              value={selectedDate}
              className="w-full p-2 border rounded-md pl-10"
              readOnly
              onClick={() => setIsCalendarOpen(true)}
            />
            <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <LocationAutocomplete
            defaultValue={location.address}
            onLocationSelect={(newLocation) => {
              setLocation(newLocation);
              // You can use the coordinates to fetch location-specific panchang data
              console.log("Selected location:", newLocation);
            }}
          />
        </div>

        {/* Calendar Modal */}
        <CalendarModal
          isOpen={isCalendarOpen}
          onClose={() => setIsCalendarOpen(false)}
          onSelectDate={handleDateSelect}
        />
      </div>
      <div className="max-w-6xl mx-auto p-4">
        {/* Date and Location Selector */}

        {/* Rest of the code remains the same... */}
        {/* Title Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold">
            {t.todayPanchang}{" "}
            <span className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text">
              (AAJ KA PANCHANG)
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-4xl mx-auto">
            Panchang is the Hindu calendar followed by Vedic astrology, which
            provides complete detail on each day's Tithis and auspicious and
            inauspicious timings. Today's Panchang on Anytime Astro is based on
            Vijay Vishwa Panchang, which is the rarest of Panchang, used by
            Astrologers for hundreds of years. Through Daily Panchang, you can
            get all the information about the time, date, and day to determine
            the Muhurat for everything. Astrologers suggest people should follow
            the Day Panchang while doing new work or performing any auspicious
            event.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-6 justify-center">
          <button
            className={`px-4 py-2 rounded-full border flex items-center gap-2 ${
              activeTab === "calendar" ? "bg-blue-50 text-blue-600" : ""
            }`}
            onClick={() => {
              setActiveTab("calendar");
              setIsCalendarOpen(true);
            }}
          >
            <Calendar className="h-4 w-4" />
            {t.Calendar}
          </button>
          <button
            className={`px-4 py-2 rounded-full border flex items-center gap-2 ${
              activeTab === "today" ? "bg-rose-50 text-rose-600" : ""
            }`}
            onClick={() => setActiveTab("today")}
          >
            <Sun className="h-4 w-4" />
            {t.Today}
          </button>
          <button
            className={`px-4 py-2 rounded-full border flex items-center gap-2 ${
              activeTab === "tomorrow" ? "bg-blue-50 text-blue-600" : ""
            }`}
            onClick={() => setActiveTab("tomorrow")}
          >
            <Sun className="h-4 w-4" />
            {t.Tomorrow}
          </button>
        </div>
        {/* Panchang Information */}
        <div className="bg-red-50 shadow-2xl border-red-500 border border-s-red-500">
          <div className="grid md:grid-cols-2 gap-6 p-4 ">
            <div className="bg-white rounded-lg shadow-md ">
              <div className="p-6">
                <h3 className="text-xl font-bold text-center bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text mb-4">
                  {t.Panchang}
                </h3>
                <div className="space-y-4">
                  {Object.entries(panchangData).map(([key, value]) => (
                    <div
                      className="flex justify-between items-center border-b"
                      key={key}
                    >
                      <span className="font-medium">{key}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-bold text-center bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text mb-4">
                  {t.AdditionalInfo}
                </h3>
                <div className="space-y-4">
                  {Object.entries(AdditionalInfo).map(([key, value]) => (
                    <div
                      className="flex justify-between items-center border-b"
                      key={key}
                    >
                      <span className="font-medium">{key}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-bold text-center bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text mb-4">
                  {t.InauspiciousTime}
                </h3>
                <div className="space-y-4">
                  {Object.entries(InauspiciousTime).map(([key, value]) => (
                    <div
                      className="flex justify-between items-center border-b"
                      key={key}
                    >
                      <span className="font-medium">{key}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-bold text-center bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text mb-4">
                  {t.AuspiciousTime}
                </h3>
                <div className="space-y-4">
                  {Object.entries(Auspicioustime).map(([key, value]) => (
                    <div
                      className="flex justify-between items-center border-b"
                      key={key}
                    >
                      <span className="font-medium">{key}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <AstrologicalCharts />
          <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text mb-6">
              {t.PlanetaryPositionAtSunrise}
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border rounded-xl border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      Planet
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      C
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      R
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      Rashi
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      Longitude
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      Nakshatra
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      Pada
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {Object.entries(planetaryData).map(
                    ([planet, data], index) => (
                      <tr
                        key={planet}
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">
                          {planet}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          {data.c}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          {data.r}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          {data.rashi}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          {data.longitude}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          {data.nakshatra}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          {data.pada}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Social Share Icons */}
      </div>
      <ConsultWithTopVedicAstrologers />
    </div>
  );
};

export default PanchangPage;
