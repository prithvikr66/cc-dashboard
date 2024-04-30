import axios from "axios";
import shoppingCart from "@/public/icons/shopping-cart.svg";
import Image from "next/image";
const fetchTotalOrders = async () => {
  const response = await axios.get(
    "https://staging-reportingapi.cryptocart.cc/summary"
  );
  const data = await response.data;
  return data.totalOrders;
};


const TotalOrders = async () => {
  const totalOrders = await fetchTotalOrders();
  return (
    <div className=" h-[120px] bg-white dark:bg-[#0D0D0D] w-1/3 rounded-[16px] mr-10">
      <div className="p-7">
        <div className=" flex items-center justify-between">
          <div>
            <h3 className=" font-poppins-bold text-[32px] text-[#0C191E] dark:text-white">
              {totalOrders}
            </h3>
            <p className=" font-poppins-medium text-[16px] text-[#0C191E] dark:text-white">
            Total orders
            </p>
          </div>
          <div>
            <Image src={shoppingCart} alt="" height={40} width={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalOrders;
