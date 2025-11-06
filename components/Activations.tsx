import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface Activation {
  title: string;
  description: string;
  sourceUrl: string;
  isActive: boolean;
}

export const activations: Activation[] = [
  {
    title: "Solana Mobile Chapter 2 Activation",
    description: "Activation for Solana Mobile Chapter 2 - Seeker holders",
    sourceUrl: "https://x.com/solanamobile/status/1986116929720099119",
    isActive: true
  }
];

export const hasActiveActivations = () => {
  return activations.some(a => a.isActive);
};

const Activations = () => {

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 mb-8 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Active Activations</h2>
      <div className="space-y-4">
        {activations.map((activation, index) => (
          <Card key={index} className="shadow-xl hover:shadow-2xl transition-shadow duration-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <CardTitle className="text-xl">
                  {activation.title}
                </CardTitle>
                {activation.isActive && (
                  <Badge variant="success">
                    Active
                  </Badge>
                )}
              </div>
              <CardDescription className="mt-2">
                {activation.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link 
                href={activation.sourceUrl} 
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

export default Activations;
