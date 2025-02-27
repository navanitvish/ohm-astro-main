



import { useState, useEffect } from "react";
import { MessageCircle, Star } from "lucide-react";
import { useSelector } from "react-redux";
import translations from "../../components/translations/translations";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchastrologers } from "../../api/apiCalls";

const servicesData = [
  {
    id: 1,
    title: "Today's Panchang",
    description: "Daily astrological almanac",
    icon: "📜",
  },
  {
    id: 2,
    title: "Janam Kundali",
    description: "Birth chart analysis",
    icon: "🗺️",
  },
  {
    id: 3,
    title: "Free Horoscope",
    description: "Daily predictions",
    icon: "🔮",
  },
  {
    id: 4,
    title: "Kundali Match",
    description: "Compatibility analysis",
    icon: "💍",
  },
  {
    id: 5,
    title: "Subh Mahurat",
    description: "Auspicious timings",
    icon: "🪷",
  },
  {
    id: 6,
    title: "Vrat and Upwaas",
    description: "Fasting calendar",
    icon: "⚙️",
  },
];

// eslint-disable-next-line react/prop-types
const AstrologerCard = ({ astrologer }) => {
  const navigate = useNavigate();

  // Safely access nested properties with default values
  // eslint-disable-next-line react/prop-types
  const specialties = Array.isArray(astrologer.specialties) 
    // eslint-disable-next-line react/prop-types
    ? astrologer.specialties 
    : [];

  return (
    <div className="relative p-6 rounded-xl border border-purple-200 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 group">
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <div
          className={`w-2 h-2 rounded-full ${
            // eslint-disable-next-line react/prop-types
            astrologer.online ? "bg-green-500" : "bg-red-500"
          }`}
        ></div>
        <span
          className={`text-xs ${
            // eslint-disable-next-line react/prop-types
            astrologer.online ? "text-green-500" : "text-red-500"
          }`}
        >
          {astrologer.online ? "Online" : "Offline"}
        </span>
      </div>
      <div className="flex items-center gap-4">
        <img
          src={
            astrologer.profileImage ||
            "https://cdn.anytimeastro.com/dashaspeaks/expert/thumb/628289f4-bd17-4d80-b2d6-b3586fcb824a.png"
          }
          alt={astrologer.name || "Astrologer"}
          className="w-16 h-16 rounded-full border-2 border-purple-300"
        />
        <div>
          <h3 className="font-semibold text-lg text-black">{astrologer.name || "Unknown"}</h3>
          <div className="flex items-center gap-1 text-yellow-400">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm">{astrologer.rating || "5.0"}</span>
            <span className="text-xs text-black">
              ({astrologer.totalReadings || 0} readings)
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex flex-wrap gap-2 mb-3">
          {specialties.map((specialty, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-red-500/20 text-black"
            >
              {typeof specialty === 'string' ? specialty : specialty.name || 'Unknown'}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-black text-sm">{astrologer.experience || "Experience not specified"}</p>
            <span className="text-green-400 font-semibold">
              {astrologer.pricing || "Rate not specified"}/min
            </span>
          </div>
          <button
            onClick={() => navigate(`/astrologer/${astrologer._id}`)}
            className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-pink-500 text-black px-2 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ service }) => (
  <div>
    <div className="p-6 rounded-xl border border-purple-200 bg-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group cursor-pointer">
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-lg font-semibold text-black mb-2">
        {service.title}
      </h3>
      <p className="text-sm text-black">{service.description}</p>
    </div>
  </div>
);

const AstrologyServices = () => {
  const {
    data: astrologersData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["astrologers"],
    queryFn: fetchastrologers,
  });

  const [astrologers, setAstrologers] = useState([]);
  console.log(astrologers,"astrologers data");

  console.log("astrologers", astrologers);
  const language = useSelector((state) => state.language.language);
  const t = translations[language];

  useEffect(() => {
    if (astrologersData?.data) {
      // Ensure we're working with an array
      const astrologerArray = Array.isArray(astrologersData.data) 
        ? astrologersData.data 
        : [astrologersData.data];
      
      setAstrologers(astrologerArray);
    }
  }, [astrologersData]);

  useEffect(() => {
    if (!astrologers.length) return;

    const interval = setInterval(() => {
      setAstrologers((prevAstrologers) =>
        prevAstrologers.map((astrologer) => ({
          ...astrologer,
          online: Math.random() > 0.5,
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [astrologers]);

  if (isLoading) {
    return (
      <div className="text-center p-8">
        <div className="inline-block w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="mt-4">Loading top-rated astrologers...</p>
      </div>
    );
  }

  if (error) {
    return <p>Error fetching top-rated astrologers: {error.message}</p>;
  }

  return (
    <div className="relative min-h-screen text-black">
      <main className="max-w-6xl mx-auto px-6 py-12">
        <section>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text">
              {t.recommended_astrologers}
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {astrologers.map((astrologer) => (
              <AstrologerCard 
                key={astrologer._id || astrologer.id} 
                astrologer={astrologer} 
              />
            ))}
          </div>
        </section>

        <section>
          <div className="text-center mt-12 mb-8">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text">
              OUR FREE SERVICES
            </h2>
            <p className="text-black">
              Our free services are designed to help you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AstrologyServices;