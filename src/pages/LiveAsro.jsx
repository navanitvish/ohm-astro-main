import React from "react";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchastrologers } from "../api/apiCalls";
import FAQ from "./FAQ/LiveFAQ";
import SubscriptionPlans from "./SubscriptionPlans";

const LiveIndicator = () => (
  <div className="absolute top-2 right-2 flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full z-10">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
    </span>
    <span className="text-sm font-medium">LIVE</span>
  </div>
);

const ScheduledIndicator = () => (
  <div className="absolute top-2 right-2 flex items-center gap-2 bg-gray-600 text-white px-3 py-1 rounded-full z-10">
    <span className="relative flex h-2 w-2">
      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
    </span>
    <span className="text-sm font-medium">SCHEDULED</span>
  </div>
);

const SessionCard = ({ _id, name, bio, profileImage, specialties, experience, rating, isAvailable }) => {
  const navigate = useNavigate();

  const handleJoinSession = () => {
    if (isAvailable) {
      navigate(`/live/${_id}`, { state: { name, bio, profileImage } });
    }
  };

  return (
    <div className="relative flex flex-col overflow-hidden shadow-md hover:shadow-lg transition-all bg-red-50 rounded-2xl p-3 sm:p-4 gap-3 sm:gap-4">
      <div className="relative w-full h-40 sm:h-48 flex-shrink-0">
        <img
          src={profileImage}
          alt={`${name}'s profile`}
          className="w-full h-full object-cover object-center rounded-xl"
        />
        {isAvailable ? <LiveIndicator /> : <ScheduledIndicator />}
      </div>

      <div className="flex flex-col flex-grow justify-between py-1 sm:py-2">
        <div>
          <div
            className={`inline-block mb-2 sm:mb-3 px-2 sm:px-3 py-1 rounded text-xs ${
              isAvailable ? "bg-red-200 text-red-600" : "bg-orange-200 text-orange-600"
            }`}
          >
            {`${experience} Years Experience`}
          </div>

          <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-red-700">{name}</h3>
          <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4 line-clamp-2">{bio}</p>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={handleJoinSession}
            className={`py-1.5 sm:py-2 px-4 sm:px-6 rounded-full text-sm sm:text-base ${
              isAvailable ? "bg-red-600 text-white hover:bg-red-700" : "bg-orange-400 text-white hover:bg-orange-500"
            }`}
          >
            {isAvailable ? "Start Session" : "Not Available"}
          </button>
          <div className="flex items-center gap-1 text-yellow-500">
            {[...Array(5)].map((_, index) => (
              <span key={index} className={`text-xl ${index < Math.floor(rating) ? 'text-yellow-500' : 'text-gray-300'}`}>
                ★
              </span>
            ))}
            <span className="text-gray-600 ml-1 text-sm">({rating})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LiveAsro = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["astrologers", { limit: 10, page: 1 }],
    queryFn: () => fetchastrologers({ limit: 10, page: 1 }),
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-red-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Error loading astrologers: {error.message}
      </div>
    );
  }

  return (
    <div>
      <nav className="bg-rose-500 text-white p-3 sm:p-4">
        <div className="container mx-auto flex items-center gap-2">
          <Home className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-medium text-sm sm:text-base">Live Astrologers</span>
        </div>
      </nav>
      <SubscriptionPlans/>

      <div className="bg-rose-50 py-6 sm:py-8 p-4 sm:p-6">
        <div className="container mx-auto px-3 sm:px-4">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            INTERACTIVE LIVE SESSIONS
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Connect with Expert Astrologers for Personalized Guidance
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
        <h2 className="text-xl sm:text-2xl text-center font-bold mb-4 sm:mb-6">
          Available Astrologers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {data?.data?.map((astrologer) => (
            <SessionCard 
              key={astrologer._id} 
              {...astrologer}
            />
          ))}
        </div>
      </div>

      <FAQ />
    </div>
  );
};

export default LiveAsro;