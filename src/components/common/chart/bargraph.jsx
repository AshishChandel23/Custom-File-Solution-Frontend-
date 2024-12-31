import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGraph = ({ folderData, typeFor='Memory' }) => {
 
  const dataForMemory = {
    labels: folderData.map(item => item.folderName), 
    datasets: [
      {
        label: 'Memory Usage (MB)',
        data: folderData.map(item => item.memoryUsage), 
        backgroundColor: 'rgba(84, 220, 98, 0.5)', 
        borderColor: 'rgb(75, 192, 89)',
        borderWidth: 1,
      },
    ],
  };


  const optionsForMemory = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        // text: 'Folder Memory Usage',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Folders',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Memory Usage (MB)',
        },
        beginAtZero: true,
      },
    },
  };

  const dataForCount = {
    labels: folderData.map(item => item.folderName), 
    datasets: [
      {
        label: 'Count Usage',
        data: folderData.map(item => item.totalFile), 
        backgroundColor: 'rgba(84, 220, 98, 0.5)', 
        borderColor: 'rgb(75, 192, 89)',
        borderWidth: 1,
      },
    ],
  };


  const optionsForCount = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        // text: 'Folder Memory Usage',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Folders',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Count Usage',
        },
        beginAtZero: true,
      },
    },
  };
  if(typeFor==='Memory')
    return (
        <div>
          <Bar data={dataForMemory} options={optionsForMemory} />
        </div>
    );
  else return (
        <div>
        <Bar data={dataForCount} options={optionsForCount} />
        </div>
  );
};

export default BarGraph;
