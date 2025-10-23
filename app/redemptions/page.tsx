import Redemptions from "@/components/Redemptions";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Link from "next/link";

export default function RedemptionsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Banner 
        text="missing anything? let us know"
        href="https://discord.gg/omakase"
        isExternal={true}
      />
      <main className="flex flex-col items-center p-10 rounded-lg shadow-lg bg-white m-4">
        <Link 
          href="/" 
          className="self-start mb-4 text-blue-600 hover:text-blue-800 hover:underline font-medium"
        >
          ← Back to Home
        </Link>
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Redemptions / Campaigns</h1>
        <p className="text-xl text-center text-gray-700 mb-6">
          Redemptions and campaigns available for Seeker holders.
        </p>
      </main>
      <Redemptions />
      <Footer />
    </div>
  );
}

