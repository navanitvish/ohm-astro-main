import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

const RahuKalam = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const weeklyTimings = [
    {
      day: "Monday",
      rahuKaal: "07:30-09:00",
      yamagandam: "10:30-12:00",
      gulika: "13:30-15:00",
    },
    {
      day: "Tuesday",
      rahuKaal: "15:00-16:30",
      yamagandam: "09:00-10:30",
      gulika: "12:00-13:30",
    },
    {
      day: "Wednesday",
      rahuKaal: "12:00-13:30",
      yamagandam: "07:30-09:00",
      gulika: "15:00-16:30",
    },
    {
      day: "Thursday",
      rahuKaal: "13:27-14:44",
      yamagandam: "15:00-16:30",
      gulika: "09:00-10:30",
    },
    {
      day: "Friday",
      rahuKaal: "10:30-12:00",
      yamagandam: "13:30-15:00",
      gulika: "07:30-09:00",
    },
    {
      day: "Saturday",
      rahuKaal: "09:00-10:30",
      yamagandam: "12:00-13:30",
      gulika: "15:00-16:30",
    },
    {
      day: "Sunday",
      rahuKaal: "16:30-18:00",
      yamagandam: "15:00-16:30",
      gulika: "13:30-15:00",
    },
  ];

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
      weekday: "long",
    });
  };

  const handlePrevDay = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setDate(prev.getDate() - 1);
      return newDate;
    });
  };

  const handleNextDay = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setDate(prev.getDate() + 1);
      return newDate;
    });
  };

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* navbar */}
      <nav className="bg-red-500 text-white p-4">
        <div className="container mx-auto">
          <div className="flex items-center text-sm">
            <a href="/" className="hover:underline">
              Home
            </a>
            <span className="mx-2">›</span>
            <a href="/vrat-and-upvaas" className="hover:underline">
              Vrat and Upvaas
            </a>
            <span className="mx-2">›</span>
            <span>Amavasya Dates</span>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-2xl font-bold">Amavasya Dates</h1>
            <p className="text-gray-600">
              Amavasya Dates 2024 | New Delhi, NCT, India
            </p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <input
              type="text"
              value="2024"
              className="border rounded px-3 py-1"
              readOnly
            />
            <input
              type="text"
              value="New Delhi, NCT, India"
              className="border rounded px-3 py-1"
              readOnly
            />
          </div>
        </div>
      </header>
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-4">
          RAHU KALAM/RAHU TIMINGS FOR NEW DELHI
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Beginning any important work? Check today's Rahu Kaal timings in your
          city and avoid this unfavorable period for any significant work.
        </p>

        <div className="bg-pink-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-center mb-4">
            What are Rahu Kaal Timings Today In New Delhi?
          </h2>
          <p className="text-center text-gray-600 mb-6">
            {formatDate(currentDate)}
          </p>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <p className="font-semibold">Rahu Kaal Time</p>
              <p className="text-pink-500">13:27 to 14:44</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">Duration</p>
              <p>01 Hr 16 Minutes</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">Current time</p>
              <p className="text-pink-500">{currentTime}</p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4">
            <button
              onClick={handlePrevDay}
              className="flex items-center px-4 py-2 border rounded-md hover:bg-gray-50"
            >
              <ChevronLeft className="w-4 h-4 mr-1" /> Prev Day
            </button>

            <button className="px-4 py-2 border rounded-md hover:bg-gray-50 flex items-center">
              <Calendar className="w-4 h-4 mr-1" /> Calendar
            </button>

            <button className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600">
              TODAY
            </button>

            <button
              onClick={handleNextDay}
              className="flex items-center px-4 py-2 border rounded-md hover:bg-gray-50"
            >
              Next Day <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

        <p className="text-gray-600 mb-8 text-center">
          Astrologically, Rahu Kaal is considered a highly inauspicious period
          during the day. It is always advised to check Shubh Muhurat or Nalla
          Neram as well as Rahu Kaal or Rahu Kalam before deciding the time
          period and date of beginning any auspicious work.
        </p>

        <div className="bg-pink-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-center text-pink-500 mb-4">
            Rahu Kaal Timings For The Week
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left">Day</th>
                  <th className="py-2 text-left">Rahu Kaal</th>
                  <th className="py-2 text-left">Yamagandam</th>
                  <th className="py-2 text-left">Gulika</th>
                </tr>
              </thead>
              <tbody>
                {weeklyTimings.map((timing) => (
                  <tr key={timing.day} className="border-b">
                    <td className="py-2">{timing.day}</td>
                    <td className="py-2">{timing.rahuKaal}</td>
                    <td className="py-2">{timing.yamagandam}</td>
                    <td className="py-2">{timing.gulika}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RahuKalam;
