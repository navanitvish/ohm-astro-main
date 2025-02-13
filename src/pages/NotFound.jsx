import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">
      <div className="text-center p-8 sm:p-12 bg-white shadow-xl rounded-xl max-w-md w-full">
        <h1 className="text-6xl font-extrabold text-red-600">404</h1>
        <p className="mt-4 text-xl sm:text-2xl text-gray-700">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-8 py-3 text-white bg-gradient-to-r from-red-500 to-yellow-600 rounded-lg text-lg font-semibold shadow-md transform hover:scale-105 transition-transform duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
