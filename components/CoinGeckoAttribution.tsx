import Link from "next/link";
import Image from "next/image";

const CoinGeckoAttribution = () => {
  return (
    <div className="flex flex-col items-center mt-1">
      <p className="text-xs">
        <Link href="https://coingecko.com">Data provided by CoinGecko</Link>
      </p>
      <Link href="https://coingecko.com">
       <Image src="/coingecko_logo.png" alt="coingecko logo with black text" width={100} height={100} />
      </Link>
    </div>
  );
};

export default CoinGeckoAttribution;