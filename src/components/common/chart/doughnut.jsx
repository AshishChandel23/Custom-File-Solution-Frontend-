import React from "react";
import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { formatBytes } from "../../../utils/common";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ fileTypeData }) => {
    // fileTypeData =
    // [
    //     { "fileType": "image.jpg", "fileCount": 1024 },
    //     { "fileType": "document.pdf", "fileCount": 2048 },
    //     { "fileType": "image.png", "fileCount": 512 },
    //     { "fileType": "text.txt", "fileCount": 128 }
    // ]
    const doughnutChartData = {
        labels: fileTypeData.map((file) => file.fileType),
        datasets: [
            {
                data: fileTypeData.map((file) => file.fileCount),
                backgroundColor: [
                    '#3CB371', // Medium sea green
                    '#98FB98', // Pale green
                    '#2E8B57', // Sea green
                    '#8FBC8F', // Dark sea green
                    '#20B2AA', // Light sea green
                    '#32CD32', // Lime green
                    '#FFD700', // Gold
                    '#FFA500', // Orange
                    '#4682B4', // Steel blue
                ],
                hoverOffset: 4,
            },
        ],
    };

    return (
        <div>
            <Doughnut data={doughnutChartData} />
        </div>
    );
};

export default DoughnutChart;
