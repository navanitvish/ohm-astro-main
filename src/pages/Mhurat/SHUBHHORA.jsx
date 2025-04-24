import React, { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  Calendar,
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import VedicAstrologersSection from "../ConsultWithTopVedicAstrologers";

const ShubhHora = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [view, setView] = useState("today"); // 'today', 'tomorrow', 'custom'
  const [horaData, setHoraData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch hora data from API
  useEffect(() => {
    const fetchHoraData = async () => {
      setLoading(true);
      try {
        // Format date as YYYY-MM-DD
        const formattedDate = selectedDate.toISOString().split('T')[0];
        
        const response = await fetch("https://astrovani-6d54b00db2da.herokuapp.com/api/free-services/shubh-muhurat/hora-timing", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            location: {
              latitude: 28.6139,
              longitude: 77.2090,
            },
            date: formattedDate,
          }),
        });
        
        const data = await response.json();
        setHoraData(data);
      } catch (error) {
        console.error("Error fetching hora data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHoraData();
  }, [selectedDate]);

  // Process the hora data into day and night hours
  const processHoraData = () => {
    if (!horaData || !horaData.horaTiming || !horaData.horaTiming.data) {
      return { dayHours: [], nightHours: [] };
    }

    const allHoras = horaData.horaTiming.data.hora_timing;
    
    // Filter day and night hours
    const dayHours = allHoras.filter(hora => hora.is_day).map(hora => ({
      planet: hora.hora.name,
      time: formatTimeRange(hora.start, hora.end),
      type: hora.type,
      vedic_name: hora.hora.vedic_name
    }));

    const nightHours = allHoras.filter(hora => !hora.is_day).map(hora => ({
      planet: hora.hora.name,
      time: formatTimeRange(hora.start, hora.end),
      type: hora.type,
      vedic_name: hora.hora.vedic_name
    }));

    return { dayHours, nightHours };
  };

  // Format the time range for display
  const formatTimeRange = (start, end) => {
    const startTime = new Date(start);
    const endTime = new Date(end);
    
    const formatTime = (time) => {
      return time.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      });
    };
    
    return `${formatTime(startTime)} - ${formatTime(endTime)}`;
  };

  // Fallback to generating data if API fails
  const generateHoraTimings = (date) => {
    const day = date.getDay();
    // Planet order: Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn
    const planetOrder = [
      "Sun",
      "Moon",
      "Mars",
      "Mercury",
      "Jupiter",
      "Venus",
      "Saturn",
    ];
    const startIndex = day % 7; // Day of week determines starting planet

    const dayHours = [];
    const nightHours = [];

    // Generate 12 day hours
    for (let i = 0; i < 12; i++) {
      const planetIndex = (startIndex + i) % 7;
      dayHours.push({
        planet: planetOrder[planetIndex],
        time: getTimeSlot(i, true),
        type: getRandomType()
      });
    }

    // Generate 12 night hours
    for (let i = 0; i < 12; i++) {
      const planetIndex = (startIndex + 12 + i) % 7;
      nightHours.push({
        planet: planetOrder[planetIndex],
        time: getTimeSlot(i, false),
        type: getRandomType()
      });
    }

    return { dayHours, nightHours };
  };

  // Helper function for the fallback
  const getRandomType = () => {
    const types = ["Good", "Not Bad", "Neither Good Nor Bad", "Bad"];
    return types[Math.floor(Math.random() * types.length)];
  };

  // Generate time slots for fallback
  const getTimeSlot = (index, isDay) => {
    const baseHour = isDay ? 6 : 18; // Day starts at 6 AM, Night at 6 PM
    const startHour = baseHour + Math.floor(index);
    const endHour = baseHour + Math.floor(index + 1);

    const formatTime = (hour) => {
      const adjustedHour = hour >= 24 ? hour - 24 : hour;
      return `${adjustedHour % 12 === 0 ? 12 : adjustedHour % 12}:${String(
        Math.floor((index % 1) * 60)
      ).padStart(2, "0")} ${adjustedHour >= 12 ? "PM" : "AM"}`;
    };

    const startTime = formatTime(startHour);
    const endTime = formatTime(endHour);

    return `${startTime} - ${endTime}`;
  };

  // Calendar functions
  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const startOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const generateCalendarDays = () => {
    const days = [];
    const totalDays = daysInMonth(selectedDate);
    const firstDay = startOfMonth(selectedDate);

    // Add empty spaces for days before the first of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Add the days of the month
    for (let i = 1; i <= totalDays; i++) {
      days.push(i);
    }

    return days;
  };

  // Navigation functions
  const prevDay = () => {
    setSelectedDate(new Date(selectedDate.getTime() - 86400000));
    setView("custom");
  };

  const nextDay = () => {
    setSelectedDate(new Date(selectedDate.getTime() + 86400000));
    setView("custom");
  };

  const prevMonth = () => {
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1)
    );
  };

  const selectDate = (day) => {
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day)
    );
    setShowCalendar(false);
    setView("custom");
  };

  // Get hora data - use API data if available, otherwise fall back to generated data
  const { dayHours, nightHours } = horaData ? processHoraData() : generateHoraTimings(selectedDate);

  const content = {
    title: "HOW TO CHECK SHUBH MUHURAT WITH HORAI TIMINGS?",
    paragraphs: [
      "It is believed that if you carry out important tasks, start something new, or make crucial decisions in accordance with auspicious time or Shubh Muhurat, it can increase the chances of success.",
      "Traditionally, a Pandit or an Astrologer can give you clarity about the auspicious date and time for you as per your Birth Chart. However, some events such as traveling or moving to a new place do not require an analysis of the chart. In that scenario, you can refer to the Hora Chakra in the Indian Jyotish Shastra to calculate the auspicious Muhurat by yourself. With the help of Hora Chakra, you can estimate the auspicious and inauspicious timings as well as dates in order to make a decision of holding or commencing any important work.",
      "In a single day, there are 7 major Horas present namely Sun, Venus, Mercury, Moon, Saturn, Jupiter, and Mars Hora. In the Hora Chakra, the movements of these 7 Horas are recorded which can accurately determine the timings which are auspicious and inauspicious.",
    ],
    heading: "Each planetary Hora is favorable for:",
    horas: [
      {
        icon: "☀️",
        title: "Sun Hora",
        description:
          "Sun Hora is considered auspicious for applying for civil services, starting a new position at work, and performing politics, elections, and Government-related events.",
      },
      {
        icon: "🌙",
        title: "Moon Hora",
        description:
          "Moon Hora is considered favorable for performing tasks related to water, silver, and nature.",
      },
      {
        icon: "🔥",
        title: "Mars Hora",
        description:
          "Mars Hora is suitable for tasks related to the judicial system, administration, and defense forces. One can purchase a new property or join a new job in this Muhurat.",
      },
      {
        icon: "☿️",
        title: "Mercury Hora",
        description:
          "Mercury Hora is good for starting education, bank, and financial matters, and reading Mantras.",
      },
      {
        icon: "♃",
        title: "Jupiter Hora",
        description:
          "Jupiter Hora is auspicious for marriage, education, or shopping for clothes.",
      },
      {
        icon: "♀️",
        title: "Venus Hora",
        description:
          "Venus Hora is considered favorable for purchasing ornaments, traveling, or initiating tasks related to gold and silver.",
      },
      {
        icon: "♄",
        title: "Saturn Hora",
        description:
          "Saturn Hora is considered auspicious for initiating the construction of a home or workplace, purchasing things related to iron, or starting a business related to a factory.",
      },
    ],
  };

  const CalendarView = () => (
    <div className="absolute top-full mt-2 bg-white rounded-lg shadow-lg p-4 z-10">
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth} className="p-1">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="font-semibold">
          {selectedDate.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </span>
        <button onClick={nextMonth} className="p-1">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium text-gray-600 p-2"
          >
            {day}
          </div>
        ))}
        {generateCalendarDays().map((day, index) => (
          <button
            key={index}
            onClick={() => day && selectDate(day)}
            className={`
              p-2 text-center rounded-full
              ${day === selectedDate.getDate() ? "bg-red-500 text-white" : ""}
              ${day ? "hover:bg-red-100" : ""}
              ${!day ? "invisible" : ""}
            `}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );

  // Function to determine text color based on hora type
  const getHoraTypeColor = (type) => {
    switch (type) {
      case "Good":
        return "text-green-600 font-medium";
      case "Not Bad":
        return "text-blue-600";
      case "Neither Good Nor Bad":
        return "text-yellow-600";
      case "Bad":
        return "text-red-600 font-medium";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div>
      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            TODAY'S SHUBH <span className="text-red-500">HORA</span>
          </h1>
          <p className="text-gray-600">
            Know the auspicious hours of the day in your city through the
            ancient Hora Chakra
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <div className="relative">
            <button
              onClick={() => setShowCalendar(!showCalendar)}
              className="px-4 py-2 rounded-full border border-gray-300 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Calendar
            </button>
            {showCalendar && <CalendarView />}
          </div>
          <button
            onClick={() => {
              setSelectedDate(new Date());
              setView("today");
            }}
            className={`px-4 py-2 rounded-full ${
              view === "today"
                ? "bg-red-500 text-white"
                : "border border-gray-300"
            } flex items-center gap-2`}
          >
            <Sun className="w-4 h-4" />
            Today
          </button>
          <button
            onClick={() => {
              setSelectedDate(new Date(Date.now() + 86400000));
              setView("tomorrow");
            }}
            className={`px-4 py-2 rounded-full ${
              view === "tomorrow"
                ? "bg-red-500 text-white"
                : "border border-gray-300"
            } flex items-center gap-2`}
          >
            <Sun className="w-4 h-4" />
            Tomorrow
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1 bg-white rounded-lg shadow-lg p-6">
            <div className="text-center">
              <div className="text-6xl font-bold text-red-500 mb-2">
                {selectedDate.getDate()}
                <sup>
                  {
                    ["th", "st", "nd", "rd"][
                      selectedDate.getDate() % 10 > 3 || (selectedDate.getDate() > 10 && selectedDate.getDate() < 14)
                        ? 0
                        : selectedDate.getDate() % 10
                    ]
                  }
                </sup>
              </div>
              <div className="text-xl text-gray-600">
                {selectedDate.toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </div>
              <div className="text-gray-500 mb-6">
                {selectedDate.toLocaleDateString("en-US", { weekday: "long" })}{" "}
                (
                {selectedDate.toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
                )
              </div>
              <div className="text-gray-700 mb-4">
                Is it a good day to start your new business?
              </div>
              <button className="bg-yellow-400 px-6 py-2 rounded-full font-medium mb-6">
                Ask an Astrologer
              </button>
              <div className="flex justify-between">
                <button
                  onClick={prevDay}
                  className="flex items-center text-gray-600 hover:text-gray-800"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" /> Prev Day
                </button>
                <button
                  onClick={nextDay}
                  className="flex items-center text-gray-600 hover:text-gray-800"
                >
                  Next Day <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            {loading ? (
              <div className="h-full flex items-center justify-center">
                <p className="text-gray-600">Loading hora data...</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-pink-50 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Sun className="w-6 h-6 text-yellow-500" />
                    <h2 className="text-xl font-semibold">Day Hora</h2>
                  </div>
                  <div className="bg-red-500 text-white px-4 py-2 mb-4 flex justify-between">
                    <span>Muhurat Time</span>
                    <span>Planet (Type)</span>
                  </div>
                  <div className="space-y-3">
                    {dayHours.map((hora, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <span className="text-gray-700">{hora.time}</span>
                        <div className="flex items-center gap-2">
                          <span className={getHoraTypeColor(hora.type)}>
                            {hora.planet} 
                            {hora.vedic_name && ` (${hora.vedic_name})`}
                          </span>
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                            {hora.type}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-pink-50 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Moon className="w-6 h-6 text-blue-500" />
                    <h2 className="text-xl font-semibold">Night Hora</h2>
                  </div>
                  <div className="bg-red-500 text-white px-4 py-2 mb-4 flex justify-between">
                    <span>Muhurat Time</span>
                    <span>Planet (Type)</span>
                  </div>
                  <div className="space-y-3">
                    {nightHours.map((hora, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <span className="text-gray-700">{hora.time}</span>
                        <div className="flex items-center gap-2">
                          <span className={getHoraTypeColor(hora.type)}>
                            {hora.planet}
                            {hora.vedic_name && ` (${hora.vedic_name})`}
                          </span>
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                            {hora.type}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <VedicAstrologersSection />

        <div className="p-6 md:p-12 lg:p-20 bg-white">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">
            {content.title}
          </h1>
          {content.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-700 mb-4">
              {paragraph}
            </p>
          ))}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-8 mb-4">
            {content.heading}
          </h2>
          <div className="space-y-4">
            {content.horas.map((hora, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-2xl">{hora.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold">{hora.title}</h3>
                  <p className="text-gray-600">{hora.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShubhHora;