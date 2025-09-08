// src/pages/ComingSoon.jsx
import React, { useState, useEffect } from "react";

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const target = new Date("2025-12-31T23:59:59").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          mins: Math.floor((diff / 1000 / 60) % 60),
          secs: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-indigo-700 via-purple-700 to-pink-600 text-white">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide animate-pulse">
          OHM Astro
        </h1>
         <p className="text-2xl font-bold text-gray-200">Coming Soon 🚀</p>
        <p className="text-lg text-gray-200">Something amazing is on the way 🚀</p>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-6 text-2xl font-semibold">
          <div><span>{timeLeft.days}</span><p className="text-sm">Days</p></div>
          <div><span>{timeLeft.hours}</span><p className="text-sm">Hours</p></div>
          <div><span>{timeLeft.mins}</span><p className="text-sm">Mins</p></div>
          <div><span>{timeLeft.secs}</span><p className="text-sm">Secs</p></div>
        </div>

        {/* Email Notify */}
        {/* <div className="flex justify-center mt-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-l-xl w-64 text-black focus:outline-none"
          />
          <button className="px-5 py-3 bg-yellow-400 text-black font-semibold rounded-r-xl hover:bg-yellow-300 transition">
            Notify Me
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ComingSoon;
