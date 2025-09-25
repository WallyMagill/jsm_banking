// React imports
import React from 'react';

// Components
import AnimatedCounter from './AnimatedCounter';
import DoughnutChart from './DoughnutChart';

interface TotalBalanceBoxProps {
  accounts?: Account[]; // TODO: Import Account type from types
  totalBanks: number;
  totalCurrentBalance: number;
}

/**
 * TotalBalanceBox component displays user's total balance and account summary
 * @param accounts - Array of user's bank accounts
 * @param totalBanks - Total number of connected banks
 * @param totalCurrentBalance - Total current balance across all accounts
 */
const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
      {/* Chart section */}
      <div className="total-balance-chart">
        <DoughnutChart accounts={accounts} />
      </div>

      {/* Balance information */}
      <div className="flex flex-col gap-6">
        <h2 className="header-2">
          Bank Accounts: {totalBanks}
        </h2>
        
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">
            Total Current Balance
          </p>

          <div className="total-balance-amount flex-center">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;