import Bestselling from "@/components/Bestselling";
import LatestOrders from "@/components/LatestOrders";
import NewVsReturning from "@/components/NewVsReturning";
import TotalCustomers from "@/components/TotalCustomers";
import TotalOrders from "@/components/TotalOrders";
import UserBase from "@/components/Userbase";
import logoDark from "../public/cc-logo-black.svg"
import Image from "next/image";
import WebsiteVisits from "@/components/WebsiteVisits";
import { ModeToggle } from "@/components/theme-switch-button";

export default function Home() {
  return (
    <div className=" w-4/5 mx-auto ">
      <div className=" flex flex-col items-center">
        <Image src={logoDark} alt=""/>
      <div className=" font-poppins-bold text-[40px]">
        CryptoCart{" "}
        <span className=" font-poppins-regular text-[32px]">Dashboard</span>
      </div>
      </div>
      <ModeToggle />

      {/* <UserBase/> */}
      <div className=" flex justify-between mb-10">
        <TotalOrders />
        <TotalCustomers />
        <WebsiteVisits />
      </div>
      <LatestOrders />
      <Bestselling/>
      <NewVsReturning />
    </div>
  );
}
