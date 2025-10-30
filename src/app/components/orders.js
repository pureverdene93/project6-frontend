"use client";
import { DownIcon } from "../icons/downIcon";
import { UpAndDown } from "../icons/upAndDown";
import { useState } from "react";

export const Orders = () => {
  const [status, setStatus] = useState("Pending");
  const handleStatus = () => {
    setStatus(status);
  };

  return (
    <div className="h-14 flex flex-row border-b">
      <div className="w-12 h-14 flex justify-center items-center">
        <input type="checkbox" className="cursor-pointer" />
      </div>
      <div className="w-14 h-14 flex justify-center items-center">
        <span className="text-[14px] font-normal">1</span>
      </div>
      <div className="w-[213px] h-14 flex items-center justify-start ">
        <span className="text-[14px] font-medium text-gray-500 pl-4">
          testOrder@gmail.com
        </span>
      </div>
      <div className="w-40 h-14 flex justify-start items-center">
        <span
          className="text-[14px] w-[130px] font-medium text-gray-500 pl-4
        flex items-center justify-between"
        >
          2 foods
          <button className="cursor-pointer">
            <DownIcon />
          </button>
        </span>
      </div>
      <div className="w-40 h-14 flex justify-start items-center">
        <span className="text-[14px] font-medium text-gray-500 pl-4">
          2024/12/20
        </span>
      </div>
      <div className="w-40 h-14 flex justify-start items-center">
        <span className="text-[14px] font-medium text-gray-500 pl-4">
          $26.97
        </span>
      </div>
      <div className="w-[213px] h-14 flex items-center justify-start">
        <span className="text-[12px] text-gray-500 font-medium w-[181px] h-8 pl-4">
          {"2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd"}
        </span>
      </div>
      <div className="w-40 h-14 flex items-center justify-start">
        <button
          className={`min-w-[94px] h-8 border cursor-pointer rounded-[80px] text-[12px] 
        font-semibold ml-4 flex items-center justify-evenly`}
        >
          Pending <UpAndDown />
        </button>
      </div>
    </div>
  );
};
