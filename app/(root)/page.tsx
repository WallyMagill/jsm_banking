// React imports
import React from 'react';

// Components
import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';

const Home = () => {
  // TODO: Replace with real authentication
  const loggedIn = {
    firstName: 'Walter',
    lastName: 'Magill',
    email: 'walter.g.magill@gmail.com'
  };

  return (
    <section className="home">
      <div className="home-content">
        {/* Main content header */}
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transaction efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

        {/* TODO: RECENT TRANSACTIONS */}
      </div>

      {/* Right sidebar with user profile and banks */}
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[
          { currentBalance: 123.50 },
          { currentBalance: 500.50 }
        ]}
      />
    </section>
  );
};

export default Home;