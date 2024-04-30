import axios from "axios";
import PieChart from "./ui/PieChart";
type SegmentData = {
  segmentName: string;
  segmentTotal: string;
};


const fetchBestSelling = async () => {
  const response = await axios.get(
    "https://staging-reportingapi.cryptocart.cc/summary"
  );
  const data = await response.data;
  return data.bestSellingByCategory.items;
};

const Bestselling = async () => {
  const bestSellingData: SegmentData[] = await fetchBestSelling();
  const chartData = {
    labels: bestSellingData.map((item) => item.segmentName),
    datasets: [
      {
        data: bestSellingData.map((item) => item.segmentTotal),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FF6384",
          "#36A2EB",
        ],
        borderWidth:0,
      },
    ],
  };
  return <div className=" w-1/2 h-[500px]">
    <PieChart chartData={chartData}></PieChart>
  </div>;
};

export default Bestselling;
