"use client";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import Image from "next/image";
import starIcon from "../../public/icons/globe-network.svg"
Chart.register(ArcElement, Tooltip, Legend);

interface ChartData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
  }[];
}

const PieChart = ({ chartData }: { chartData: any }) => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className=" w-1/2 h-[440px] bg-[#ffffff] dark:bg-[#0D0D0D] rounded-[16px]">
      <div className=" p-7">
        <div className=" flex items-center justify-between">
        <h3 className=" font-poppins-bold text-[32px] text-[#0C191E] dark:text-[#ffffff]">
            Bestselling
          </h3>
          <Image src={starIcon} alt={""}/>
        </div>
        <Pie data={chartData} options={options}></Pie>
      </div>
    </div>
  );
};

export default PieChart;
