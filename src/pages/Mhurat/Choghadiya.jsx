import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Sun,
  Moon,
  Baby,
  Car,
  Home,
  Briefcase,
  Smile,
} from "lucide-react";
import { useSelector } from "react-redux";
import translations from "../../components/translations/translations";
import { GiDiamondRing } from "react-icons/gi";

const Choghadiya = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  const [currentDate, setCurrentDate] = useState(new Date());
  const [choghadiyaData, setChoghadiyaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatDate = (date) => {
    return {
      day: date.getDate(),
      month: date.toLocaleString("default", { month: "long" }),
      year: date.getFullYear(),
      weekday: date.toLocaleString("default", { weekday: "long" }),
      apiFormat: date.toISOString().split('T')[0] // YYYY-MM-DD format for API
    };
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

  const handleTomorrow = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setCurrentDate(tomorrow);
  };

  useEffect(() => {
    const fetchChoghadiyaData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const formattedDate = formatDate(currentDate);
        
        const requestBody = {
          date: formattedDate.apiFormat,
          location: {
            latitude: 28.6139,
            longitude: 77.2090
          }
        };
        
        const response = await fetch("http://localhost:4500/api/free-services/shubh-muhurat/choghadiya", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(requestBody)
        });
        
        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }
        
        const data = await response.json();
        setChoghadiyaData(data);
      } catch (err) {
        console.error("Error fetching Choghadiya data:", err);
        setError(err.message || "Failed to fetch Choghadiya data");
      } finally {
        setLoading(false);
      }
    };
    
    fetchChoghadiyaData();
  }, [currentDate]);

  const getBackgroundColor = (type) => {
    switch (type) {
      case "yellow":
      case "inauspicious":
        return "bg-yellow-100";
      case "blue":
      case "good":
        return "bg-blue-100";
      case "green":
      case "auspicious":
      case "mostAuspicious":
        return "bg-green-100";
      case "red":
      case "veryInauspicious":
        return "bg-red-100";
      default:
        return "bg-white";
    }
  };

  const TimeBlock = ({ data,t }) => (
    <div className={`rounded-lg p-4 ${getBackgroundColor(data.type || data.muhurataType)} mb-2`}>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-600">{data.time || `${data.startTime} - ${data.endTime}`}</span>
        <span className="text-sm font-bold">{data.name || data.muhuratName}</span>
      </div>
      <p className="text-sm text-gray-600 mt-1">{data.activity || data.suitableActivities}</p>
      <div className="text-xs text-pink-500 mt-1">
        {t.talkToAstrologer} | Chat with Astrologer
      </div>
    </div>
  );

  const auspiciousActivities = [
    { icon: <GiDiamondRing className="w-8 h-8" />, title: "Shubh Muhurat For Marriage" },
    { icon: <Baby className="w-8 h-8" />, title: "Shubh Muhurat For Name Giving" },
    { icon: <Car className="w-8 h-8" />, title: "Shubh Muhurat For New Vehicle" },
    { icon: <Home className="w-8 h-8" />, title: "Shubh Muhurat For New Property" },
    { icon: <Briefcase className="w-8 h-8" />, title: "Shubh Muhurat For New Business" },
    { icon: <Smile className="w-8 h-8" />, title: "Shubh Muhurat For Mundan" },
  ];

  const content = {
    title: t.Choghadiyatitle_en,
    description:t.Choghadiyadescription_en,
    paragraphs: t.Choghadiya_en,
  };

  const formattedDate = formatDate(currentDate);

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
              Amavasya Dates {formattedDate.year} | New Delhi, NCT, India
            </p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <input
              type="text"
              value={formattedDate.year}
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
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-pink-50 p-6 text-center relative">
            <div className="absolute top-4 left-4">
              <button className="text-pink-500 hover:text-pink-600">
                <Calendar className="w-6 h-6" />
              </button>
            </div>
            <div className="space-x-4">
              <button
                onClick={handleToday}
                className="px-4 py-2 bg-white text-pink-500 rounded-full shadow-sm hover:shadow-md transition-shadow"
              >
                Today
              </button>
              <button
                onClick={handleTomorrow}
                className="px-4 py-2 bg-white text-pink-500 rounded-full shadow-sm hover:shadow-md transition-shadow"
              >
                Tomorrow
              </button>
            </div>

            <div className="mt-6 text-center">
              <h1 className="text-5xl font-bold text-pink-500">
                {formattedDate.day}
                <sup>{formattedDate.day === 1 ? "st" : formattedDate.day === 2 ? "nd" : formattedDate.day === 3 ? "rd" : "th"}</sup>
              </h1>
              <p className="text-gray-600">
                {formattedDate.month} {formattedDate.year}
              </p>
              <p className="text-gray-500">{formattedDate.weekday}</p>
            </div>

            <div className="mt-4">
              <p className="text-gray-700">
                Is it a good day to start your business?
              </p>
              <button className="mt-2 px-6 py-2 bg-yellow-400 text-gray-800 rounded-full hover:bg-yellow-500 transition-colors">
                Ask an Astrologer
              </button>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={handlePrevDay}
                className="flex items-center text-pink-500 hover:text-pink-600"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Prev Day
              </button>
              <button
                onClick={handleNextDay}
                className="flex items-center text-pink-500 hover:text-pink-600"
              >
                Next Day
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>

          {/* Content */}
          {loading ? (
            <div className="p-6 text-center">
              <p>Loading choghadiya data...</p>
            </div>
          ) : error ? (
            <div className="p-6 text-center text-red-500">
              <p>Error: {error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-2 px-4 py-2 bg-red-100 text-red-600 rounded hover:bg-red-200"
              >
                Retry
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6 p-6">
              {/* Day Section */}
              <div>
                <div className="flex items-center mb-4">
                  <Sun className="w-6 h-6 text-yellow-500 mr-2" />
                  <h2 className="text-lg font-semibold">Day Choghadiya</h2>
                </div>
                <div className="space-y-2">
                  {choghadiyaData?.daytime?.map((muhurat, index) => (
                    <TimeBlock key={`day-${index}`} data={muhurat} />
                  ))}
                </div>
              </div>

              {/* Night Section */}
              <div>
                <div className="flex items-center mb-4">
                  <Moon className="w-6 h-6 text-blue-500 mr-2" />
                  <h2 className="text-lg font-semibold">Night Choghadiya</h2>
                </div>
                <div className="space-y-2">
                  {choghadiyaData?.nighttime?.map((muhurat, index) => (
                    <TimeBlock key={`night-${index}`} data={muhurat} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Legend */}
          <div className="px-6 pb-6 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              Most Auspicious
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
              Good
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
              Inauspicious Time
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
              Very Inauspicious
            </div>
          </div>

          {/* Auspicious Activities Section */}
          <div className="bg-white rounded-xl shadow-lg mb-6 p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t.auspiciousTimeToday_title}
            </h2>
            <p className="text-gray-600 mb-6">
             {t.auspiciousTimeToday_dec}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {auspiciousActivities.map((activity, index) => (
                <div
                  key={index}
                  className="bg-pink-50 rounded-xl p-4 flex flex-col items-center text-center hover:bg-pink-100 transition-colors cursor-pointer"
                >
                  <div className="text-pink-500 mb-3">{activity.icon}</div>
                  <span className="text-sm text-gray-700">{activity.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-pink-50 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {content.title}
            </h2>
            {content.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-600 mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choghadiya;