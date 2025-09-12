import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import translations from "../../components/translations/translations";
import { useQuery } from "@tanstack/react-query";
import { fetchastrologers } from "../../api/apiCalls";

const AstrologerList = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const language = useSelector((state) => state.language.language);
  const t = translations[language];

  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchTopRatedAstrologers"],
    queryFn: fetchastrologers,
  });
  console.log("Our astrologer data", data);

  if (isLoading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center p-4">
        <div className="w-12 h-12 border-4 border-t-4 border-gray-200 border-t-pink-500 rounded-full animate-spin"></div>
        <p className="ml-4 text-gray-700">Loading astrologers...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[400px] flex items-center justify-center p-4">
        <p className="text-red-500">Error fetching astrologers: {error.message}</p>
      </div>
    );
  }

  const nextSlide = () => {
    const astrologersLength = data?.data?.length || 0;
    setCurrentIndex((prevIndex) =>
      prevIndex >= astrologersLength - 3 ? 0 : prevIndex + 3
    );
  };
  
  const prevSlide = () => {
    const astrologersLength = data?.data?.length || 0;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, astrologersLength - 3) : prevIndex - 3
    );
  };

  // Handle click to navigate to astrologer profile with state data
  const handleAstrologerClick = (astrologer) => {
    navigate(`/astrologer/${astrologer._id}`, { 
      state: { astrologerData: astrologer } 
    });
  };

  return (
    <div className="bg-pink-50 py-4 md:py-6 px-2 md:px-6">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-4 md:mb-8 relative">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text">
            {t.ourAstrologers}
          </h2>

          {/* Navigation Buttons in top right */}
          <div className="absolute right-0 top-0 flex gap-2">
            <button
              onClick={prevSlide}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white border-2 border-pink-500 text-pink-500 hover:bg-pink-50 transition-colors"
            >
              <FiChevronLeft className="text-xl" />
            </button>
            <button
              onClick={nextSlide}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white border-2 border-pink-500 text-pink-500 hover:bg-pink-50 transition-colors"
            >
              <FiChevronRight className="text-xl" />
            </button>
          </div>

          <div className="w-32 md:w-48 h-0.5 bg-pink-500 mx-auto mb-2 md:mb-4"></div>
          <p className="text-gray-700 text-sm md:text-base px-4">
            {t.contactAstrologers}
          </p>
        </div>

        <div className="overflow-hidden px-4 py-6">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {data?.data.map((astrologer) => (
              <div key={astrologer._id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
                <div
                  className="
                  bg-white rounded-lg border border-red-500 p-6 
                  shadow-sm text-center mx-auto h-[300px] md:h-80
                  cursor-pointer hover:shadow-lg transition-all
                  transform transition-transform duration-300
                  hover:-translate-y-1 md:hover:-translate-y-2
                "
                  onClick={() => handleAstrologerClick(astrologer)}
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-2 md:mb-4 rounded-full bg-gray-200 overflow-hidden">
                    <img
                      src={astrologer.profileImage}
                      alt={astrologer.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-medium text-base md:text-lg mb-1 md:mb-2">
                    {astrologer.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 mb-2">
                    {astrologer.bio && astrologer.bio.length > 60
                      ? `${astrologer.bio.slice(0, 60)}...`
                      : astrologer.bio || "No bio available"}
                  </p>
                  <div className="flex justify-center mt-2 text-yellow-400 text-sm md:text-base">
                    {"★".repeat(Math.round(astrologer.rating || 0))}
                    {"☆".repeat(5 - Math.round(astrologer.rating || 0))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstrologerList;