import axios from "axios";
import AreaChart from "./ui/AreaChart";
const fetchYearlyOrders = async () => {
  try{
    const response = await axios.get(
      "https://staging-reportingapi.cryptocart.cc/orders/totalcount?interval=Year&reportDate=2024-02-01"
    );
    const data = (await response).data;
    return data;
  }catch(err){
    console.log(err)
  }
};

const TotalOrders = async () => {
  const ordersData = await fetchYearlyOrders();
  const totalOrders = ordersData?.totalCount;
  const items = ordersData?.items;
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
    <AreaChart labels={labels} datas={datas} totalOrdersProp={totalOrders}/>
  );
};

export default TotalOrders;
