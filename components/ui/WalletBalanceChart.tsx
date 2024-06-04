"use client";
import React from "react";
import RevenueFilterButton from "./RevenueFilterButton";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const fetchLatestData = () => {};
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Line Chart Example",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className=" w-full h-[400px] xl:h-[500px] rounded-[16px] bg-[#ffffff] dark:bg-[#0D0D0D] shadow-lg dark:shadow-2xl mb-10" >
      <div className=" p-7">
        <div className=" flex items-center justify-between">
          <div>
            <h3 className=" font-poppins-bold text-[32px] text-[#0C191E] dark:text-[#ffffff]">
              123455
            </h3>
            <p className=" font-poppins-medium text-[16px] text-[#3D3D3D] dark:text-[#8F95B2]">
              Wallet Balance
            </p>
          </div>
          <div>
            <RevenueFilterButton onChangeHandler={fetchLatestData} />
          </div>
        </div>
        <div>
          <div className=" w-full h-[250px] xl:h-[350px]   ">
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineChart;
