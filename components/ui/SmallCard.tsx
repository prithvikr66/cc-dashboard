import Image from "next/image";
interface SmallCardProps {
  heading: number;
  subheading: string;
  icon: string;
}

const SmallCard: React.FC<SmallCardProps> = ({ heading, subheading, icon }) => {
  return (
    <div className=" h-[120px] bg-white dark:bg-[#0D0D0D] w-1/3 rounded-[16px] mr-5 ">
      <div className="p-7">
        <div className=" flex items-center justify-between">
          <div>
            <h3 className=" font-poppins-bold text-[32px] text-[#0C191E] dark:text-white">
              {heading}K
            </h3>
            <p className=" font-poppins-medium text-[16px] text-[#0C191E] dark:text-white">
              {subheading}
            </p>
          </div>
          <div>
            <Image src={icon} alt="" height={40} width={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
