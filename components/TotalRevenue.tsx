import axios from "axios";
import LifetimeChart from "./ui/LifetimeChart";
const fetchRevenue = async () => {
  try{
    const response = await axios.get(
      "https://staging-reportingapi.cryptocart.cc/orders/revenue?reportDate=2024-01-20&interval=Year"
    );
    const data = (await response).data;
    return data;
  }catch(err){
    console.log(err)
  }
};

const TotalRevenue = async () => {
  const revenueData = await fetchRevenue();
  const totalOrders = revenueData?.totalCount;
  const items = revenueData?.items;
  const monthOrder = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const itemsInOrder = monthOrder?.map((month) =>
    items?.find((item: any) => item?.segmentName === month)
  );

  const labels = itemsInOrder?.map((item) => item?.segmentName);
  const datas = itemsInOrder?.map((item) => item?.segmentTotal);

  return (
    <LifetimeChart labels={labels} datas={datas} totalRevenueProp={totalOrders}/>
  );
};

export default TotalRevenue;
