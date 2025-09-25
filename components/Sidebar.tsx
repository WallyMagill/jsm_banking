'use client';

// React imports
import React from 'react';

// Next.js imports
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Constants and utilities
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Footer from './Footer';

interface SidebarProps {
  user: User; // TODO: Import User type from types
}

/**
 * Sidebar component provides desktop navigation menu
 * @param user - User data object
 */
const Sidebar = ({ user }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        {/* Logo section */}
        <Link href="/" className="mb-12 flex cursor-pointer items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
            className="size-[24] max-xl:size-14"
          />
          <h1 className="sidebar-logo">
            Horizon
          </h1>
        </Link>

        {/* Navigation links */}
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn('sidebar-link', {
                'bg-bank-gradient': isActive
              })}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    'brightness-[3] invert-0': isActive
                  })}
                />
              </div>
              <p className={cn('sidebar-label', {
                '!text-white': isActive
              })}>
                {item.label}
              </p>
            </Link>
          );
        })}

        {/* TODO: Add user profile section */}
      </nav>
      
      <Footer user={user} /> 
    </section>
  );
};

export default Sidebar;