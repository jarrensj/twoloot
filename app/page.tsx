import Calculator from "@/components/Calculator";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import { hasActiveRedemptions } from "@/components/Redemptions";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const showRedemptionsBanner = hasActiveRedemptions();

  return (
    <div className="flex min-h-screen flex-col">
      <Banner 
        text={showRedemptionsBanner ? "🎁 Active Redemptions Available - Click to View" : "missing anything? let us know"}
        href={showRedemptionsBanner ? "/redemptions" : "https://discord.gg/omakase"}
        isExternal={!showRedemptionsBanner}
      />
      <main className="flex-1 container mx-auto px-4 py-10">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="pt-6">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold mb-4">Two Loot</h1>
              <p className="text-xl mb-3">
                Explore the loot from the Two.
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                Disclaimer: Not financial advice. You are responsible for your own decisions and losses.
              </p>
              <p className="text-xs text-muted-foreground">
                Some items may no longer be available or may depend on past snapshots.
              </p>
            </div>
            <Calculator />
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
