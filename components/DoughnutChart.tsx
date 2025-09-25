'use client';

// React imports
import React from 'react';

// Chart.js imports
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

/**
 * DoughnutChart component displays account data in a doughnut chart format
 * @param accounts - Array of account data to display
 */
const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  // TODO: Use accounts data to generate dynamic chart data
  console.log('Accounts data:', accounts);
  const data = {
    datasets: [
      {
        label: 'Banks',
        data: [1250, 2500, 3750],
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
      }
    ],
    labels: ['Bank 1', 'Bank 2', 'Bank 3']
  };

  return (
    <Doughnut 
      data={data} 
      options={{
        cutout: '60%',
        plugins: {
          legend: {
            display: false
          }
        }
      }}
    />
  );
};

export default DoughnutChart;