'use client'

import { useState, useEffect } from 'react';
import CoinGeckoAttribution from './CoinGeckoAttribution';
import Image from 'next/image';

type PriceState = number | null;

const Calculator = () => {
  // coins price 
  const [cwifPrice, setCwifPrice] = useState<PriceState>(null);
  const [iq50Price, setIq50Price] = useState<PriceState>(null);
  const [mewPrice, setMewPrice] = useState<PriceState>(null);
  const [wuffiPrice, setWuffiPrice] = useState<PriceState>(null);
  const [manekiPrice, setManekiPrice] = useState<PriceState>(null);
  const [happyPrice, setHappyPrice] = useState<PriceState>(null)

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const cwifAllocation: number = 20000000; // 20 million
  const mewAllocation: number = 37600; // 37,600
  const iq50Allocation: number = 800000; // 800,000
  const wuffiAllocation: number = 114858914.9661; // 114,858,914.9661
  const manekiAllocation: number = 5199; // 5199
  const happyAllocation: number = 2137.67 // 2137.67

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    const fetchData = async () => {
      try {
        const response = await fetch('/api/coins');
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setCwifPrice(data['catwifhat-2']?.usd ?? null);
        setMewPrice(data['cat-in-a-dogs-world']?.usd ?? null);
        setIq50Price(data['iq50']?.usd ?? null);
        setWuffiPrice(data['wuffi']?.usd ?? null);
        setManekiPrice(data['maneki']?.usd ?? null);
        setHappyPrice(data['happycat-2']?.usd ?? null);
      } catch (error) {
        console.error('Error fetching prices:', error);
        setError('Failed to fetch data. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const getSortedCoins = () => {
    const coins = [
      { id: 'mew', price: mewPrice, allocation: mewAllocation, image: "https://assets.coingecko.com/coins/images/36440/large/MEW.png?1711442286" },
      { id: 'maneki', price: manekiPrice, allocation: manekiAllocation, image: "https://assets.coingecko.com/coins/images/37292/large/image.png?1713947985" },
      { id: 'wuffi', price: wuffiPrice, allocation: wuffiAllocation, image: "https://assets.coingecko.com/coins/images/36933/large/WUFFI-Ticker-200x200.png?1712805241" },
      { id: 'iq50', price: iq50Price, allocation: iq50Allocation, image: "https://assets.coingecko.com/coins/images/36184/large/AbVsOUMX_400x400.jpg?1710758729" },
      { id: 'cwif', price: cwifPrice, allocation: cwifAllocation, image: "https://assets.coingecko.com/coins/images/35267/large/download_%283%29.png?1708021220" },
      { id: 'happy', price: happyPrice, allocation: happyAllocation, image: "https://coin-images.coingecko.com/coins/images/51396/large/photo_2024-10-09_13-41-12.jpg?1731038028" }
    ];

    return coins
      .filter(coin => coin.price !== null)
      .sort((a, b) => {
        const valueA = (a.price || 0) * a.allocation;
        const valueB = (b.price || 0) * b.allocation;
        return valueB - valueA;
      });
  };

  const totalValue = () => {
    const cwifTotal = cwifPrice ? cwifPrice * cwifAllocation : 0;
    const mewTotal = mewPrice ? mewPrice * mewAllocation : 0;
    const iq50Total = iq50Price ? iq50Price * iq50Allocation : 0;
    const wuffiTotal = wuffiPrice ? wuffiPrice * wuffiAllocation : 0;
    const manekiTotal = manekiPrice ? manekiPrice * manekiAllocation : 0;
    const happyTotal = happyPrice ? happyPrice * happyAllocation : 0;
    const sum = cwifTotal + mewTotal + iq50Total + wuffiTotal + manekiTotal + happyTotal;
    return sum !== 0 ? sum.toFixed(2) : 'N/A';
  };

  return (
    <>
      <div className="mx-auto px-6 py-8 mb-6 bg-white rounded-xl shadow-lg max-w-xl border border-gray-200">
        {isLoading ? (
          <div className="flex justify-center items-center">
            <p className="text-lg text-blue-600">Loading...</p>
          </div>
        ) : error ? (
          <div className="text-center">
            <p className="text-lg text-red-500">{error}</p>
          </div>
        ) : (
          <>
            {getSortedCoins().map((coin) => (
              <div key={coin.id} className="space-y-4 pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-4">
                  <Image src={coin.image} alt={coin.id} width={60} height={60} className="rounded-md" />
                  <div className="flex flex-col">
                    <span className="text-xl font-semibold text-gray-800">{coin.id}</span>
                    <span className="text-md text-gray-500">{coin.allocation.toLocaleString()} ${coin.id}</span>
                  </div>
                </div>
                <div>
                  <p className="text-md text-gray-600">
                    {coin.id}: <span className="font-semibold">${coin.price}</span>
                  </p>
                  <p className="text-lg text-green-500 font-bold">
                    ${((coin.price ?? 0) * coin.allocation).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
            <div className="pt-8 border-t border-gray-100">
            <div className="text-center">
              <span className="text-xl font-semibold text-gray-800">Total Value</span>
              <p className="text-2xl text-green-500 font-bold mt-2">${totalValue()}</p>
            </div>
          </div>
          </>
        )}
      </div>
      <CoinGeckoAttribution />
    </>
  );
}

export default Calculator;
