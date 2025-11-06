import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface Campaign {
  title: string;
  description: string;
  sourceUrl: string;
  isActive: boolean;
}

export const campaigns: Campaign[] = [
  {
    title: "ORE app available on Solana Mobile app store",
    description: "Official Solana Mobile Twitter account mentions https://x.com/OREsupply",
    sourceUrl: "https://x.com/solanamobile/status/1986116929720099119",
    isActive: true
  }
];

export const hasActiveCampaigns = () => {
  return campaigns.some(c => c.isActive);
};

const Campaigns = () => {

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 mb-8 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Active Campaigns</h2>
      <div className="space-y-4">
        {campaigns.map((campaign, index) => (
          <Card key={index} className="shadow-xl hover:shadow-2xl transition-shadow duration-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <CardTitle className="text-xl">
                  {campaign.title}
                </CardTitle>
                {campaign.isActive && (
                  <Badge variant="success">
                    Active
                  </Badge>
                )}
              </div>
              <CardDescription className="mt-2">
                {campaign.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link 
                href={campaign.sourceUrl} 
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

export default Campaigns;
