"use client";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { useTheme } from "next-themes";
import cartIcon from "@/public/icons/shopping-cart.svg"
import Image from "next/image";
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
// const BASE_URI = "http://localhost:3000"
const BASE_URI = "https://cc-dashboard-opal.vercel.app/"
export default function AreaChart({
  labels,
  datas,
  totalOrdersProp
}: {
  datas: any;
  labels: any;
  totalOrdersProp:any
}) {
  const [active, setActive] = useState("Year");
  const [chartLabels, setChartLabels] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [totalOrders, setTotalOrders] = useState();

  const { theme } = useTheme();

  useEffect(() => {
    setChartData(datas);
    setChartLabels(labels);
    setTotalOrders(totalOrdersProp)
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
    <div className=" w-full lg:w-1/2 h-[440px] xl:h-[540px] rounded-[16px] bg-[#ffffff] dark:bg-[#0D0D0D] lg:mr-5 shadow-lg dark:shadow-2xl">
      <div className=" p-7">
        <div className=" flex items-center justify-between">
          <div>
            <h3 className=" font-poppins-bold text-[32px] text-[#0C191E] dark:text-[#ffffff]">
              {totalOrders}
            </h3>
            <p className=" font-poppins-medium text-[16px] text-[#3D3D3D] dark:text-[#8F95B2]">
              Total Orders
            </p>
          </div>
          <Image src={cartIcon} alt="" />
        </div>
        <div>
      <div className=" w-full h-[250px]  xl:h-[350px] ">
        <Line data={data} options={options} />
      </div>

      <div className=" w-4/5 mx-auto h-[40px] 2xl:h-[50px] bg-[#E7EBF0] dark:bg-[#192028] rounded-[200px] mt-3 flex flex-col  justify-center">
        <div className=" flex justify-between items-center">
          <div
            className={`bg-[#0C191E] dark:bg-[#ffffff] h-[40px] 2xl:h-[50px] w-1/5 flex items-center justify-center rounded-[200px] cursor-pointer  ${
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
            }  bg-[#0C191E] dark:bg-[#ffffff] h-[40px] 2xl:h-[50px] w-1/5 flex items-center justify-center rounded-[200px] cursor-pointer`}
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
            }  bg-[#0C191E] dark:bg-[#ffffff] h-[40px] 2xl:h-[50px] w-1/5 flex items-center justify-center rounded-[200px] cursor-pointer`}
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
            }  bg-[#0C191E] dark:bg-[#ffffff] h-[40px] 2xl:h-[50px] w-1/5 flex items-center justify-center rounded-[200px] cursor-pointer`}
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
      </div>
    </div>
  );
}

