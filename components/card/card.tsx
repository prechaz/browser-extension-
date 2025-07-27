'use client'

import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";


type Props = {
  extension : {
      name: string
      description: string
      logo: string
      isActive: boolean
  }
  handleToggle: (name: string) => void;
    handleRemove: (name: string) => void;
};

export default function Card({ extension, handleToggle, handleRemove}:Props) {
  return (
    <div className="h-[180px] bg-white dark:bg-[#212636ff] border rounded-[10px] p-2">
      <div className='flex item-center gap-4'>
        <div>
          <Image src={extension.logo} alt="" width={80} height={80} />
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-[#09153eff] dark:text-[#f5f5f5]">{extension.name}</h1>
          <p className="text-[#2f364bff] dark:text-[#c7c7c7ff]">{extension.description}</p>
        </div>
      </div>
      <div className="flex justify-between mt-7 items-center">
        
         <Button className="rounded-full border bg-transparent text-[#09153eff] transition-all-duration-300 dark:text-[#f5f5f5] dark:hover:text-[#09153eff] hover:bg-gray-300" onClick={()=>handleRemove(extension.name)}>remove</Button>
       
        <div className={`w-[50px]  transition-all-duration-300  rounded-full p-[2px] ${extension.isActive ? "bg-red-600":"bg-[#545969ff]"}`} onClick={()=>handleToggle(extension.name)}>
          <div className={`w-[20px] h-[20px] rounded-[50%] cursor-pointer bg-white transform transition-transform-300 ${extension.isActive ? "translate-x-6":"translate-x-0"} `}></div>
        </div>
      </div>
    </div>
  );
}
