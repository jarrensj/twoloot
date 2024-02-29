import Calculator from "@/components/Calculator";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold">Two Loot</h1>
      <p className="text-lg text-center">
        See the loot from the Two
      </p>
      <p className="text-sm text-center text-gray-600 mb-2">
        Disclaimer: This is not financial advice. You are responsible for your own decisions. 
      </p>
      <Calculator />
    </main>
  );
}
