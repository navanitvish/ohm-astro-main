import React, { useState } from "react";
import { Clock } from "lucide-react";

const UpcomingPujaSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscription = async (e) => {
    e.preventDefault();

    // Replace with actual backend API integration
    if (email) {
      try {
        // Simulating API call
        setTimeout(() => {
          setMessage("Thank you! You will be notified.");
          setEmail(""); // Clear email input
        }, 500);
      } catch (error) {
        setMessage("Something went wrong. Please try again.");
      }
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  return (
    <section className="flex items-center justify-center h-[300px] bg-gradient-to-r from-amber-500 to-pink-500 to-red-500 animate-gradient">
      <div className="text-center  p-10 rounded-3xl  backdrop-blur-md">
        <h1 className="text-4xl font-bold text-white mb-4 ">Upcoming Puja</h1>
        <p className="text-lg text-white/80 mb-6 animate-fade-in">
          Stay tuned! Our upcoming puja schedule will be updated here soon.
        </p>
        <div className="flex items-center justify-center gap-3 bg-white/30 p-4 rounded-lg shadow-lg animate-pulse">
          <Clock className="w-8 h-8 text-yellow-400" />
          <span className="text-2xl font-semibold text-white">Coming Soon</span>
        </div>
        <form onSubmit={handleSubscription} className="mt-6">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="ml-3 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-purple-700 transition duration-200"
          >
            Notify Me
          </button>
        </form>
        {message && (
          <p className="mt-4 text-white text-sm animate-fade-in">{message}</p>
        )}
      </div>
    </section>
  );
};

export default UpcomingPujaSection;
