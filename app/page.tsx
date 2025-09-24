import Calculator from "@/components/Calculator";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Banner />
      <main className="flex flex-col items-center p-10 rounded-lg shadow-lg bg-white m-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Two Loot</h1>
        <p className="text-xl text-center text-gray-700 mb-2">
          Explore the loot from the Two.
        </p>
        <p className="text-md text-center text-gray-600 mb-1">
          Disclaimer: Not financial advice. You are responsible for your own decisions and losses.
        </p>
        <p className="text-sm text-center text-gray-500 mb-6">
          Some items may no longer be available or may depend on past snapshots.
        </p>
        <Calculator />
      </main>
      <Footer />
    </div>
  );
}
