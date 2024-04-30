"use client";
import React from "react";
import { Line } from "react-chartjs-2";
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
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Data",
        data: datas,
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

  return <Line data={data} options={options} />;
}
