import React from 'react';
import { Bar } from 'react-chartjs-2';

const Statistics = () => {
  const data = {
    labels: ['Less than 7 points', '7-10 points', 'More than 10 points'],
    datasets: [
      {
        label: 'Number of Students',
        data: [3, 4, 13],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default Statistics;