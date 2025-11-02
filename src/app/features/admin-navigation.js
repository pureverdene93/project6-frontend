"use client";
import { LogoContainer } from "../components/logoContainer";
import { FoodMenuLogoBlack } from "../icons/foodMenuBlack-logo";
import { OrderBlackLogo } from "../icons/orderBlack-logo";
import { OrderWhiteLogo } from "../icons/orderWhite-Logo";
import { FoodMenuLogoWhite } from "../icons/foodMenuWhite-logo";

export const AdminNavigation = ({ clickFoodMenu, clickOrder, state }) => {
  return (
    <div className="w-[205px] h-screen bg-white flex flex-col items-center gap-10 pt-9">
      <LogoContainer />
      <div>
        <button
          className={`w-[165px] h-10 flex rounded-[70px] cursor-pointer
        text-black justify-start pl-6 items-center gap-2.5 text-[14px] font-medium
        ${state === "Food menu" ? "bg-black text-white" : ""}`}
          onClick={clickFoodMenu}
        >
          {state !== "Food menu" ? (
            <FoodMenuLogoBlack />
          ) : (
            <FoodMenuLogoWhite />
          )}
          Food menu
        </button>
        <button
          className={`w-[165px] h-10 flex rounded-[70px] cursor-pointer
          text-black justify-start pl-6 items-center gap-2.5 text-[14px] font-medium ${
            state === "Order" ? "bg-black text-white" : ""
          }`}
          onClick={clickOrder}
        >
          {state === "Order" ? <OrderWhiteLogo /> : <OrderBlackLogo />} Order
        </button>
      </div>
    </div>
  );
};
