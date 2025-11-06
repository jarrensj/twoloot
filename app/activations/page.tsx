import Activations from "@/components/Activations";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function ActivationsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Banner 
        text="missing anything? let us know"
        href="https://discord.gg/omakase"
        isExternal={true}
      />
      <main className="flex-1 container mx-auto px-4 py-10">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="pt-6">
            <Link href="/">
              <Button variant="ghost" size="sm" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold mb-4">Activations</h1>
              <p className="text-xl mb-3">
                Activations available for Seeker holders.
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                Disclaimer: You are responsible for your own actions and decisions.
              </p>
              <p className="text-xs text-muted-foreground">
                We are not responsible for third-party links, activation terms, or any outcomes. Always verify sources and information independently. Everything is at your own risk. We are not liable for any losses, damages, or issues that may arise.
              </p>
            </div>
          </CardContent>
        </Card>
        <Activations />
      </main>
      <Footer />
    </div>
  );
}
