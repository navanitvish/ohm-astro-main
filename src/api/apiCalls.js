// src/api/apiCalls.js
import axiosInstance from "./axiosInstance";
import { endpoints } from "./ApiEndpoint";



export const fetchHoroscope = async () => {
  const sign = "leo"; // Replace with dynamic sign if needed
  const response = await axiosInstance.post(
    `${endpoints.getHoroscope}?sign=${sign}` // Append the sign as a query parameter
  );
  return response.data;
};


// Fetch gemstones
export const fetchGemstones = async () => {
  const response = await axiosInstance.get(endpoints.getGemstones);
  return response.data; // Ensure this matches the API response structure
};

// Get Comments
export const fetchastrologers = async () => {
  const response = await axiosInstance.get(endpoints.getastrologers);
  return response.data;
};

export const fetchBlogs = async ({ limit = 10, page = 1 }) => {
  const response = await axiosInstance.get(endpoints.getBlogs, {
    params: { limit, page }, // Pass query parameters here
  });
  return response.data;
};


export const fetchTopRatedAstrologers = async () => {
  const response = await axiosInstance.get(endpoints.getTopRatedAstrologers);
  return response.data; // Ensure this matches the API response structure

};


// Fetch top-rated astrologers
export const fetchTopAstrologers = async () => {
  const response = await axiosInstance.get(endpoints.fetchTopAstrologers);
  return response.data; // Ensure this matches the API response structure
};



// Send sign-in email OTP request
export const requestEmailOTP = async ({ email }) => {
  const response = await axiosInstance.post(endpoints.signIn, {
    email
  });
  return response.data;
};

// Verify OTP
export const verifyOTP = async ({ email, otp }) => {
  try {
    const response = await axiosInstance.post(endpoints.verifyOtp, {
      email,
      otp
    });
    
    // Extract token from nested response data
    console.log("this is the response",response.data.token);

    const token = response.data?.token ||"token"
    
    // Store token in localStorage
    if (token) {
      localStorage.setItem('token', token);
    }
    
    return response.data;
  } catch (error) {
    console.error('Error verifying OTP:', error);
    throw error;
  }
};



// Fetch Blogs by Category
export const fetchBlogsByCategory = async ({ categoryName }) => {
  const response = await axiosInstance.get(
    `${endpoints.getBlogsByCategory}/${categoryName}`
  );
  return response.data;
};

// Fetch Recent Blogs
export const fetchRecentBlogs = async () => {
  const response = await axiosInstance.get(endpoints.getRecentBlogs);
  return response.data;
};


export const fetchPanchang = async () => {
  const latitude = 10.214747;
  const longitude = 78.097626;
  const ayanamsa = 1;
  const language = "en";

  try {
    const response = await axiosInstance.post(
      `${endpoints.getPanchang}?latitude=${latitude}&longitude=${longitude}&ayanamsa=${ayanamsa}&language=${language}`, // No body needed, so pass `null`    
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Panchang data:", error);
    throw error;
  }
};


export const addEnquiry = async (enquiryData) => {
  try {
    // Make the POST request using axios
    const response = await axiosInstance.post(endpoints.addEnquiry, enquiryData);

    // Return the response data
    return response.data;
  } catch (error) {
    // Log the error and throw it for handling in the mutation's onError callback
    console.error("Error adding enquiry:", error);
    throw new Error("There was an error submitting the enquiry. Please try again.");
  }
};

//postGemstone
export const postGemstone = async (postGemstoneuery) => {
  try {
    // Make the POST request using axios
    const response = await axiosInstance.post(endpoints.postGemstone, postGemstoneuery);

    // Return the response data
    return response.data;
  } catch (error) {
    // Log the error and throw it for handling in the mutation's onError callback
    console.error("Error adding postGemstoneuery:", error);
    throw new Error("There was an error submitting the postGemstoneuery. Please try again.");
  }
};