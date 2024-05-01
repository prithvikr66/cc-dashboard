import axios from "axios";
import globe from "@/public/icons/globe-network.svg";
import Image from "next/image";
const fetchTotalOrders = async () => {
  try {
    const response = await axios.get(
      "https://staging-reportingapi.cryptocart.cc/summary"
    );
    const data = await response.data;
    return data.totalCustomers;
  } catch (err) {
    console.log(err);
  }
};

const WebsiteVisits = async () => {
  const totalOrders = await fetchTotalOrders();
  return (
    <div className=" h-[120px] bg-white dark:bg-[#0D0D0D] w-1/3 rounded-[16px] ml-10 shadow-lg dark:shadow-2xl">
      <div className="p-6">
        <div className=" flex items-center justify-between">
          <div>
            <h3 className=" font-poppins-bold text-[32px] text-[#0C191E] dark:text-white">
              24.26K
            </h3>
            <p className=" font-poppins-medium text-[16px] text-[#0C191E] dark:text-white">
              Website visits
            </p>
          </div>
          <div>
            <Image src={globe} alt="" height={40} width={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteVisits;
