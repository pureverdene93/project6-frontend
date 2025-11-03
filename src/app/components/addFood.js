"use client";
import { useState } from "react";
import { useEffect } from "react";
import { AddFoodIcon } from "../icons/addFoodIcon";
import { SetFalseDeliveryState } from "../icons/setFalseDeliveryState-icon";

export const Addfood = () => {
  const [state, setState] = useState(false);
  const addFood = () => {
    setState(true);
  };

  return (
    <div
      className="w-[270px] h-[241px] border rounded-2xl flex flex-col
      border-dashed border-red-500 justify-center items-center gap-[15px]"
    >
      <button
        className="flex justify-center items-center bg-red-500
         rounded-full cursor-pointer w-11 h-11"
        onClick={addFood}
      >
        {state === true ? (
          <div className="absolute w-[460px] h-[592px] bg-white z-10 flex flex-row">
            <div className="flex">
              <p className="text-black font-semibold text-[18px]">
                Add new Dish to Appetizers
              </p>
              <button className="w-9 h-9 bg-zinc-300 rounded-full flex justify-center items-center">
                <SetFalseDeliveryState />
              </button>
            </div>
            <div>
              <div>
                <p className="text-[14px] text-black font-medium">Food name</p>
                <input />
              </div>
              <div>
                <p className="text-[14px] text-black font-medium">Food price</p>
                <input />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <AddFoodIcon />
      </button>
      <p className="text-[14px] font-medium text-black w-[150px] text-center">
        Add new Dish to Appetizers
      </p>
    </div>
  );
};
