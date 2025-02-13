// src/components/SignsNavigation.js

import React from 'react';
import { zodiacData } from '../../components/content/zodiacData ';

const SignsNavigation = ({ activeSign, handleSignChange }) => {
  return (
    <div className="w-full overflow-x-auto mb-8 no-scrollbar bg-red-100">
      <div className="flex space-x-6 p-2">
        {Object.entries(zodiacData).map(([signName, signData]) => (
          <button
            key={signData.id}
            onClick={() => handleSignChange(signName)}
            className={`flex flex-col items-center min-w-[80px] transition-colors duration-200  ${
              activeSign === signName ? 'text-pink-500' : 'text-gray-600 hover:text-pink-400'
            }`}
          >
            <img
              src={signData.image}
              alt={signName}
              className="w-16 h-16 mb-2"
            />
            <span className="text-sm font-medium">{signName}</span>
            <span className="text-xs text-gray-500">{signData.dates}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SignsNavigation;
