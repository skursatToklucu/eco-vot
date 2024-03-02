import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const options = {
  plugins: {
    title: {
      display: true,
      text: "Prize Pool Breakdown In Dollars for Dota 2's The International 2022 (In Dollars)",
    },
  },
  responsive: true,
};

const data = {
  labels: [
    'Tundra Esports',
    'Team Secret',
    'Team Liquid',
    'Team Aster',
    'PSG.LGD',
    'Thunder Awaken',
    'beastcoast',
    'OG',
    'Evil Geniuses',
    'BOOM Esports',
    'Gaimin Gladiators',
    'Entity',
    'Hokori',
    'Team Spirit',
    'Fnatic',
    'Royal Never Give Up',
    'Soniqs',
    'Talon Esports',
    'BetBoom Team',
    'TSM',
  ],
  datasets: [{
    data: [
      8518822,
      2461033,
      1703810,
      1135835,
      662543,
      662543,
      473293,
      473293,
      378612,
      378612,
      378612,
      378612,
      283931,
      283931,
      283931,
      283931,
      47228,
      47228,
      47228,
      47228,
    ],
    backgroundColor: [
      '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf', '#1c1c1c', '#ff5733', '#00bfff', '#228b22', '#ff1493', '#dc143c', '#800000', '#ffa500', '#ffc0cb', '#000080'
    ],
    hoverBackgroundColor: [
      '#2078bb',
      '#ff8a1c',
      '#35a136',
      '#e02330',
      '#9967c6',
      '#92574d',
      '#ea7cbf',
      '#828282',
      '#c3cc31',
      '#1dbfdf',
      '#222222',
      '#ff6633',
      '#1ab8ff',
      '#2d9b2d',
      '#ff2dab',
      '#d40d34',
      '#8b0000',
      '#ffaa00',
      '#ffc8db',
      '#0000a0'
    ]
  }]
};

export default function DataPrizePool() {
  return (
    <div className="container mx-auto my-12 px-6 lg:px-8 sm:my-16 lg:my-20">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        Prize Pool Visualization
      </h2>
      <p className="my-4 text-gray-500">
        Below is the prize pool visualization for The International 2022 which shows in a pie graph form where the funds get distributed. Teams are listed from highest placing to lowest placing. Click the labels to remove them from the visualization and hover to see the prize pool payouts that each team recieved.
      </p>
      <Doughnut
        data={data}
        width={400}
        height={400}
        options={options}
      />
    </div>
  )
}