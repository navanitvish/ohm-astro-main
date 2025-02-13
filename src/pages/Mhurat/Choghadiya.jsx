import { useState } from "react";
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
import { GiDiamondRing } from "react-icons/gi";

const Choghadiya = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 11, 8)); // December 8, 2024

  const formatDate = (date) => {
    return {
      day: date.getDate(),
      month: date.toLocaleString("default", { month: "long" }),
      year: date.getFullYear(),
      weekday: date.toLocaleString("default", { weekday: "long" }),
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
    setCurrentDate(new Date(2024, 11, 8)); // Reset to December 8, 2024
  };

  const handleTomorrow = () => {
    setCurrentDate(new Date(2024, 11, 9)); // Set to December 9, 2024
  };

  // Generate muhurat times based on current date
  const generateMuhurats = (isDay) => {
    // This is a simplified version - in a real app, you'd likely fetch this data
    // based on the actual date from an API or calculate it based on astronomical data
    if (isDay) {
      return [
        {
          time: "07:05 - 08:21",
          name: "Udveg",
          activity: "Government related work",
          type: "yellow",
        },
        {
          time: "08:21 - 09:38",
          name: "Char",
          activity: "Travel, Beauty/Dance/Cultural activities",
          type: "blue",
        },
        {
          time: "09:38 - 10:55",
          name: "Labh",
          activity: "Start new business, Education",
          type: "green",
        },
        {
          time: "10:55 - 12:12",
          name: "Amrit",
          activity: "All type of works (Specially Milk Product Related)",
          type: "green",
        },
        {
          time: "12:12 - 13:28",
          name: "Kaal",
          activity: "Machine, Construction and Agriculture related activities",
          type: "red",
        },
        {
          time: "13:28 - 14:45",
          name: "Shubh",
          activity: "Marriage, Religious, Education activities",
          type: "green",
        },
        {
          time: "14:45 - 16:02",
          name: "Rog",
          activity: "Debate, Contest, Dispute Settlement",
          type: "yellow",
        },
        {
          time: "16:02 - 17:19",
          name: "Udveg",
          activity: "Government related work",
          type: "yellow",
        },
      ];
    } else {
      return [
        {
          time: "17:19 - 19:02",
          name: "Shubh",
          activity: "Marriage, Religious, Education activities",
          type: "green",
        },
        {
          time: "19:02 - 20:45",
          name: "Amrit",
          activity: "All type of works (Specially Milk Product Related)",
          type: "green",
        },
        {
          time: "20:45 - 22:29",
          name: "Char",
          activity: "Travel, Beauty/Dance/Cultural activities",
          type: "blue",
        },
        {
          time: "22:29 - 00:12",
          name: "Rog",
          activity: "Debate, Contest, Dispute Settlement",
          type: "yellow",
        },
        {
          time: "00:12 - 01:55",
          name: "Kaal",
          activity: "Machine, Construction and Agriculture related",
          type: "red",
        },
        {
          time: "01:55 - 03:39",
          name: "Labh",
          activity: "Start new business, Education",
          type: "green",
        },
        {
          time: "03:39 - 05:22",
          name: "Udveg",
          activity: "Government related work",
          type: "yellow",
        },
        {
          time: "05:22 - 07:05",
          name: "Shubh",
          activity: "Marriage, Religious, Education activities",
          type: "green",
        },
      ];
    }
  };

  const auspiciousActivities = [
    { icon: <GiDiamondRing className=" w-8 h-8" />, title: "Shubh Muhurat For Marriage" },
    {
      icon: <Baby className="w-8 h-8" />,
      title: "Shubh Muhurat For Name Giving",
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Shubh Muhurat For New Vehicle",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Shubh Muhurat For New Property",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Shubh Muhurat For New Business",
    },
    { icon: <Smile className="w-8 h-8" />, title: "Shubh Muhurat For Mundan" },
  ];

  const content = {
    title: "WHAT ARE THE AUSPICIOUS HOURS IN A CHOGHADIYA TABLE?",
    description:
      "Choghadiya or Chaughadiya essentially translates to ‘four ghadi’ comprising 96 minutes, where each ghadi is of the duration of 24 minutes.",
    paragraphs: [
      "Shubh, Labh, Char, and Amrit are considered auspicious Choghadiya and one should begin all their significant work in these time periods. These 4 Choghadiyas have their own significance. While Shubh time today is an auspicious period for marriages, education, and religious activities, the Labh period is considered suitable for starting new businesses or educational activities. The Amrit period is considered suitable for any sort of work and the Char time period is considered suitable for traveling, dance, or cultural activities.",
      "Rahu Kaal is considered inauspicious Choghadiya and should be avoided for any work. See today's Rahu Kaal.",
    ],
  };

  const getBackgroundColor = (type) => {
    switch (type) {
      case "yellow":
        return "bg-yellow-100";
      case "blue":
        return "bg-blue-100";
      case "green":
        return "bg-green-100";
      case "red":
        return "bg-red-100";
      default:
        return "bg-white";
    }
  };

  const TimeBlock = ({ data, isDay }) => (
    <div className={`rounded-lg p-4 ${getBackgroundColor(data.type)} mb-2`}>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-600">{data.time}</span>
        <span className="text-sm font-bold">{data.name}</span>
      </div>
      <p className="text-sm text-gray-600 mt-1">{data.activity}</p>
      <div className="text-xs text-pink-500 mt-1">
        Talk to Astrologer | Chat with Astrologer
      </div>
    </div>
  );

  const formattedDate = formatDate(currentDate);

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
            Amavasya Dates 2024
            | New Delhi, NCT, India
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
              {formattedDate.day}th
            </h1>
            <p className="text-gray-600">
              {formattedDate.month} {formattedDate.year}
            </p>
            <p className="text-gray-500">{formattedDate.weekday} (11:02)</p>
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
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Day Section */}
          <div>
            <div className="flex items-center mb-4">
              <Sun className="w-6 h-6 text-yellow-500 mr-2" />
              <h2 className="text-lg font-semibold">Day Choghadiya</h2>
            </div>
            <div className="space-y-2">
              {generateMuhurats(true).map((muhurat, index) => (
                <TimeBlock key={`day-${index}`} data={muhurat} isDay={true} />
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
              {generateMuhurats(false).map((muhurat, index) => (
                <TimeBlock
                  key={`night-${index}`}
                  data={muhurat}
                  isDay={false}
                />
              ))}
            </div>
          </div>
        </div>

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
        </div>

        {/* Auspicious Activities Section */}
        <div className="bg-white rounded-xl shadow-lg mb-6 p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Auspicious Time Today
          </h2>
          <p className="text-gray-600 mb-6">
            Looking for an auspicious marriage muhurat? Planning to buy a
            vehicle? Starting something new? Today's Choghadiya table will help
            you make a better decision by telling you about the most auspicious
            hours of the day. You can also learn about the Shubh Muhurats for
            tomorrow from this table.
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
