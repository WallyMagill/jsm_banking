// React imports
import React from 'react';

// Next.js imports
import Image from 'next/image';
import Link from 'next/link';

// Components
import BankCard from './BankCard';

interface RightSidebarProps {
  user: User | null; // TODO: Import User type from types
  transactions: Transaction[]; // TODO: Import Transaction type from types
  banks: Account[]; // TODO: Import Account type from types
}

/**
 * RightSidebar component displays user profile and bank accounts
 * @param user - User data object (null if not authenticated)
 * @param transactions - Array of user transactions
 * @param banks - Array of user's bank accounts
 */
const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  // TODO: Implement transactions display functionality
  console.log('Transactions data:', transactions);
  // Don't render if user is null
  if (!user) {
    return null;
  }

  return (
    <aside className="right-sidebar">
      {/* User profile section */}
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-blue-500">
              {user.name?.[0] || 'U'}
            </span>
          </div>

          <div className="profile-details">
            <h1 className="profile-name">
              {user.name || 'User'}
            </h1>
            <p className="profile-email">
              {user.email || 'No email'}
            </p>
          </div>
        </div>
      </section>

      {/* Banks section */}
      <section className="banks">
        <div className="flex w-full justify-between">
          <h2 className="header-2">
            My Banks
          </h2>
          <Link href="/" className="flex gap-2">
            <Image
              src="/icons/plus.svg"
              width={20}
              height={20}
              alt="plus"
            />
            <h2 className="text-14 font-semibold text-grey-600">
              Add Bank
            </h2>
          </Link>
        </div>

        {/* Bank cards display */}
        {banks?.length > 0 && (
          <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
            <div className="relative z-10">
              <BankCard
                key={banks[0].id}
                account={banks[0]}
                userName={user.name}
                showBalance={false}
              />
            </div>
            {banks[1] && (
              <div className="absolute right-0 top-8 z-0 w-[90%]">
                <BankCard
                  key={banks[1].id}
                  account={banks[1]}
                  userName={user.name}
                  showBalance={false}
                />
              </div>
            )}
          </div>
        )}
      </section>
    </aside>
  );
};

export default RightSidebar;