import axios from "axios";
import { IoSearch } from "react-icons/io5";
const fetchLatestOrders = async () => {
  try {
    const response = await axios.get(
      "https://staging-reportingapi.cryptocart.cc/orders"
    );
    const data = (await response).data;
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};

const LatestOrders = async () => {
  const latestOrders = await fetchLatestOrders();
  return (
    <div className=" w-full bg-[#ffffff] dark:bg-[#0D0D0D] h-[400px] rounded-[16px]  shadow-lg dark:shadow-2xl mb-16 overflow-y-auto">
      <div className="p-7 flex flex-col gap-5">
        <div className=" flex justify-between ">
          <h3 className=" font-poppins-bold text-[32px] text-[#0C191E] dark:text-[#ffffff]">
            Latest orders
          </h3>
          <div className=" bg-[#8F95B2] w-1/6 h-[50px] rounded-[200px] bg-opacity-20 flex items-center justify-start  pl-5 gap-2">
            <IoSearch className=" dark:text-[#8F95B2]" />
            <span className=" font-poppins-regular text-[16px] dark:text-[#8F95B2] ">
              Search
            </span>
          </div>
        </div>
        <div className=" flex justify-between">
          <p className=" uppercase text-[#8F95B2] font-poppins-medium text-[14px]  w-[95px]">
            Date
          </p>
          <p className=" uppercase text-[#8F95B2] font-poppins-medium text-[14px] w-[350px] ">
            Product
          </p>
          <p className=" uppercase text-[#8F95B2] font-poppins-medium text-[14px] w-[70px]">
            Value
          </p>
          <p className=" uppercase text-[#8F95B2] font-poppins-medium text-[14px]">
            Delivery status
          </p>
        </div>
        <div className=" w-full h-[1px] bg-[#8F95B2] " />
        {latestOrders?.map((order: any) => {
          let bgColorLight;
          let bgColorDark;
          switch (order.orderStatus) {
            case "Pending":
              bgColorLight = "#B6F5B3";
              bgColorDark = "#4EBD48";
              break;
            case "Processing":
              bgColorLight = "#C1ADFC";
              bgColorDark = "#613EC9";
              break;
            case "Complete":
              bgColorLight = "#FCFEB2";
              bgColorDark = "#CACC33";
              break;
            default:
              bgColorLight = "bg-gray-200";
              bgColorDark = "bg-gray-200";
          }
          return (
            <div className=" flex flex-col gap-5">
              <div className=" flex justify-between ">
                <div className=" flex items-center">
                  <p className=" font-poppins-medium text-[#0C191E] dark:text-white text-[16px]">
                    March 26
                  </p>
                </div>
                <div className=" flex gap-2 items-center w-[350px]  ">
                  <img
                    src={order.productImage}
                    className=" h-[32px] w-[32px] rounded-full"
                  />
                  <span className=" font-poppins-medium text-[#0C191E] dark:text-white text-[16px]">
                    {order.productName}
                  </span>
                </div>
                <div className=" flex items-center w-[70px] ">
                  <p className=" font-poppins-medium text-[#0C191E] dark:text-white text-[16px]">
                    {order.voucherValue}
                  </p>
                </div>
                <div className=" flex flex-col items-center">
                <div
                  className={`h-[40px] w-[94px] bg-[#FCFEB2] rounded-[4px] flex items-center justify-center dark:bg-[#CACC33]  text-[#0C191E] dark:text-[#0C191E]text-[14px] font-poppins-medium`}
                >
                  {order.orderStatus}
                </div>
                </div>
              </div>
              <div className=" w-full h-[1px] bg-[#8F95B2]" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestOrders;
