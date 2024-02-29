'use client'

import { useState, useEffect } from 'react';
import CoinGeckoAttribution from './CoinGeckoAttribution';

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

  const totalValue = cwifPrice !== null ? (cwifPrice * cwifAllo).toFixed(2) : 'N/A';


  return (
    <>
      <div className="mx-auto px-4 py-6 text-center mb-4 bg-gray-100 rounded-lg shadow max-w-4xl">
        {isLoading ? (
          <p className="text-lg text-blue-500">Loading...</p>
        ) : cwifPrice !== null ? (
          <>
            <div className="text-gray-700">
              <p className="text-md">20 million $cwif</p>
              <p className="text-md">
                cwif: <span className="font-semibold">${cwifPrice}</span>
              </p>
              <p className="text-lg text-green-600">
                Total Value: <span className="font-bold">{totalValue}</span>
              </p>
            </div>
          </>
        ) : (
          <>
            <p className="text-md text-red-500">Price information not available</p>
            <p className="text-md text-red-500">Please try again</p>
          </>
        )}
      </div>
      <CoinGeckoAttribution />
    </>
  );
};

export default Calculator;