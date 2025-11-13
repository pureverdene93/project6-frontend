"use client";
import { SetFalseDeliveryState } from "../icons/setFalseDeliveryState-icon";

export const AddAdress = ({ exit }) => {
  return (
    <div className="fixed z-50 flex justify-center items-center w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.5)]">
      <div className="w-[502px] h-72 bg-white rounded-xl flex flex-col items-center justify-around">
        <div className="flex w-[454px] items-center justify-between">
          <p className="text-black font-semibold text-[24px]">
            Please write your delivery address!
          </p>
          <button
            className="flex w-10 h-10 bg-zinc-200 items-center justify-center rounded-full cursor-pointer"
            onClick={exit}
          >
            <SetFalseDeliveryState />
          </button>
        </div>
        <input
          className="w-[454px] h-20 border border-zinc-300 rounded-xl focus:outline-none pl-3 text-[16px] font-normal text-black"
          placeholder="Please share your complete address"
        />
        <div className="w-[454px] h-16 flex justify-end items-end gap-4">
          <button className="w-[79px] h-10 bg-white text-[14px] font-medium text-black rounded-xl flex justify-center items-center cursor-pointer border border-zinc-300">
            Cancel
          </button>
          <button className="w-[115px] text-white text-[14px] font-medium h-10 bg-black rounded-xl flex justify-center items-center cursor-pointer border border-zinc-300">
            Deliver Here
          </button>
        </div>
      </div>
    </div>
  );
};
