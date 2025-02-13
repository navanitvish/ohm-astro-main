// App.jsx
import React, { useState } from "react";

const GowriPanchangam = () => {
  const [selectedDay, setSelectedDay] = useState("Today");

  const dayHora = [
    { time: "07:02 - 07:54", planet: "Jupiter" },
    { time: "07:54 - 08:45", planet: "Mars" },
    { time: "08:45 - 09:36", planet: "Sun" },
    { time: "09:36 - 10:28", planet: "Venus" },
    { time: "10:28 - 11:19", planet: "Mercury" },
    { time: "11:19 - 12:10", planet: "Moon" },
    { time: "12:10 - 13:02", planet: "Saturn" },
    { time: "13:02 - 13:53", planet: "Jupiter" },
    { time: "13:53 - 14:44", planet: "Mars" },
    { time: "14:44 - 15:36", planet: "Sun" },
    { time: "15:36 - 16:27", planet: "Venus" },
    { time: "16:27 - 17:18", planet: "Mercury" },
  ];

  const nightHora = [
    { time: "17:18 - 18:27", planet: "Moon" },
    { time: "18:27 - 19:36", planet: "Saturn" },
    { time: "19:36 - 20:45", planet: "Jupiter" },
    { time: "20:45 - 21:53", planet: "Mars" },
    { time: "21:53 - 23:02", planet: "Sun" },
    { time: "23:02 - 00:11", planet: "Venus" },
    { time: "00:11 - 01:20", planet: "Mercury" },
    { time: "01:20 - 02:28", planet: "Moon" },
    { time: "02:28 - 03:37", planet: "Saturn" },
    { time: "03:37 - 04:46", planet: "Jupiter" },
    { time: "04:46 - 05:54", planet: "Mars" },
    { time: "05:54 - 07:03", planet: "Sun" },
  ];

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
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-red-500 text-white text-center py-4">
            <h1 className="text-2xl font-bold">Gowri Panchangam</h1>
            <p className="mt-1">Know the auspicious hours of the day</p>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center">
              <button
                onClick={() => setSelectedDay("Today")}
                className={`px-4 py-2 rounded ${
                  selectedDay === "Today"
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Today
              </button>
              <button
                onClick={() => setSelectedDay("Tomorrow")}
                className={`px-4 py-2 rounded ${
                  selectedDay === "Tomorrow"
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Tomorrow
              </button>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-bold text-center">{`5th December 2024 - ${selectedDay}`}</h2>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-700">
                    Day Hora
                  </h3>
                  <ul className="space-y-2">
                    {dayHora.map((hora, index) => (
                      <li
                        key={index}
                        className="flex justify-between bg-gray-100 px-4 py-2 rounded shadow"
                      >
                        <span>{hora.time}</span>
                        <span className="font-semibold">{hora.planet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-700">
                    Night Hora
                  </h3>
                  <ul className="space-y-2">
                    {nightHora.map((hora, index) => (
                      <li
                        key={index}
                        className="flex justify-between bg-gray-100 px-4 py-2 rounded shadow"
                      >
                        <span>{hora.time}</span>
                        <span className="font-semibold">{hora.planet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button className="bg-yellow-500 text-white px-6 py-2 rounded-full shadow">
                Ask an Astrologer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GowriPanchangam;
