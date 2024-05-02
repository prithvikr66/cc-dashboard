import BarChart from "./ui/BarChart";
import axios from "axios";

const fetchNewVsReturning = async () => {
  const response = await axios.get(
    "https://staging-reportingapi.cryptocart.cc/customers/newvsreturning?interval=Month&reportDate=2024-02-01"
  );
  const data = await response.data;
  const totalUsers = data.totalCount;
  const newVsReturning = data.items;
  const chartLabel = newVsReturning.map((user: any) => user.segmentName);
  const chartData = newVsReturning.map((user: any) => user.segmentTotal);
  

  return { totalUsers, chartData, chartLabel };
};
const NewCustomers = async () => {
  const { totalUsers, chartData, chartLabel } = await fetchNewVsReturning();

  return (
    <BarChart
      totalUsers={totalUsers}
      chartData={chartData}
      chartLabel={chartLabel}
    />
  );
};

export default NewCustomers;
