'use client'

import { useState, useEffect } from 'react';
import CoinGeckoAttribution from './CoinGeckoAttribution';
import Image from 'next/image';

const Calculator = () => {
  const [cwifPrice, setCwifPrice] = useState<number | null>(0);
  const [isLoading, setIsLoading] = useState(true);

  const cwifAllo = 20000000; // 20 million

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch('/api/coins', { next: { revalidate: 1 } });
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        if (data) { 
          setCwifPrice(data['catwifhat-2'].usd);
        } else {
          setCwifPrice(null); 
        }
      }
      catch (error) {
        console.error('Error fetching prices:', error);
        setCwifPrice(null);
      }
      finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const cwifValue = cwifPrice !== null ? (cwifPrice * cwifAllo).toFixed(2) : 'N/A';
  const totalValue = cwifPrice !== null ? (cwifPrice * cwifAllo).toFixed(2) : 'N/A';

  return (
    <>
      <div className="mx-auto px-6 py-8 mb-6 bg-white rounded-xl shadow-lg max-w-xl border border-gray-200">
        {isLoading ? (
          <div className="flex justify-center items-center">
            <p className="text-lg text-blue-600">Loading...</p>
          </div>
        ) : cwifPrice !== null ? (
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Image src="https://assets.coingecko.com/coins/images/35267/large/download_%283%29.png?1708021220" alt="cwif" width={60} height={60} className="rounded-md" />
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-gray-800">cwif</span>
                <span className="text-md text-gray-500">20 mil $cwif</span>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <p className="text-md text-gray-600">
                cwif: <span className="font-semibold">${cwifPrice}</span>
              </p>
              <p className="text-lg text-green-500 font-bold">
                ${cwifValue}
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-md text-red-500">Price information not available</p>
            <p className="text-md text-red-500">Please try again</p>
          </div>
        )}
      </div>
      <CoinGeckoAttribution />
    </>
  );  
}

export default Calculator;