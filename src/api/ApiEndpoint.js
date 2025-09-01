// src/api/endpoints.js
export const endpoints = {
  getHoroscope: "/api/free-services/horoscope",
  getGemstones: "/api/astro-services/gemstones",

  getBlogs: "/api/blogs",
  getastrologers: "/api/astrologers",
  getAstrologerById: (id) => `/astrologers/${id}`,
  getTopRatedAstrologers: "/api/reviews/astrologers/top-rated", // New endpoint
  fetchTopAstrologers: "/api/feedback/top-rated", // Updated name
 
  getSubscriptionPlans: "/api/plans/get-all-plans",

  signIn: "/api/users/sign-in",
  verifyOtp: "/api/users/verify-otp",

  // mobile otp api
  sendMobileOTP: "/api/users/mobile-otp-request",
  mobileOtpVerify: "/api/users/mobile-otp-verify", 

  getBlogsByCategory: "/api/blogs/category/name",
  getRecentBlogs: "/api/blogs/recent",
  getPanchang: "/api/free-services/panchang", // Add Panchang endpoint
  addEnquiry: "/api/enquiry/add", // New POST endpoint
  postGemstone:"/api/astro-services/gemstone-query",
};
