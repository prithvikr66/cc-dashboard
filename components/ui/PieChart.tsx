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
  const combinedData = chartData.labels.map((label:any, index:any) => ({
    label,
    data: chartData.datasets[0].data[index],
    backgroundColor: chartData.datasets[0].backgroundColor[index],
  }));

  combinedData.sort((a:any, b:any) => b.data - a.data);

  const top5Data = combinedData.slice(0, 5);

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
          generateLabels: (chart:any) => {
            const data = chart.data;
            return data.labels.map((label:any, index:any) => ({
              text: label,
              fillStyle: data.datasets[0].backgroundColor[index],
              hidden: false,
              index: index
            })).filter((labelItem:any) => {
              return top5Data.some((item:any) => item.label === labelItem.text);
            });
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="">
      <div className="p-7">
        <div className="flex items-center justify-between">
          <h3 className="font-poppins-bold text-[32px] text-[#0C191E] dark:text-[#ffffff]">
            Best Selling
          </h3>
          <Image src={starIcon} alt="" />
        </div>
        <div className="h-[300px] mt-10 xl:h-[400px]">
          <Pie data={chartData} options={options}></Pie>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
