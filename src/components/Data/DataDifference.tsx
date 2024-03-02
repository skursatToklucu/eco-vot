import React from 'react';
import { Bar } from 'react-chartjs-2';

const options = {
  plugins: {
    title: {
      display: true,
      text: "Contribution Vs Payout for Dota 2's The International 2022 (In Dollars)",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['Valve', 'Players'];

const data = {
  labels,
  datasets: [
    {
      label: 'Contribution',
      data: [51992325, 18930775],
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'Expenditures',
      data: [-1600000, -69323100],
      backgroundColor: 'rgb(255, 99, 132)',
    },
  ],
};

export default function DataDifference() {
  return (
    <div className="container mx-auto my-12 px-6 lg:px-8 sm:my-16 lg:my-20">
      <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        Total Contributions and Expenditures
      </h3>
      <p className="my-4 text-gray-500">
        The below chart shows the total contributions and expenditures for both Valve and the player base. Expenditures are marked as negatives and contributions are marked as positive.
      </p>
      <Bar options={options} data={data} />
    </div>
  )
}