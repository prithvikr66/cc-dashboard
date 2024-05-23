import axios from "axios";
import globeIcon from "@/public/icons/globe.svg";
import Image from "next/image";
import usaflag from "@/public/flags/united-states-of-america.svg";
import ukflag from "@/public/flags/united-kingdom.svg";
import canadaflag from "@/public/flags/canada.svg";
import germanyflag from "@/public/flags/germany.svg";
import australiaflag from "@/public/flags/united-kingdom.svg";
import restOfTheWorldFlag from "@/public/flags/earth 1.svg";
const flags = [usaflag, ukflag, canadaflag, germanyflag, australiaflag];

const fetchUserbase = async () => {
  const response = await axios.get(
    "https://staging-reportingapi.cryptocart.cc/summary"
  );
  const data = await response.data;
  const countryOrdersCount = data.ordersByCountry.totalCount;
  const items = data.ordersByCountry.items;
  const countryOrder = [
    "USA",
    "UK",
    "Canada",
    "Germany",
    "Australia",
    "Denmark",
    "France",
    "India",
    "Italy",
    "Portugal",
    "Slovenia",
    "Spain",
    "Thailand",
  ];
  const sortedCountyOrders = countryOrder.map((country) =>
    items.find((item: any) => item.segmentName === country)
  );

  for (let i = 0; i < sortedCountyOrders.length; i++) {
    const percentage =
      (sortedCountyOrders[i].segmentTotal / countryOrdersCount) * 100;
    sortedCountyOrders[i].percentage = percentage;
    sortedCountyOrders[i].flag = flags[i];
  }
  let restOfTheWorldCount: number = 0;

  for (let i = 5; i < sortedCountyOrders.length; i++) {
    restOfTheWorldCount += sortedCountyOrders[i].segmentTotal;
  }
  const restOfTheWorldPercentage =
    (restOfTheWorldCount / countryOrdersCount) * 100;
  return {
    sortedCountyOrders,
    countryOrdersCount,
    restOfTheWorldCount,
    restOfTheWorldPercentage,
  };
};

const UserBase = async () => {
  const {
    countryOrdersCount,
    sortedCountyOrders,
    restOfTheWorldCount,
    restOfTheWorldPercentage,
  } = await fetchUserbase();
 let i = 0;
  return (
    <div className=" w-1/2 h-[440px] xl:h-[540px] rounded-[16px] bg-[#ffffff] dark:bg-[#0D0D0D] ml-5 shadow-lg dark:shadow-2xl overflow-y-auto">
      <div className=" p-7">
        <div className=" flex items-center justify-between">
          <div>
            <h3 className=" font-poppins-bold text-[32px] text-[#0C191E] dark:text-[#ffffff]">
              Userbase
            </h3>
            <p className=" font-poppins-medium text-[16px] text-[#3D3D3D] dark:text-[#8F95B2]">
              Total Countries
            </p>
          </div>
          <Image src={globeIcon} alt="" />
        </div>
        <div className=" mt-8">
          {sortedCountyOrders.slice(0, 5).map((country) => (
            <div className=" flex flex-col gap-5 " key={i++}>
              {" "}
              <div className=" flex justify-between items-center">
                <div className=" flex items-center gap-4">
                  <Image src={country.flag} alt="" />
                  <p className=" font-poppins-medium text-[16px] text-[#0C191E] dark:text-[#FFFFFF]">
                    {country.segmentName}
                  </p>
                </div>
                <p className=" font-poppins-medium text-[16px] text-[#0C191E] dark:text-[#FFFFFF]">
                  {country.segmentTotal}{" "}
                  <span className=" text-[#8F95B2] ">
                    ({Math.floor(country.percentage)}%)
                  </span>
                </p>
              </div>
              <div className=" w-full h-[1px] bg-[#8F95B2] mb-5 " />
            </div>
          ))}
          <div className=" flex flex-col gap-5">
            {" "}
            <div className=" flex justify-between items-center">
              <div className=" flex items-center gap-4">
                <Image src={restOfTheWorldFlag} alt="" />
                <p className=" font-poppins-medium text-[16px] text-[#0C191E] dark:text-[#FFFFFF]">
                  Rest of the world
                </p>
              </div>
              <p className=" font-poppins-medium text-[16px] text-[#0C191E] dark:text-[#FFFFFF]">
                {restOfTheWorldCount}
                <span className=" text-[#8F95B2] ">
                  ({Math.floor(restOfTheWorldPercentage)}%)
                </span>
              </p>
            </div>
            <div className=" w-full h-[1px] bg-[#8F95B2] mb-5 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBase;
