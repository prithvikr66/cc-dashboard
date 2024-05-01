"use client";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend, defaults } from "chart.js";
import Image from "next/image";
import starIcon from "../../public/icons/star.svg";
Chart.register(ArcElement, Tooltip, Legend);
defaults.font.family = "poppins-medium";
interface ChartData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
  }[];
}

const PieChart = ({ chartData }: { chartData: any }) => {
  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: "#8F95B2",
          font: {
            size: 14,
          },

          padding: 15,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };
  return (
    <div className="">
      <div className=" p-7  ">
        <div className=" flex items-center justify-between">
          <h3 className=" font-poppins-bold text-[32px] text-[#0C191E] dark:text-[#ffffff]">
            Bestselling
          </h3>
          <Image src={starIcon} alt={""} />
        </div>
        <div className=" h-[400px] mt-10">
          <Pie data={chartData} options={options}></Pie>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
