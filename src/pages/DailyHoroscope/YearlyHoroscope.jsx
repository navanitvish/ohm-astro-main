import { Calendar } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import VedicAstrologersSection from "../ConsultWithTopVedicAstrologers";
import { useSelector } from "react-redux";
import translations from "../../components/translations/translations";
import Yearlybenift from "./Yearlybenift";
import { useQuery } from "@tanstack/react-query";
import { fetchHoroscope } from "../../api/apiCalls";

// Breadcrumb Component
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
        <Link to="/horoscope" className="hover:underline">
          {t.Horoscope}
        </Link>
        <span>›</span>
        <span>{t.YearlyHoroscope}</span>
      </div>
    </div>
  );
};

// Header Section Component
const HoroscopeHeader = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  return (
    <div className="bg-pink-50 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            {t.YearlyHoroscope}
            <div className="w-16 h-1 bg-red-500 mt-2"></div>
          </h1>
          <Calendar className="w-12 h-12 text-red-500" />
        </div>
      </div>
    </div>
  );
};

// Today's Horoscope Section Component
const TodaysHoroscope = () => {
  const navigate = useNavigate();
  const language = useSelector((state) => state.language.language);
  const t = translations[language];

  const { data, isLoading, error } = useQuery({
    queryKey: ["fetchHoroscope", { sign: "leo" }], // Include parameters in query key
    queryFn: () => fetchHoroscope({ sign: "leo" }), // Pass sign dynamically
  });

  console.log("Fetched fetchHoroscope data:", data);

  // if (isLoading)
  //   return (
  //     <div className="text-center p-8">
  //       {/* Spinner */}
  //       <div className="inline-block w-16 h-16 border-4 border-t-4 border-gray-200 border-t-red-500 rounded-full animate-spin"></div>
  //       <p className="mt-4">Loading top-rated astrologers...</p>
  //     </div>
  //   );
  // if (error) return <p>Error: {error.message}</p>;
  const zodiacSigns = [
    {
      id: 1,
      name: t.Aries,
      date: "Mar 21 - Apr 20",
      image:
        "https://cdn.anytimeastro.com/anytimeastro/web/content/images/zodiac/Aries.png",
    },
    {
      id: 2,
      name: t.Taurus,
      date: "Apr 21 - May 20",
      image:
        "https://cdn.anytimeastro.com/anytimeastro/web/content/images/zodiac/Aries.png",
    },
    {
      id: 3,
      name: t.Gemini,
      date: "May 21 - Jun 21",
      image:
        "https://cdn.anytimeastro.com/anytimeastro/web/content/images/zodiac/Aries.png",
    },
    {
      id: 4,
      name: t.Cancer,
      date: "Jun 22 - Jul 22",
      image:
        "https://cdn.anytimeastro.com/anytimeastro/web/content/images/zodiac/Aries.png",
    },
    {
      id: 5,
      name: t.Leo,
      date: "Jul 23 - Aug 23",
      image:
        "https://cdn.anytimeastro.com/anytimeastro/web/content/images/zodiac/Aries.png",
    },
    {
      id: 6,
      name: t.Virgo,
      date: "Aug 24 - Sep 23",
      image:
        "https://cdn.anytimeastro.com/anytimeastro/web/content/images/zodiac/Aries.png",
    },
    {
      id: 7,
      name: t.Libra,
      date: "Sep 24 - Oct 23",
      image:
        "https://cdn.anytimeastro.com/anytimeastro/web/content/images/zodiac/Aries.png",
    },
    {
      id: 8,
      name: t.Scorpio,
      date: "Oct 24 - Nov 22",
      image:
        "https://cdn.anytimeastro.com/anytimeastro/web/content/images/zodiac/Aries.png",
    },
    {
      id: 9,
      name: t.Sagittarius,
      date: "Nov 23 - Dec 21",
      image:
        "https://cdn.anytimeastro.com/anytimeastro/web/content/images/zodiac/Aries.png",
    },
    {
      id: 10,
      name: t.Capricorn,
      date: "Dec 22 - Jan 20",
      image:
        "https://cdn.anytimeastro.com/anytimeastro/web/content/images/zodiac/Aries.png",
    },
    {
      id: 11,
      name: t.Aquarius,
      date: "Jan 21 - Feb 18",
      image:
        "https://cdn.anytimeastro.com/anytimeastro/web/content/images/zodiac/Aries.png",
    },
    {
      id: 12,
      name: t.Pisces,
      date: "Feb 19 - Mar 20",
      image:
        "https://cdn.anytimeastro.com/anytimeastro/web/content/images/zodiac/Aries.png",
    },
  ];

  const handleSignClick = (sign) => {
    navigate(`/horoscope/${sign.name.toLowerCase()}`);
  };
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-center text-3xl font-bold mb-4">
        {t.YearlyHoroscope}   <span className="text-red-500">{t.Horoscope}</span>
      </h2>
      <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
        {t.Descriptions}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {zodiacSigns.map((sign) => (
          <div
            key={sign.id}
            onClick={() => handleSignClick(sign)}
            className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="aspect-square rounded-full overflow-hidden bg-pink-100 mb-3">
              <img
                src={sign.image}
                alt={sign.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-red-500 font-medium">{sign.name}</h3>
              <p className="text-sm text-gray-600">{sign.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Component
const MonthlyHoroscope = () => {
  return (
    <div>
      <Breadcrumb />
      <HoroscopeHeader />
      <TodaysHoroscope />
      <VedicAstrologersSection />
      <Yearlybenift />
    </div>
  );
};

export default MonthlyHoroscope;
