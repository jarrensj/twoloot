import Calculator from "@/components/Calculator";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <main className="flex flex-col items-center p-10 rounded-lg shadow-lg bg-white m-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Two Loot</h1>
        <p className="text-xl text-center text-gray-700 mb-2">
          Explore the loot from the Two.
        </p>
        <p className="text-md text-center text-gray-600 mb-1">
          Disclaimer: This is not financial advice. You are responsible for your own decisions.
        </p>
        <p className="text-sm text-center text-gray-500 mb-6">
          Some items may no longer be available or may depend on past snapshots.
        </p>
        <Calculator />
      </main>
      <footer className="w-full text-center p-6 mt-auto">
        <p className="text-md text-gray-600">
          <Link href="https://solanamobile.com/refer/jarrensj" className="font-medium underline text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Pre-order the Two here</Link>. This is a referral link.
        </p>
      </footer>
    </div>
  );
}
