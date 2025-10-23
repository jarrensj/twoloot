import React from 'react';

interface BannerProps {
  text: string;
  href: string;
  isExternal?: boolean;
}

const Banner = ({ text, href, isExternal = true }: BannerProps) => {
  return (
    <div className="w-full py-3 px-4 text-center bg-gradient-to-r from-pink-300 via-yellow-200 via-green-200 via-blue-200 to-purple-300 animate-gradient-x">
      <a 
        href={href} 
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="text-lg font-semibold text-gray-800 drop-shadow-sm hover:text-gray-900 hover:scale-105 hover:underline transition-all duration-200 inline-block"
      >
        {text}
      </a>
    </div>
  );
};

export default Banner;
