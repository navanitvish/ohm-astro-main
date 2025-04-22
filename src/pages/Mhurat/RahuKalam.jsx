import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

const RahuKalam = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [muhuratData, setMuhuratData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

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

  // Format the date for display
  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
      weekday: "long",
    });
  };

  // Format the time from ISO to readable format
  const formatTime = (isoTime) => {
    if (!isoTime) return "";
    const date = new Date(isoTime);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  // Calculate duration between two times
  const calculateDuration = (startTime, endTime) => {
    if (!startTime || !endTime) return "";
    
    const start = new Date(startTime);
    const end = new Date(endTime);
    
    const diffMs = end - start;
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    
    return `${diffHrs.toString().padStart(2, '0')} Hr ${diffMins.toString().padStart(2, '0')} Minutes`;
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

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  }

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Format date for API request
        const formattedDate = currentDate.toISOString().split('T')[0];
        
        // Make API request
        const response = await fetch("http://localhost:4500/api/free-services/shubh-muhurat/rahu-kaal", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            location: {
              latitude: 28.6139,
              longitude: 77.2090
            },
            date: formattedDate
          }),
        });
        
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        
        const data = await response.json();
        setMuhuratData(data.rahuKaal.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching muhurat data:", err);
        setError("Failed to load muhurat data. Please try again later.");
        setLoading(false);
      }
    };
    
    fetchData();
  }, [currentDate]);

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Find Rahu Kaal data
  const getRahuKaalInfo = () => {
    if (!muhuratData || !muhuratData.muhurat) return null;
    
    const rahuInfo = muhuratData.muhurat.find(item => item.name === "Rahu");
    if (!rahuInfo || !rahuInfo.period || rahuInfo.period.length === 0) return null;
    
    return {
      start: rahuInfo.period[0].start,
      end: rahuInfo.period[0].end,
      duration: calculateDuration(rahuInfo.period[0].start, rahuInfo.period[0].end)
    };
  };

  const rahuKaalInfo = getRahuKaalInfo();

  // Extract other muhurat data
  const getUpdatedWeeklyTimings = () => {
    if (!muhuratData || !muhuratData.muhurat) return weeklyTimings;
    
    // Get day of the week
    const dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    
    // Create a copy of the weekly timings
    const updatedTimings = [...weeklyTimings];
    
    // Find the entry for the current day
    const currentDayIndex = updatedTimings.findIndex(
      (timing) => timing.day === dayOfWeek
    );
    
    if (currentDayIndex !== -1) {
      // Find timings from API data
      const rahuInfo = muhuratData.muhurat.find(item => item.name === "Rahu");
      const yamaInfo = muhuratData.muhurat.find(item => item.name === "Yamaganda");
      const gulikaInfo = muhuratData.muhurat.find(item => item.name === "Gulika");
      
      // Update the entry
      if (rahuInfo && rahuInfo.period && rahuInfo.period.length > 0) {
        updatedTimings[currentDayIndex].rahuKaal = 
          `${formatTime(rahuInfo.period[0].start)}-${formatTime(rahuInfo.period[0].end)}`;
      }
      
      if (yamaInfo && yamaInfo.period && yamaInfo.period.length > 0) {
        updatedTimings[currentDayIndex].yamagandam = 
          `${formatTime(yamaInfo.period[0].start)}-${formatTime(yamaInfo.period[0].end)}`;
      }
      
      if (gulikaInfo && gulikaInfo.period && gulikaInfo.period.length > 0) {
        updatedTimings[currentDayIndex].gulika = 
          `${formatTime(gulikaInfo.period[0].start)}-${formatTime(gulikaInfo.period[0].end)}`;
      }
    }
    
    return updatedTimings;
  };

  const updatedWeeklyTimings = getUpdatedWeeklyTimings();

  return (
    <div>
      {/* navbar */}
      {/* <nav className="bg-red-500 text-white p-4">
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
      </nav> */}

      {/* Header Section */}
      {/* <header className="container mx-auto px-4 py-6">
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
      </header> */}
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-4">
          RAHU KALAM/RAHU TIMINGS FOR NEW DELHI
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Beginning any important work? Check today's Rahu Kaal timings in your
          city and avoid this unfavorable period for any significant work.
        </p>

        {loading ? (
          <div className="text-center py-8">Loading rahu kaal data...</div>
        ) : error ? (
          <div className="text-center py-8 text-red-500">{error}</div>
        ) : (
          <>
            <div className="bg-pink-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-center mb-4">
                What are Rahu Kaal Timings Today In New Delhi?
              </h2>
              <p className="text-center text-gray-600 mb-6">
                {formatDate(currentDate)}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="font-semibold">Rahu Kaal Time</p>
                  <p className="text-pink-500">
                    {rahuKaalInfo 
                      ? `${formatTime(rahuKaalInfo.start)} to ${formatTime(rahuKaalInfo.end)}` 
                      : "Not available"}
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-semibold">Duration</p>
                  <p>{rahuKaalInfo ? rahuKaalInfo.duration : "Not available"}</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold">Current time</p>
                  <p className="text-pink-500">{currentTime}</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-4">
                <button
                  onClick={handlePrevDay}
                  className="flex items-center px-4 py-2 border rounded-md hover:bg-gray-50"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" /> Prev Day
                </button>

                <button className="px-4 py-2 border rounded-md hover:bg-gray-50 flex items-center">
                  <Calendar className="w-4 h-4 mr-1" /> Calendar
                </button>

                <button 
                  onClick={handleToday}
                  className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600"
                >
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
                    {updatedWeeklyTimings.map((timing) => (
                      <tr 
                        key={timing.day} 
                        className={`border-b ${
                          timing.day === currentDate.toLocaleDateString('en-US', { weekday: 'long' })
                            ? "bg-pink-100"
                            : ""
                        }`}
                      >
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
            
            {/* Additional Inauspicious Periods Section */}
            {muhuratData && muhuratData.muhurat && (
              <div className="bg-pink-50 rounded-lg p-6 mt-8">
                <h3 className="text-xl font-bold text-center text-pink-500 mb-4">
                  Other Inauspicious Periods Today
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="py-2 text-left">Period Name</th>
                        <th className="py-2 text-left">Timing</th>
                      </tr>
                    </thead>
                    <tbody>
                      {muhuratData.muhurat
                        .filter(item => item.name !== "Rahu" && item.name !== "Yamaganda" && item.name !== "Gulika")
                        .map((item, index) => (
                          <React.Fragment key={index}>
                            {item.period.map((period, periodIndex) => (
                              <tr key={`${index}-${periodIndex}`} className="border-b">
                                <td className="py-2">{item.name}</td>
                                <td className="py-2">
                                  {formatTime(period.start)} - {formatTime(period.end)}
                                </td>
                              </tr>
                            ))}
                          </React.Fragment>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default RahuKalam;