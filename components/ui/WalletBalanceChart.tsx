"use client";
import React, { useState, useEffect } from "react";
import RevenueFilterButton from "./RevenueFilterButton";
import { Line } from "react-chartjs-2";
import { useTheme } from "next-themes";
import axios from "axios";
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
import CircularIndeterminate from "./Loader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
interface LineChartProps {
  balances: number[];
  months: string[];
}
// const BASE_URI = "http://localhost:3000";
const BASE_URI = "https://cc-dashboard-opal.vercel.app/";
const LineChart: React.FC<LineChartProps> = ({ balances, months }) => {
  const { theme } = useTheme();

  const [chartData, setChartData] = useState<number[]>([]);
  const [chartLabels, setChartLables] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setChartLables(months);
    setChartData(balances);
  }, []);
  const fetchLatestData = async (filter: string) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${BASE_URI}/api/WalletBalance?interval=${filter}`
      );

      const data = await response.data;
      console.log(data);
      setChartData(data.data);
      setChartLables(data.labels);
      setIsLoading(false);
    } catch (err: any) {
      console.log(err.message);
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
      title: {
        display: true,
        text: "Tokens removed from circulation (CCV2)",
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context: any) => {
            const index = context.dataIndex;
            const label = chartLabels[index];
            const value = chartData[index];

            return `${label}: ${value}`;
          },
        },
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
    <div className=" w-full h-[400px] xl:h-[500px] rounded-[16px] bg-[#ffffff] dark:bg-[#0D0D0D] shadow-lg dark:shadow-2xl mb-10">
      <div className=" p-7">
        <div className=" flex items-center justify-between">
          <div>
            <h3 className=" font-poppins-bold text-[25px] md:text-[32px] text-[#0C191E] dark:text-[#ffffff]">
              CryptoCart Vault
            </h3>
          </div>
          <div>
            <RevenueFilterButton onChangeHandler={fetchLatestData} />
          </div>
        </div>
        <div
          className={`${
            isLoading
              ? "flex items-center justify-center  mt-[100px] xl:mt-[150px]"
              : ""
          }`}
        >
          {isLoading ? (
            <CircularIndeterminate />
          ) : (
            <div>
              <div className="w-full h-[250px] xl:h-[350px]">
                <Line data={data} options={options} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LineChart;
