'use client';

import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Separator } from './ui/separator';

const Footer = () => {
  const pathname = usePathname();
  const isOnActivationsPage = pathname === '/activations';

  return (
    <footer className="w-full py-6 px-4 mt-8 bg-muted/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-3 text-xs text-muted-foreground">
          {!isOnActivationsPage && (
            <>
              <div className="mb-4">
                <Link 
                  href="/activations" 
                  className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
                >
                  View Activations & Redemptions →
                </Link>
              </div>
              <Separator className="my-4" />
            </>
          )}
          <p>
            The assets and projects listed on this platform are for informational purposes only. 
            We do not endorse, guarantee, or verify the legitimacy of any listed assets or projects.
          </p>
          <p>
            Some content, banners, and links on this platform may be sponsored or paid endorsements. 
            We may receive commissions, compensation, or payment for featuring certain content, 
            including but not limited to banner advertisements and sponsored listings. 
            If you see anything incorrect or something that needs to be updated, please{' '}
            <a href="mailto:omakasemoney@gmail.com" className="text-primary hover:underline">
              let us know
            </a>.
          </p>
          <Separator className="my-4" />
          <p className="font-medium text-foreground">
            dev by{' '}
            <a 
              href="https://kwaji.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline"
            >
              kwaji
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
