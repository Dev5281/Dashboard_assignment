import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  LineController,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  LineController,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  const { totalEarnings, paymentAwaited, paymentOverdue } = useSelector(
    (state) => state.dashboard
  );

  const [selectedPeriod, setSelectedPeriod] = useState('3Months'); // default selection

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Income',
        data: [40, 55, 60, 45, 65, 80],
        backgroundColor: '#a78bfa',
        yAxisID: 'y',
      },
      {
        label: 'Growth',
        data: [50, 60, 45, 55, 70, 85],
        borderColor: '#8b5cf6',
        backgroundColor: '#8b5cf6',
        yAxisID: 'y1',
        type: 'line',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    interaction: { mode: 'index', intersect: false },
    stacked: false,
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: { drawOnChartArea: false },
        min: 0,
        max: 100,
      },
    },
  };

  const periods = [
    { label: '1Month', value: '1Month' },
    { label: '3Months', value: '3Months' },
    { label: '1Year', value: '1Year', icon: '👑' },
    { label: 'Custom', value: 'Custom', icon: '📅' },
  ];

  return (
    <div className="p-4 space-y-4">
      <div className='w-full flex justify-center items-center text-center px-2'>
        <p className="text-xs sm:text-sm md:text-base text-purple-900 mt-1 max-w-md">
          or Upload an existing invoice and set payment remainder.
        </p>
      </div>

      {/* Time Period Filter */}
      <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-gray-600 font-semibold text-sm">Time Period</h3>
          <span className="text-xs text-gray-400">
            dd:mm:yyyy - dd:mm:yyyy
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {periods.map((p) => (
            <button
              key={p.value}
              onClick={() => setSelectedPeriod(p.value)}
              className={`px-3 py-1 rounded-full border text-sm flex items-center gap-1 transition
                ${
                  selectedPeriod === p.value
                    ? 'bg-purple-100 text-purple-600 border-purple-300 font-medium'
                    : 'text-gray-500 hover:bg-purple-50'
                }`}
            >
              {p.icon && <span>{p.icon}</span>} {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Total Earnings */}
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h3 className="text-gray-500">Total Earnings</h3>
        <p className="text-2xl font-bold mt-1">
          ${totalEarnings.toLocaleString()}
        </p>
      </div>

      {/* Payment Awaited + Overdue */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="text-gray-500">Payment Awaited</h3>
          <p className="text-xl font-bold mt-1 text-blue-500">
            ${paymentAwaited.toLocaleString()}
          </p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="text-gray-500">Payment Overdue</h3>
          <p className="text-xl font-bold mt-1 text-orange-500">
            ${paymentOverdue.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Income Trend */}
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h3 className="text-lg font-semibold mb-2">Income Trend</h3>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Analytics;
