// src/components/ChartLibrary.js

import React from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from 'chart.js';

// Registering Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

const ChartLibrary = () => {
  // Bar Chart Data
  const barChartData = {
    labels: ['Users', 'Admins', 'Templates', 'Contact Us', 'Features'],
    datasets: [
      {
        label: 'Total Counts',
        data: [45, 12, 35, 20, 60], // Replace with dynamic data
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Line Chart Data
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2], // Replace with dynamic data
        fill: false,
        borderColor: '#4bc0c0',
        tension: 0.1,
      },
    ],
  };

  // Doughnut Chart Data
  const doughnutChartData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'Colors',
        data: [300, 50, 100], // Replace with dynamic data
        backgroundColor: ['#ff0000', '#0000ff', '#ffff00'],
        borderColor: '#fff',
        borderWidth: 1,
      },
    ],
  };

  // Chart Options
  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Dashboard Overview',
      },
    },
  };

  return (
    <div className="chart-container">
      <div className="chart-box">
        <h3>Bar Chart</h3>
        <Bar data={barChartData} options={chartOptions} />
      </div>
      <div className="chart-box">
        <h3>Line Chart</h3>
        <Line data={lineChartData} options={chartOptions} />
      </div>
      <div className="chart-box">
        <h3>Doughnut Chart</h3>
        <Doughnut data={doughnutChartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default ChartLibrary;
