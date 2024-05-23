import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
interface RevenueFilterButtonProps {
  onChangeHandler: (filter: string) => void;
}

const RevenueFilterButton: React.FC<RevenueFilterButtonProps> = ({
  onChangeHandler,
}) => {
  const [currentDropDownState, setCurrentDropDownState] = useState("Yearly");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownOptions = ["Today", "Weekly", "Monthly", "Yearly"];

  const handleOnChange = (event: string) => {
    setIsOpen(false);
    setCurrentDropDownState(event);
    if (event === "Today") {
      onChangeHandler("Day");
    } else if (event === "Weekly") {
      onChangeHandler("Week");
    } else if (event === "Monthly") {
      onChangeHandler("Month");
    } else {
      onChangeHandler("Year");
    }
  };

  return (
    <div className="relative bg-[#0C191E] dark:bg-[#FFFFFF] text-[#FFFFFF] dark:text-[#0D0D0D] w-[100px] h-[30px] rounded-[6px]">
      <div
        className="flex items-center justify-center cursor-pointer font-poppins-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="">{currentDropDownState}</span>
        <IoMdArrowDropdown />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#E7EBF0] dark:bg-[#192028] z-10 font-poppins-medium text-[#0C191E] dark:text-[#FFFFFF]">
          {dropdownOptions.map((option: string) => (
            <div
              key={option}
              className="p-2 cursor-pointer hover:bg-[#d3d3d3] dark:hover:bg-[#0D1722]"
              onClick={() => handleOnChange(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RevenueFilterButton;
