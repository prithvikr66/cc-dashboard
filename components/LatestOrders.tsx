import axios from "axios";
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
  function formatDate(inputDate: "string") {
    const date = new Date(inputDate);
    const options: any = { month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  const latestOrders = await fetchLatestOrders();

  return (
    <div className=" w-full bg-[#ffffff] dark:bg-[#0D0D0D] h-[450px] rounded-[16px]  shadow-lg dark:shadow-2xl mb-16 overflow-y-auto overflow-x-auto">
      <div className="p-7 flex flex-col gap-5">
        <div className=" flex justify-between ">
          <h3 className=" font-poppins-bold text-[25px] md:text-[32px] text-[#0C191E] dark:text-[#ffffff]">
            Latest orders
          </h3>
        </div>
        <div className=" flex justify-between">
          <p className=" uppercase text-[#8F95B2] font-poppins-medium text-[10px] md:text-[14px]  w-[100px] md:w-[200px]">
            Date
          </p>
          <p className=" uppercase text-[#8F95B2] font-poppins-medium text-[10px] md:text-[14px]  w-[170px] md:w-[250px] ">
            Product
          </p>
          <p className=" uppercase text-[#8F95B2] font-poppins-medium text-[10px] md:text-[14px] w-[60px] md:w-[70px]">
            Value
          </p>
          <p className=" uppercase text-[#8F95B2] font-poppins-medium text-[10px] md:text-[14px] ml-[25px] md:ml-0">
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
          let i = 0;
          return (
            <div className=" flex flex-col gap-5" key={i++}>
              <div className=" flex justify-between items-center">
                <div className=" flex items-center">
                  <p className=" font-poppins-medium text-[#0C191E] dark:text-white text-[12px] md:text-[16px]">
                    {formatDate(order.orderDate)}
                  </p>
                </div>
                <div className=" flex flex-col md:flex-row md:justify-center gap-2 items-center w-[350px]  ">
                  <img
                    src={order.productImage}
                    className=" h-[32px] w-[32px] rounded-full"
                  />
                  <span className=" font-poppins-medium text-[#0C191E] dark:text-white text-[12px] md:text-[16px]">
                    {order.productName}
                  </span>
                </div>
                <div className=" flex items-center w-[70px] ">
                  <p className=" font-poppins-medium text-[#0C191E] dark:text-white  text-[12px] md:text-[16px]">
                    {order.voucherValue}
                  </p>
                </div>
                <div className=" flex flex-col items-center">
                  <div
                    className={` h-[30px] w-[64px] md:h-[40px] md:w-[94px] bg-[#FCFEB2] rounded-[4px] flex items-center justify-center dark:bg-[#CACC33]  text-[#0C191E] dark:text-[#0C191E] text-[10px] md:text-[14px] font-poppins-medium`}
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
