// Sidebar.js
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchRecentBlogs } from '../../api/apiCalls';

const categories = [
  "Zodiac Signs", "Vastu", "Trending", "Tarot", "Psychic Reading",
  "Numerology", "Nakshatra", "Muhurat", "Moon Sign", "Gemstones",
  "Compatibility", "Celebrity", "Career", "Astrology",
];

const popularPosts = [
  "Vehicles on These Dates in 2024",
  "Nakshatra Matching For Marriage | Nakshatra Compatibility",
  "Shubh Muhurat For Gold Purchase in 2024 - Best Days to Buy Gold",
  "Mundan Muhurat 2024: Best Mundan Ceremony Date and Time",
  "Home Purchase Muhurat | Shubh Property Purchase Muhurat in 2024",
  "Right Eye Twitching for Female Meaning in Astrology",
  "Left Eye Twitching for Male Meaning in Astrology",
  "Bharani Nakshatra Compatibility With Other Nakshatra",
];

export const Sidebar = () => {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("popular");
  
  const { data: recentBlogs, isLoading, error } = useQuery({
    queryKey: ["recentBlogs"],
    queryFn: fetchRecentBlogs,
  });

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-200 to-cyan-200 rounded-lg shadow p-4">
        <div className="flex border-b gap-4">
          <button
            className={`w-full px-4 py-2 rounded-t-lg ${
              activeTab === "popular"
                ? "bg-gradient-to-r from-rose-400 to-red-500 text-white"
                : "bg-gray-100"
            }`}
            onClick={() => setActiveTab("popular")}
          >
            Popular Posts
          </button>
          <button
            className={`w-full px-4 py-2 rounded-t-lg ${
              activeTab === "recent"
                ? "bg-gradient-to-r from-rose-400 to-red-500 text-white"
                : "bg-gray-100"
            }`}
            onClick={() => setActiveTab("recent")}
          >
            Recent Posts
          </button>
        </div>
        <div className="mt-4">
          <ul className="space-y-3">
            {activeTab === "popular" ? (
              popularPosts.map((post, index) => (
                <li key={index} className="text-gray-700 hover:text-red-700 cursor-pointer hover:underline">
                  <span className="text-red-700">&#9827;</span> {post}
                </li>
              ))
            ) : (
              recentBlogs?.data.map((post, index) => (
                <li key={index} className="text-gray-700 hover:text-red-700 cursor-pointer hover:underline">
                  <span className="text-red-700">&#9827;</span> {post.english.title}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="font-semibold mb-4 bg-gradient-to-r from-rose-400 to-red-500 w-full p-2 text-white">
          Categories
        </h3>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index} className="text-gray-700 hover:text-red-700 cursor-pointer border-b p-2 hover:underline">
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-red-700 text-white p-4 rounded-lg">
        <h3 className="font-semibold mb-4">Subscribe to Our Newsletter</h3>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full px-3 py-2 rounded bg-gray-100 text-gray-800"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="w-full bg-yellow-400 text-gray-900 py-2 rounded font-semibold hover:bg-yellow-500 transition-colors duration-200">
            Subscribe
          </button>
          <p className="text-sm text-center">
            Subscribe to get all the necessary notifications.
          </p>
        </div>
      </div>
    </div>
  );
};
