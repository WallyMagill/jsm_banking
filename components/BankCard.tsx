// React imports
import React from 'react';

// Next.js imports
import Link from 'next/link';
import Image from 'next/image';

// Utilities
import { formatAmount } from '@/lib/utils';

interface BankCardProps {
  account: any; // TODO: Define proper account type
  userName: string;
  showBalance?: boolean;
}

const BankCard = ({ account, userName, showBalance = true }: BankCardProps) => {
  return (
    <div className="flex flex-col">
      <Link href="/" className="bank-card">
        {/* Main card content */}
        <div className="bank-card_content">
          <div>
            <h1 className="text-16 font-semibold text-white">
              {account.name || userName}
            </h1>
            {showBalance && (
              <p className="font-ibm-plex-serif font-black text-white">
                {formatAmount(account.currentBalance || 0)}
              </p>
            )}
          </div>

          {/* Card details */}
          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 font-semibold text-white">
                {userName}
              </h1>
              <h2 className="text-12 font-semibold text-white">
                ●● / ●●
              </h2>
            </div>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● <span className="text-16">1234</span>
            </p>
          </article>
        </div>

        {/* Card icons */}
        <div className="bank-card_icon">
          <Image
            src="/icons/Paypass.svg"
            width={20}
            height={24}
            alt="pay"
          />
          <Image
            src="/icons/mastercard.svg"
            width={45}
            height={32}
            alt="mastercard"
            className="ml-5"
          />
        </div>

        {/* Background pattern */}
        <Image
          src="/icons/lines.png"
          width={316}
          height={190}
          alt="lines"
          className="absolute top-0 left-0"
        />
      </Link>

      {/* TODO: COPY */}
    </div>
  );
};

export default BankCard;