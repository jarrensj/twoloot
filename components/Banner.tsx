import React from 'react';

const Banner = () => {
  return (
    <div className="w-full py-3 px-4 text-center bg-gradient-to-r from-pink-300 via-yellow-200 via-green-200 via-blue-200 to-purple-300 animate-gradient-x">
      <a 
        href="https://discord.gg/omakase" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-lg font-semibold text-gray-800 drop-shadow-sm hover:text-gray-900 hover:scale-105 hover:underline transition-all duration-200 inline-block"
      >
        missing anything? let us know
      </a>
    </div>
  );
};

export default Banner;
