import Bestselling from "@/components/Bestselling";
import LatestOrders from "@/components/LatestOrders";
import TotalCustomers from "@/components/TotalCustomers";
import TotalOrdersCard from "@/components/TotalOrdersCard";
import UserBase from "@/components/Userbase";
import logoDark from "../public/cc-logo-black.svg";
import logoLight from "../public/cc-logo-white.svg";
import logoGrey from "../public/cc-logo-grey.svg";
import Image from "next/image";
import WebsiteVisits from "@/components/WebsiteVisits";
import { ModeToggle } from "@/components/theme-switch-button";
import TotalRevenue from "@/components/TotalRevenue";
import TotalOrders from "@/components/TotalOrders";
import NewCustomers from "@/components/NewCustomers";
import ellipse1 from "@/public/Ellipse 3.png";
import ellipse2 from "@/public/Ellipse 4.png";
import WalletBalance from "@/components/WalletBalance";
import Footer from "@/components/ui/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className=" w-4/5 mx-auto mt-10   ">
        <div className=" absolute right-0 -z-10 transform translate-x-1/2  mt-[100px]">
          <Image src={logoGrey} alt="" className="" />
        </div>
        <div className=" absolute right-0 -z-10   mt-[120px]">
          <Image src={ellipse2} alt="" className="" />
        </div>
        <div className=" absolute left-0 -z-10  ">
          <Image src={ellipse1} alt="" className="" />
        </div>
        <div className=" flex flex-col items-center">
          <Image src={logoDark} alt="" className=" dark:hidden" />
          <Image src={logoLight} alt="" className=" hidden dark:block" />
        </div>
        <div className=" flex  items-center mt-5 lg:mt-0 mb-5 lg:mb-0">
          <div className=" font-poppins-bold text-[25px] sm:text-[30px] lg:text-[40px] mx-auto  ">
            CryptoCart{" "}
            <span className=" font-poppins-regular text-[25px] sm:text-[30px] lg:text-[32px]">
              Dashboard
            </span>
          </div>
        </div>
        <div className="flex lg:justify-end justify-center lg:relative lg:top-[-50px]  items-center  gap-5 mb-5 lg:mb-0">
          <Link href={"https://giftcards.cryptocart.cc"} target="_blank">
            <div className=" w-[40px] h-[40px] rounded-full bg-[#D9D9D9] dark:bg-[#333333] flex items-center justify-center p-2  ">
              <Image src={logoLight} alt="" className=" hidden dark:block" />
              <Image src={logoDark} alt="" className=" dark:hidden" />
            </div>
          </Link>
          <ModeToggle />
        </div>
        <div className=" flex flex-col gap-10">
          <TotalRevenue />
          <div className=" flex justify-between flex-col lg:flex-row gap-5 lg:gap-0 ">
            <TotalOrdersCard />
            <TotalCustomers />
            <WebsiteVisits />
          </div>
          <div className=" flex flex-col lg:flex-row gap-5 lg:gap-0">
            <TotalOrders />
            <Bestselling />
          </div>
          <div className=" flex flex-col lg:flex-row gap-5 lg:gap-0 ">
            <NewCustomers />
            <UserBase />
          </div>
          <div>
            <LatestOrders />
            <WalletBalance />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
