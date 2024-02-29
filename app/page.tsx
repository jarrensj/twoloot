import Calculator from "@/components/Calculator";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold">Two Loot</h1>
      <p className="text-lg text-center">
        See the loot from the Two
      </p>
      <Calculator />
    </main>
  );
}
