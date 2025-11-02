import Link from "next/link";

const CoinGeckoAttribution = () => {
  return (
    <div className="flex flex-col items-center mt-1">
      <p className="text-xs text-muted-foreground">
        <Link href="https://coingecko.com" className="text-primary hover:underline">
          Data provided by CoinGecko
        </Link>
      </p>
    </div>
  );
};

export default CoinGeckoAttribution;