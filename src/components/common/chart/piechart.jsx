import React from "react";
import { Pie } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { formatBytes } from "../../../utils/common";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({fileTypeData}) => {
    // fileTypeData = [
    //     { "fileType": "image.jpg", "memoryUsage": 1024 },
    //     { "fileType": "document.pdf", "memoryUsage": 2048 },
    //     { "fileType": "image.png", "memoryUsage": 512 },
    //     { "fileType": "text.txt", "memoryUsage": 128 }
    //   ]
    const pieChartData = {
        labels: fileTypeData.map(file=>file.fileType),
        datasets: [
          {
            data: fileTypeData.map(file=>formatBytes(file.memoryUsage)),
            backgroundColor: [
                '#3CB371', // Medium sea green
                '#98FB98', // Pale green
                '#2E8B57', // Sea green
                '#8FBC8F', // Dark sea green
                '#20B2AA', // Light sea green
                '#32CD32', // Lime green
                '#FFDF00', // Golden yellow for contrast
              ],
            hoverOffset: 4,
          },
        ],
      };
  return (
    <div>
        <Pie data={pieChartData} />
    </div>
  );
};

export default PieChart;
