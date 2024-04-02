import Link from "next/link";
import Image from "next/image";

const CoinGeckoAttribution = () => {
  return (
    <div className="flex flex-col items-center mt-1">
      <p className="text-xs">
        <Link href="https://coingecko.com">Data provided by CoinGecko</Link>
      </p>
    </div>
  );
};

export default CoinGeckoAttribution;