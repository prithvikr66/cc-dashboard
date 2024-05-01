"use client";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  defaults,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend
);

defaults.font.family = "poppins-bold";

export default function AreaChart({
  labels,
  datas,
}: {
  datas: any;
  labels: any;
}) {
  const [active, setActive] = useState("week");
  const [chartLabels, setChartLabels] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [totalOrders, setTotalOrders] = useState();

  useEffect(() => {
    setChartData(datas);
    setChartLabels(labels);
  }, [datas, labels]);

  const fetchLatestData = async (filter: string) => {
    const response = await axios.get(
      `http://localhost:3000/api/TotalOrders?interval=${filter}`
    );

    const data = await response.data;

    setChartLabels(data.labels);
    setChartData(data.datas);
    setTotalOrders(data.totalOrders);
  };

  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: "Data",
        data: chartData,
        fill: true,
        backgroundColor: function (context: any) {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "#F41DEB");
          gradient.addColorStop(1, "#F41DEB");
          return gradient;
        },
        borderColor: "#F41DEB",
        borderWidth: 0,
        pointRadius: 0,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
  };

  return (
    
    <div>
      <Line data={data} options={options} />
      <div className="flex justify-center items-center bg-gray-200 rounded-full py-2 px-4">
        {["Day", "Week", "Month", "Year"].map((item) => (
          <button
            key={item}
            className={`mx-2 text-sm px-4 py-2 rounded-full
                   ${
                     active === item.toLowerCase()
                       ? "bg-black text-white"
                       : "text-gray-700 bg-white"
                   }
                   transition duration-300 ease-in-out`}
            onClick={() => {
              setActive(item.toLowerCase());
              fetchLatestData(item);
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

{/* <div className="flex justify-center items-center bg-gray-200 rounded-full py-2 px-4">
        {["Day", "Week", "Month", "Year"].map((item) => (
          <button
            key={item}
            className={`mx-2 text-sm px-4 py-2 rounded-full
                   ${
                     active === item.toLowerCase()
                       ? "bg-black text-white"
                       : "text-gray-700 bg-white"
                   }
                   transition duration-300 ease-in-out`}
            onClick={() => {
              setActive(item.toLowerCase());
              fetchLatestData(item);
            }}
          >
            {item}
          </button>
        ))}
      </div> */}