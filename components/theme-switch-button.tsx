"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import sunIcon from "@/public/icons/sun.svg";
import moonIcon from "@/public/icons/moon.svg";
export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
  
    <div className=" border border-[#505050] h-[40px] w-[80px] rounded-[2000px] bg-[#FFFFFF]  dark:bg-[#0D0D0D]">
      <div className=" flex items-center justify-between p-[3px]">
        <div className=" w-[30px] bg-white rounded-full h-[30px] flex items-center justify-center p-1">
          <button onClick={() => setTheme("dark")}>
            <Image src={moonIcon} alt="" />
          </button>
        </div>
        <div className=" w-[30px] bg-[#0C191E] rounded-full h-[30px] flex items-center justify-center p-1 ">
          <button onClick={() => setTheme("light")}>
            <Image src={sunIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
