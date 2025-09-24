import React from 'react';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 mt-8 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-2 text-xs text-gray-600">
          <p>
            The assets and projects listed on this platform are for informational purposes only. 
            We do not endorse, guarantee, or verify the legitimacy of any listed assets or projects.
          </p>
          <p>
            Some content, banners, and links on this platform may be sponsored or paid endorsements. 
            We may receive commissions, compensation, or payment for featuring certain content, 
            including but not limited to banner advertisements and sponsored listings. 
            If you see anything incorrect or something that needs to be updated, please <a href="mailto:omakasemoney@gmail.com" className="text-blue-600 hover:text-blue-800">let us know</a>.
          </p>
          <p className="font-medium text-gray-700 mt-4">
            dev by <a href="https://kwaji.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">kwaji</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
