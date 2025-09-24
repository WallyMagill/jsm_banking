// React imports
import React from 'react';

// Next.js imports
import Image from 'next/image';

// Components
import MobileNav from '@/components/MobileNav';
import Sidebar from '@/components/Sidebar';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  // TODO: Replace with real authentication
  const loggedIn = {
    firstName: 'Wally',
    lastName: 'Magill'
  };

  return (
    <main className="flex h-screen w-full font-inter">
      {/* Desktop sidebar navigation */}
      <Sidebar user={loggedIn} />

      {/* Main content area */}
      <div className="flex size-full flex-col">
        {/* Top navigation bar */}
        <div className="root-layout">
          <Image
            src="/icons/logo.svg"
            width={30}
            height={30}
            alt="menu icon"
          />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        
        {/* Page content */}
        {children}
      </div>
    </main>
  );
}
