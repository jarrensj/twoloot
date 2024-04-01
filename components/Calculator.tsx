'use client'

import { useState, useEffect } from 'react';
import CoinGeckoAttribution from './CoinGeckoAttribution';
import Image from 'next/image';

type PriceState = number | null;

const Calculator = () => {
  const [cwifPrice, setCwifPrice] = useState<PriceState>(null);
  const [mewPrice, setMewPrice] = useState<PriceState>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const cwifAllocation: number = 20000000; // 20 million
  const mewAllocation: number = 37600; // 37,600

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/coins');
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setCwifPrice(data['catwifhat-2']?.usd ?? null);
        setMewPrice(data['cat-in-a-dogs-world']?.usd ?? null);
      } catch (error) {
        console.error('Error fetching prices:', error);
        setCwifPrice(null);
        setMewPrice(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const totalValue = () => {
    const cwifTotal = cwifPrice ? cwifPrice * cwifAllocation : 0;
    const mewTotal = mewPrice ? mewPrice * mewAllocation : 0;
    const sum = cwifTotal + mewTotal;
    return sum !== 0 ? sum.toFixed(2) : 'N/A';
  };

  return (
    <>
      <div className="mx-auto px-6 py-8 mb-6 bg-white rounded-xl shadow-lg max-w-xl border border-gray-200">
        {isLoading ? (
          <div className="flex justify-center items-center">
            <p className="text-lg text-blue-600">Loading...</p>
          </div>
        ) : (
          <>
            {cwifPrice !== null && (
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
                    ${cwifPrice ? (cwifPrice * cwifAllocation).toFixed(2) : 'N/A'}
                  </p>
                </div>
              </div>
            )}
            {mewPrice !== null && (
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-4">
                  <Image src="https://assets.coingecko.com/coins/images/36440/large/MEW.png?1711442286" alt="mew" width={60} height={60} className="rounded-md" />
                  <div className="flex flex-col">
                    <span className="text-xl font-semibold text-gray-800">mew</span>
                    <span className="text-md text-gray-500">37,600 $mew</span>
                  </div>
                </div>
                <div>
                  <p className="text-md text-gray-600">
                    mew: <span className="font-semibold">${mewPrice}</span>
                  </p>
                  <p className="text-lg text-green-500 font-bold">
                    ${mewPrice ? (mewPrice * mewAllocation).toFixed(2) : 'N/A'}
                  </p>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      <CoinGeckoAttribution />
    </>
  );
}

export default Calculator;