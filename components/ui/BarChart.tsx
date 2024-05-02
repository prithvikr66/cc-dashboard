"use client";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import peopleIcon from "@/public/icons/people.svg";
import Image from "next/image";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  chartData: number[];
  chartLabel: string[];
  totalUsers: number;
}

// const BASE_URI = "http://localhost:3000";
const BASE_URI = "https://cc-dashboard-opal.vercel.app/"


const BarChart: React.FC<BarChartProps> = ({
  chartData,
  chartLabel,
  totalUsers,
}) => {
  const [currentChartData, setCurrentChartData] = useState<number[]>();
  const [currentChartLabel, setCurrentChartLabel] = useState<string[]>();
  const [currentTotalUsers, setCurrentTotalUsers] = useState<number>();
  const [active, setActive] = useState<string>("Month");

  useEffect(() => {
    setCurrentChartData(chartData);
    setCurrentChartLabel(chartLabel);
    setCurrentTotalUsers(totalUsers);
  }, []);

  const fetchLatestData = async (filter: string) => {
    try {
      const response = await axios.get(
        `${BASE_URI}/api/NewVsReturning?interval=${filter}`
      );
      const data = response.data;
      setCurrentChartData(data.datas);
      setCurrentChartLabel(data.labels);
      setCurrentTotalUsers(data.totalUsers);
    } catch (err) {
      console.log(err);
    }
  };
  const data = {
    labels: currentChartLabel,
    datasets: [
      {
        data: currentChartData,
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options: any = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display:false,
        position: "top",
      },
      title: {
        display: false,
        text: "Customer Types",
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className=" w-1/2 h-[540px] rounded-[16px] bg-[#ffffff] dark:bg-[#0D0D0D] mr-5 shadow-lg dark:shadow-2xl">
      <div className=" p-7">
        <div className=" flex items-center justify-between">
          <div>
            <h3 className=" font-poppins-bold text-[32px] text-[#0C191E] dark:text-[#ffffff]">
              {currentTotalUsers}
            </h3>
            <p className=" font-poppins-medium text-[16px] text-[#3D3D3D] dark:text-[#8F95B2]">
              New customers
            </p>
          </div>
          <Image src={peopleIcon} alt="" />
        </div>
        <div className=" w-4/5 mx-auto h-[350px]">
          <Bar data={data} options={options}></Bar>
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
  );
};

export default BarChart;
