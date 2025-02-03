# React Chart.js Component Library

This is a React component library that uses [Chart.js](https://www.chartjs.org/) to render different types of charts such as Bar, Line, Doughnut, and Radar. This library is designed to be easily integrated into an existing React application to visualize data in a customizable and responsive manner.

## Features

- **Bar Chart**: Visualize data in bars for comparison.
- **Line Chart**: Display trends over time with a line graph.
- **Doughnut Chart**: Show percentage distribution using a doughnut chart.
- **Radar Chart**: Display data with multiple axes in a radial layout.
- **Customizable**: Easily adjust chart data, labels, colors, and more.

## Installation

1. **Install Dependencies**:

   To integrate the chart components into your React project, you need to install `react-chartjs-2` and `chart.js`:

   ```bash
   npm install chart.js react-chartjs-2

   ```

2. **Use the Chart Components**:

   Once the dependencies are installed, you can import and use the chart components in your React application. Below is a basic example:

   ```jsx
   // src/App.js
   import React from 'react';
   import { Bar, Line, Doughnut } from 'react-chartjs-2';
   import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement } from 'chart.js';
   import './App.css';

   // Register Chart.js components
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

   const App = () => {
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
       <div className="App">
         <h1>React Chart.js Dashboard</h1>
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
       </div>
     );
   };

   export default App;
   ```

3. **Add Optional Styles**:

   If you want to customize the layout of the charts, you can add styles in your `App.css`. Here’s a simple layout for displaying the charts:

   ```css
   /* src/App.css */

   .App {
     text-align: center;
     margin: 20px;
   }

   .chart-container {
     display: flex;
     justify-content: space-around;
     flex-wrap: wrap;
     gap: 20px;
   }

   .chart-box {
     width: 300px;
     padding: 20px;
     background-color: #fff;
     border-radius: 8px;
     box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
   }

   h3 {
     margin-bottom: 20px;
   }
   ```

## Customization

You can easily modify the chart data, labels, and options based on your requirements.

1. **Modifying Chart Data**:

   Each chart component (Bar, Line, Doughnut) receives data as a prop. You can replace the static data with dynamic data from your API or state. For example:

   ```javascript
   const barChartData = {
     labels: ['Users', 'Admins', 'Templates', 'Contact Us', 'Features'],
     datasets: [
       {
         label: 'Total Counts',
         data: [userList, adminList, templateList, contactusList, featureList], // Dynamic data
         backgroundColor: 'rgba(75, 192, 192, 0.5)',
         borderColor: 'rgba(75, 192, 192, 1)',
         borderWidth: 1,
       },
     ],
   };
   ```

2. **Chart Options**:

   The chart options are highly customizable. You can modify the chart’s title, legends, tooltips, and other aspects in the `chartOptions` object.

   Example:

   ```javascript
   const chartOptions = {
     responsive: true,
     plugins: {
       title: {
         display: true,
         text: 'Dashboard Overview',
       },
     },
     scales: {
       x: {
         beginAtZero: true,  // Ensures the x-axis starts at zero
       },
       y: {
         beginAtZero: true,  // Ensures the y-axis starts at zero
       },
     },
   };
   ```

  

## Example Usage

Below is a minimal example of using the `Bar` chart in your React component:

```jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const customChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Sales',
      data: [10, 20, 30, 40, 50], // Example data
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const CustomChart = () => (
  <div className="chart-container">
    <Bar data={customChartData} />
  </div>
);

export default CustomChart;
```

## References

- [Chart.js Documentation](https://www.chartjs.org/docs/latest/)
- [Chart.js Examples](https://www.chartjs.org/samples/latest/)
