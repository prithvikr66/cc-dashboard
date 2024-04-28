import LatestOrders from "@/components/LatestOrders";
import UserBase from "@/components/Userbase";
import { ModeToggle } from "@/components/theme-switch-button";

export default function Home() {
  return (
    <div className=" w-4/5 mx-auto ">
      <div className=" font-poppins-bold text-[40px]">
        CryptoCart{" "}
        <span className=" font-poppins-regular text-[32px]">Dashboard</span>
      </div>
      <ModeToggle />
      {/* <LatestOrders/> */}
      <UserBase/>
     
    </div>
  );
}
