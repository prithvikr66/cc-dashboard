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
const BASE_URI = "http://localhost:3000"
// const BASE_URI = "https://cc-dashboard-opal.vercel.app/"
export default function AreaChart({
  labels,
  datas,
}: {
  datas: any;
  labels: any;
}) {
  const [active, setActive] = useState("Year");
  const [chartLabels, setChartLabels] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [totalOrders, setTotalOrders] = useState();

  const { theme } = useTheme();

  useEffect(() => {
    setChartData(datas);
    setChartLabels(labels);
  }, [datas, labels]);

  const fetchLatestData = async (filter: string) => {
    try {
      const response = await axios.get(
        `${BASE_URI}/api/TotalOrders?interval=${filter}`
      );

      const data = await response.data;

      setChartLabels(data.labels);
      setChartData(data.datas);
      setTotalOrders(data.totalOrders);
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
            gradient.addColorStop(0, "#F41DEB");
            gradient.addColorStop(0.2, "#F146EC");
            gradient.addColorStop(0.4, "#EF6FED");
            gradient.addColorStop(0.6, "#EC99EE");
            gradient.addColorStop(0.8, "#FFFFFF");
            gradient.addColorStop(1, "#FFFFFF");
            return gradient;
          } else {
            gradient.addColorStop(0, "#F41DEB");
            gradient.addColorStop(0.2, "#F146EC");
            gradient.addColorStop(0.4, "#EF6FED");
            gradient.addColorStop(0.6, "#7F4D7D");
            gradient.addColorStop(0.8, "#2C292C");
            gradient.addColorStop(1, "#242224");
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
    <div>
      <div className=" w-full h-[350px]   ">
        <Line data={data} options={options} />
      </div>

      <div className=" w-4/5 mx-auto h-[50px] bg-[#E7EBF0] dark:bg-[#192028] rounded-[200px] mt-3 flex flex-col  justify-center">
        <div className=" flex justify-between items-center">
          <div
            className={`bg-[#0C191E] dark:bg-[#ffffff] h-[50px] w-1/5 flex items-center justify-center rounded-[200px] cursor-pointer  ${
              active === "Today"
                ? " bg-opacity-100 dark:bg-opacity-100 text-[#FFFFFF] dark:text-[#0D0D0D]"
                : "bg-opacity-0 dark:bg-opacity-0 text-[#8F95B2]"
            }  `}
            onClick={() => {
              setActive("Today");
              fetchLatestData("Day");
            }}
          >
            <p className=" font-poppins-medium text-[14px] ">Today</p>
          </div>
          <div
            className={` ${
              active === "Week"
                ? " bg-opacity-100 dark:bg-opacity-100 text-[#FFFFFF] dark:text-[#0D0D0D]"
                : "bg-opacity-0 dark:bg-opacity-0 text-[#8F95B2]"
            }  bg-[#0C191E] dark:bg-[#ffffff] h-[50px] w-1/5 flex items-center justify-center rounded-[200px] cursor-pointer`}
            onClick={() => {
              setActive("Week");
              fetchLatestData("Week");
            }}
          >
            <p className=" font-poppins-medium text-[14px] ">Week</p>
          </div>
          <div
            className={` ${
              active === "Month"
                ? " bg-opacity-100 dark:bg-opacity-100 text-[#FFFFFF] dark:text-[#0D0D0D]"
                : "bg-opacity-0 dark:bg-opacity-0 text-[#8F95B2] "
            }  bg-[#0C191E] dark:bg-[#ffffff] h-[50px] w-1/5 flex items-center justify-center rounded-[200px] cursor-pointer`}
            onClick={() => {
              setActive("Month");
              fetchLatestData("Month");
            }}
          >
            <p className=" font-poppins-medium text-[14px] ">Month</p>
          </div>
          <div
            className={` ${
              active === "Year"
                ? " bg-opacity-100 dark:bg-opacity-100 text-[#FFFFFF] dark:text-[#0D0D0D]"
                : "bg-opacity-0 dark:bg-opacity-0 text-[#8F95B2]"
            }  bg-[#0C191E] dark:bg-[#ffffff] h-[50px] w-1/5 flex items-center justify-center rounded-[200px] cursor-pointer`}
            onClick={() => {
              setActive("Year");
              fetchLatestData("Year");
            }}
          >
            <p className=" font-poppins-medium text-[14px] ">Year</p>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="flex justify-center items-center bg-gray-200 rounded-full py-2 px-4">
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
      </div> */
}
