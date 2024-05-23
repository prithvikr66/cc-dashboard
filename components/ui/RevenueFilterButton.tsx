"use client";
import React, { useState } from "react";

interface RevenueFilterButtonProps {
  onChangeHandler: (filter: string) => void;
}
const RevenueFilterButton: React.FC<RevenueFilterButtonProps> = ({
  onChangeHandler,
}) => {
  const [currentDropDownState, setCurrentDropDownState] = useState("Yearly");
  const dropdownOptions = ["Today", "Weekly", "Monthly", "Yearly"];

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentDropDownState(event.target.value);
    if (event.target.value === "Today") {
      onChangeHandler("Day");
    } else if (event.target.value === "Weekly") {
      onChangeHandler("Week");
    } else if (event.target.value === "Monthly") {
      onChangeHandler("Month");
    } else {
      onChangeHandler("Year");
    }
  };
  return (
    <div className=" bg-[#0C191E] dark:bg-[#FFFFFF] text-[#FFFFFF] dark:text-[#0D0D0D] border w-[100px] h-[50px]">
      <div className=" flex items-center justify-center">
        <select
          value={currentDropDownState}
          onChange={handleOnChange}
          className=" text-white"
        >
          {dropdownOptions.map((option: string) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default RevenueFilterButton;
