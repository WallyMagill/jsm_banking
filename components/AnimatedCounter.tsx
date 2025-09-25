'use client';

// React imports
import React from 'react';

// External library imports
import CountUp from 'react-countup';

interface AnimatedCounterProps {
  amount: number;
}

/**
 * AnimatedCounter component displays a number with smooth counting animation
 * @param amount - The final number to count up to
 */
const AnimatedCounter = ({ amount }: AnimatedCounterProps) => {
  return (
    <div className="w-full">
      <CountUp 
        duration={2}
        decimals={2}
        decimal=","
        prefix="$"
        end={amount}
      />
    </div>
  );
};

export default AnimatedCounter;