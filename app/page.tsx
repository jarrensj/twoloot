import Calculator from "@/components/Calculator";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <main className="flex flex-col items-center p-24">
        <h1 className="text-4xl font-bold">Two Loot</h1>
        <p className="text-lg text-center">
          See the loot from the Two
        </p>
        <p className="text-sm text-center text-gray-600">
          Disclaimer: This is not financial advice. You are responsible for your own decisions.
        </p>
        <p className="text-sm text-center text-gray-600 mb-2">
          Please note that some of the loot here may not be available to all and may depend on certain past snapshots.
        </p>
        <Calculator />
      </main>
      <footer className="w-full text-center p-4">
        <p className="text-sm text-gray-500">
          Pre-order the Two <a href="https://solanamobile.com/refer/jarrensj" className="underline text-blue-600 hover:text-blue-800" target="_blank">here</a>. This is a referral link.
        </p>
      </footer>
    </div>
  );
}
