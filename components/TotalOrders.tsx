import cartIcon from "../public/icons/shopping-cart.svg";
import Image from "next/image";
import axios from "axios";
import AreaChart from "./ui/AreaChart";
import FilterButton from "./ui/FilterButton";
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
  const totalOrders = ordersData.totalCount;
  const items = ordersData.items;
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
  const itemsInOrder = monthOrder.map((month) =>
    items.find((item: any) => item.segmentName === month)
  );

  const labels = itemsInOrder.map((item) => item.segmentName);
  const datas = itemsInOrder.map((item) => item.segmentTotal);

  return (
    <div className=" w-1/2 h-[540px] rounded-[16px] bg-[#ffffff] dark:bg-[#0D0D0D] mr-5 shadow-lg dark:shadow-2xl">
      <div className=" p-7">
        <div className=" flex items-center justify-between">
          <div>
            <h3 className=" font-poppins-bold text-[32px] text-[#0C191E] dark:text-[#ffffff]">
              {totalOrders}
            </h3>
            <p className=" font-poppins-medium text-[16px] text-[#3D3D3D] dark:text-[#8F95B2]">
              Total Orders
            </p>
          </div>
          <Image src={cartIcon} alt="" />
        </div>
        {datas && <AreaChart labels={labels} datas={datas} />}
      </div>
    </div>
  );
};

export default TotalOrders;
{/* <div className=" w-1/2 h-[540px] rounded-[16px] bg-[#ffffff] dark:bg-[#0D0D0D] mr-5 shadow-lg dark:shadow-2xl">
      <div className=" p-7">
        <div className=" flex items-center justify-between">
          <div>
            <h3 className=" font-poppins-bold text-[32px] text-[#0C191E] dark:text-[#ffffff]">
              {totalOrders}
            </h3>
            <p className=" font-poppins-medium text-[16px] text-[#3D3D3D] dark:text-[#8F95B2]">
              Total Orders
            </p>
          </div>
          <Image src={cartIcon} alt="" />
        </div>
        {datas && <AreaChart labels={labels} datas={datas} />}
      </div>
    </div> */}