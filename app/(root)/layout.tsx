// React imports
import React from 'react';

// Next.js imports
import Image from 'next/image';

// Components
import MobileNav from '@/components/MobileNav';
import Sidebar from '@/components/Sidebar';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const loggedIn = await getLoggedInUser();

  if(!loggedIn) redirect('/sign-in');

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
