import cartIcon from "../public/icons/shopping-cart.svg";
import Image from "next/image";
const NewCustomers = () => {
  return (
    <div className=" w-1/2 h-[540px] rounded-[16px] bg-[#ffffff] dark:bg-[#0D0D0D] mr-5 shadow-lg dark:shadow-2xl">
      <div className=" p-7">
        <div className=" flex items-center justify-between">
          <div>
            <h3 className=" font-poppins-bold text-[32px] text-[#0C191E] dark:text-[#ffffff]">
              505
            </h3>
            <p className=" font-poppins-medium text-[16px] text-[#3D3D3D] dark:text-[#8F95B2]">
              New customers
            </p>
          </div>
          <Image src={cartIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NewCustomers;
