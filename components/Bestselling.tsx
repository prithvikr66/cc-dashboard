import axios from "axios";
import PieChart from "./ui/PieChart";
type SegmentData = {
  segmentName: string;
  segmentTotal: string;
};

const fetchBestSelling = async () => {
  try {
    const response = await axios.get(
      "https://staging-reportingapi.cryptocart.cc/summary"
    );
    const data = await response.data;
    return data.bestSellingByCategory.items;
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
          "#6432F7",
          "#C1ADFC",
          "#9375FF",
          "#CD5069",
          "#55B2FF",
          "#55FFA5",
          "#9375FF",
          "#F41DEB",
          "#FFDF5C",
          "#48E640",
          "#B943F0",
          "#FCFEB2",
          "#FF5352",
          "#FCFEB2",
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
