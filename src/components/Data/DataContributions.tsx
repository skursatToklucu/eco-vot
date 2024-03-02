import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';


export default function DataContributions() {
  const [amount, setAmount] = React.useState(100);

  const con = amount / 4;

  const options = {
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Amount Given to Players if You Contribute $${amount} to The International 2022 (In Dollars)`,
      },
      legend: {
        display: false
      },
      datalabels: {
        color: '#000',
        anchor: 'end' as "end",
        align: 'end' as "end",
        offset: -4
      }
    },
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
        c(con, 0.45),
        c(con, 0.13),
        c(con, 0.09),
        c(con, 0.06),
        c(con, 0.035),
        c(con, 0.035),
        c(con, 0.025),
        c(con, 0.025),
        c(con, 0.02),
        c(con, 0.02),
        c(con, 0.02),
        c(con, 0.02),
        c(con, 0.015),
        c(con, 0.015),
        c(con, 0.015),
        c(con, 0.015),
        c(con, 0.0025),
        c(con, 0.0025),
        c(con, 0.0025),
        c(con, 0.0025),
      ],
      backgroundColor: [
        '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf', '#1c1c1c', '#ff5733', '#00bfff', '#228b22', '#ff1493', '#dc143c', '#800000', '#ffa500', '#ffc0cb', '#000080'
      ],
    }]
  };


  return (
    <div className="container mx-auto my-12 px-6 lg:px-8 sm:my-16 lg:my-20">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        Your Contribution Split
      </h2>
      <p className="my-4 text-gray-500">
        We have autofilled an amount of $100 USD as an example of what someone might spend on the battlepass. You can see the breakdown of what each team recieves below. In order for the lowest placing teams such as TSM or Soniqs to recieve $1, you would have to give valve $1600. Test it out below!
      </p>
      <div className="flex flex-col mx-auto my-3 space-y-4 max-w-xs sm:flex-row sm:space-y-0">
        <div className="grow relative w-full">
          <label
            htmlFor="cont"
            className="hidden mb-2 text-sm font-medium text-gray-900"
          >
            Your Contribution
          </label>
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <CurrencyDollarIcon className="w-6 h-6 text-gray-500" />
          </div>
          <input
            className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-indigo-500"
            placeholder="You Contribution"
            max={10000000}
            min={1}
            type="number"
            id="cont"
            onChange={(e) => setAmount(parseInt(e.target.value))}
            value={amount}
          />
        </div>
      </div>
      <Bar options={options} data={data} plugins={[ChartDataLabels]} />
    </div>
  );
}

function c(amount: number, percentage: number) {
  const a = amount * percentage;
  return Math.round(a * 100) / 100
}