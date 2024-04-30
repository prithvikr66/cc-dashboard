import Bestselling from "@/components/Bestselling";
import LatestOrders from "@/components/LatestOrders";
import NewVsReturning from "@/components/NewVsReturning";
import TotalCustomers from "@/components/TotalCustomers";
import TotalOrdersCard from "@/components/TotalOrdersCard";
import UserBase from "@/components/Userbase";
import logoDark from "../public/cc-logo-black.svg";
import logoLight from "../public/cc-logo-white.svg";
import logoGrey from "../public/cc-logo-grey.svg";
import Image from "next/image";
import WebsiteVisits from "@/components/WebsiteVisits";
import { ModeToggle } from "@/components/theme-switch-button";
import { useTheme } from "next-themes";
import TotalRevenue from "@/components/TotalRevenue";
import TotalOrders from "@/components/TotalOrders";
import NewCustomers from "@/components/NewCustomers";
import AreaChartComponent from "@/components/ui/AreaChart";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className=" w-4/5 mx-auto mt-10   ">
      <div className=" absolute right-0 -z-10 transform translate-x-1/2  mt-[100px]">
        <Image src={logoGrey} alt="" className="" />
      </div>
      <div className=" flex flex-col items-center">
        <Image src={logoDark} alt="" className=" dark:hidden" />
        <Image src={logoLight} alt="" className=" hidden dark:block" />
      </div>
      <div className=" flex  items-center">
        <div className=" font-poppins-bold text-[40px] mx-auto  ">
          CryptoCart{" "}
          <span className=" font-poppins-regular text-[32px]">Dashboard</span>
        </div>
      </div>
      <div className=" flex justify-end relative top-[-50px]  items-center  gap-5">
        <div className=" w-[40px] h-[40px] rounded-full bg-[#D9D9D9] dark:bg-[#333333] flex items-center justify-center p-2">
          <Image src={logoLight} alt="" className=" hidden dark:block" />
          <Image src={logoDark} alt="" className=" dark:hidden" />
        </div>
        <ModeToggle />
      </div>
      <div className=" flex flex-col gap-10">
        <TotalRevenue />
        <div className=" flex justify-between ">
          {/* <TotalOrdersCard /> */}
          {/* <TotalCustomers /> */}
          {/* <WebsiteVisits /> */}
        </div>
        <div className=" flex">
          {/* <TotalOrders /> */}
          {/* <Bestselling /> */}
        </div>
        <div className=" flex">
          {/* <NewCustomers/> */}
          {/* <Bestselling /> */}
        </div>
        {/* <LatestOrders /> */}
      </div>
    </div>
    </div>
  );
}
