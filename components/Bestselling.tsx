import axios from "axios";
import PieChart from "./ui/PieChart";
type SegmentData = {
  segmentName: string;
  segmentTotal: number;
};

const fetchBestSelling = async () => {
  try {
    const response = await axios.get(
      "https://staging-reportingapi.cryptocart.cc/summary"
    );
    const data = await response.data;
    const items = data.bestSellingByCategory.items;
    const sortedItems = items
      .sort((a: SegmentData, b: SegmentData) => b.segmentTotal - a.segmentTotal)
      .slice(0, 5);
    return sortedItems;
  } catch (err) {
    console.log(err);
  }
};

const Bestselling = async () => {
  const bestSellingData: SegmentData[] = await fetchBestSelling();
  const chartData = {
    labels: bestSellingData?.map((item) => item.segmentName),
    datasets: [
      {
        data: bestSellingData?.map((item) => item.segmentTotal),
        backgroundColor: [
          "#FF5E5D",
          "#FFDF5F",
          "#4DAEFF",
          "#9173FF",
          "#57FFA6",
        ],
        borderWidth: 0,
        borderAlign: "inner",
      },
    ],
  };
  return (
    <div className="w-full lg:w-1/2 h-[440px] xl:h-[540px] rounded-[16px] bg-[#ffffff] dark:bg-[#0D0D0D] lg:ml-5 shadow-lg dark:shadow-2xl">
      <PieChart chartData={chartData}></PieChart>
    </div>
  );
};

export default Bestselling;
