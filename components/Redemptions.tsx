import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface Redemption {
  title: string;
  description: string;
  sourceUrl: string;
  isActive: boolean;
}

export const redemptions: Redemption[] = [
  {
    title: "Seeker x Moonbirds SBT",
    description: "open to Seeker owners as well as Moonbirds, Mythics, and Oddities holders",
    sourceUrl: "https://x.com/moonbirds/status/1981027879514161261?s=46",
    isActive: true
  }
];

export const hasActiveRedemptions = () => {
  return redemptions.some(r => r.isActive);
};

const Redemptions = () => {

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 mb-8 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Active Redemptions</h2>
      <div className="space-y-4">
        {redemptions.map((redemption, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <CardTitle className="text-xl">
                  {redemption.title}
                </CardTitle>
                {redemption.isActive && (
                  <Badge variant="success">
                    Active
                  </Badge>
                )}
              </div>
              <CardDescription className="mt-2">
                {redemption.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link 
                href={redemption.sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline font-medium text-sm transition-colors"
              >
                View Source <ExternalLink className="h-3 w-3" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Redemptions;

