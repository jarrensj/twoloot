import React from 'react';

interface Redemption {
  title: string;
  description: string;
  sourceUrl: string;
  isActive: boolean;
}

export const redemptions: Redemption[] = [
  {
    title: "Seeker x Moonbirds SBT",
    description: "open to Seeker owners as well as Moonbirds, Mythics, and Oddities holders",
    sourceUrl: "https://x.com/moonbirds/status/1981027879514161261?s=46",
    isActive: true
  }
];

export const hasActiveRedemptions = () => {
  return redemptions.some(r => r.isActive);
};

const Redemptions = () => {

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 mb-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Active Redemptions</h2>
      <div className="space-y-4">
        {redemptions.map((redemption, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {redemption.title}
                  </h3>
                  {redemption.isActive && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-3">
                  {redemption.description}
                </p>
                <a 
                  href={redemption.sourceUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm hover:underline transition-colors duration-200"
                >
                  View Source →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Redemptions;

