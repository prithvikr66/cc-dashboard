"use client";
import React, { useState, useEffect } from "react";
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
interface LineChartProps {
  balances: number[];
  months: string[];
}

const LineChart: React.FC<LineChartProps> = ({ balances, months }) => {
  const [chartData, setChartData] = useState<number[]>([]);
  const [chartLabels, setChartLables] = useState<string[]>([]);

  useEffect(() => {
    setChartLables(months);
    setChartData(balances);
  }, []);
  const fetchLatestData = () => {
    
  };
  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: "Wallet Balances",
        data: chartData,
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
        text: "Wallet Balances(USDT)",
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
            <h3 className=" font-poppins-bold text-[32px] text-[#0C191E] dark:text-[#ffffff]">
              Wallet Balance
            </h3>
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
