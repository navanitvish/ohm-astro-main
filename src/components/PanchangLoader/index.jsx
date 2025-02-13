import React from 'react';
import { Sun, Moon, Sparkles } from 'lucide-react';

const AstroLoader = ({title}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8">
      <div className="relative">
        {/* Outer circle with gradient border */}
        <div className="w-32 h-32 rounded-full border-4 border-transparent bg-gradient-to-r from-amber-500 to-pink-500 p-0.5 animate-spin-slow">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
            {/* Inner content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Sun className="w-12 h-12 text-amber-500 animate-pulse" />
            </div>
          </div>
        </div>
        
        {/* Orbiting moon */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-8 h-8 animate-orbit">
            <Moon className="w-8 h-8 text-pink-500" />
          </div>
        </div>
        
        {/* Decorative sparkles */}
        <div className="absolute -top-4 -right-4">
          <Sparkles className="w-6 h-6 text-amber-400 animate-bounce" />
        </div>
        <div className="absolute -bottom-4 -left-4">
          <Sparkles className="w-6 h-6 text-pink-400 animate-bounce delay-100" />
        </div>
      </div>
      
      <p className="mt-8 text-lg font-medium bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text animate-pulse">
      {title}
      </p>
    </div>
  );
};

export default AstroLoader;