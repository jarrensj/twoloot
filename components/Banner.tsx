import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface BannerProps {
  text: string;
  href: string;
  isExternal?: boolean;
}

const Banner = ({ text, href, isExternal = true }: BannerProps) => {
  const linkClasses = cn(
    "text-lg font-semibold drop-shadow-sm hover:scale-105 hover:underline transition-all duration-200 inline-block",
    "text-foreground hover:text-foreground/90"
  );

  return (
    <div className="w-full py-3 px-4 text-center bg-gradient-to-r from-pink-300 via-yellow-200 via-green-200 via-blue-200 to-purple-300 animate-gradient-x">
      {isExternal ? (
        <a 
          href={href} 
          target="_blank"
          rel="noopener noreferrer"
          className={linkClasses}
        >
          {text}
        </a>
      ) : (
        <Link href={href} className={linkClasses}>
          {text}
        </Link>
      )}
    </div>
  );
};

export default Banner;
