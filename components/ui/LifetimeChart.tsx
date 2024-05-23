"use client";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { useTheme } from "next-themes";

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
import RevenueFilterButton from "./RevenueFilterButton";
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
const BASE_URI = "http://localhost:3000";
// const BASE_URI = "https://cc-dashboard-opal.vercel.app/"
export default function LifetimeChart({
  labels,
  datas,
  totalRevenueProp,
}: {
  datas: any;
  labels: any;
  totalRevenueProp: any;
}) {
  const [chartLabels, setChartLabels] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState();

  const { theme } = useTheme();

  useEffect(() => {
    setChartData(datas);
    setChartLabels(labels);
    setTotalRevenue(totalRevenueProp);
  }, [datas, labels]);

  const fetchLatestData = async (filter: string) => {
    try {
      console.log(filter)
      const response = await axios.get(
        `${BASE_URI}/api/TotalRevenue?interval=${filter}`
      );

      const data = await response.data;

      setChartLabels(data.labels);
      setChartData(data.datas);
      setTotalRevenue(data.totalOrders);
    } catch (err) {
      console.log(err);
    }
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
          if (theme === "light") {
            gradient.addColorStop(0, "#49E641");
            gradient.addColorStop(0.2, "#49E641");
            gradient.addColorStop(0.4, "#71EC6B");
            gradient.addColorStop(0.6, "#A9F3A5");
            gradient.addColorStop(0.8, "#E2FBE1");
            gradient.addColorStop(1, "#FAFEFA");
            return gradient;
          } else {
            gradient.addColorStop(0, "#48E640");
            gradient.addColorStop(0.2, "#48E640");
            gradient.addColorStop(0.4, "#57C752");
            gradient.addColorStop(0.6, "#5DA25A");
            gradient.addColorStop(0.8, "#3C453C");
            gradient.addColorStop(1, "#151515");
            return gradient;
          }
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
    maintainAspectRatio: false,
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
    <div className=" w-full h-[500px] rounded-[16px] bg-[#ffffff] dark:bg-[#0D0D0D] shadow-lg dark:shadow-2xl">
      <div className=" p-7">
        <div className=" flex items-center justify-between">
          <div>
            <h3 className=" font-poppins-bold text-[32px] text-[#0C191E] dark:text-[#ffffff]">
              {`$${totalRevenue}`}
            </h3>
            <p className=" font-poppins-medium text-[16px] text-[#3D3D3D] dark:text-[#8F95B2]">
              Total Revenue
            </p>
          </div>
          <div>
            <RevenueFilterButton onChangeHandler={fetchLatestData}/>
          </div>
        </div>
        <div>
          <div className=" w-full h-[350px]   ">
            <Line data={data} options={options} />
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
}
