// React imports
import React from 'react';

// Next.js imports
import Image from 'next/image';
import { redirect } from 'next/navigation';

// Components
import MobileNav from '@/components/MobileNav';
import Sidebar from '@/components/Sidebar';

// Actions
import { getLoggedInUser } from '@/lib/actions/user.actions';

interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * Root layout component for authenticated pages
 * Provides navigation sidebar and mobile navigation
 * Redirects to sign-in if user is not authenticated
 * @param children - Child components to render
 */
export default async function RootLayout({ children }: RootLayoutProps) {
  const loggedIn = await getLoggedInUser();

  if (!loggedIn) redirect('/sign-in');

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
