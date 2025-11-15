import { FoodCardFromOrderInfo } from "./foodCardFromOrderInfo";

export const OrderDetailCart = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-[471px] h-[532px] bg-white rounded-xl flex items-center justify-between flex-col p-4">
        <div className="flex flex-col gap-5">
          <p className="text-[20px] font-semibold text-[#71717A]">My cart</p>
          <div className="flex flex-col gap-5 divide-y h-[300px] overflow-y-scroll">
            <FoodCardFromOrderInfo />
            <FoodCardFromOrderInfo />
            <FoodCardFromOrderInfo />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[20px] font-semibold text-[#71717A]">
            Delivery location
          </p>
          <input
            className="w-[439px] h-20 rounded-xl border border-zinc-300 text-[14px] text-black font-normal pl-3 pb-2"
            placeholder="Please share your complete address"
          />
        </div>
      </div>
      <div className="w-[471px] h-[276px] bg-white rounded-xl p-4 flex flex-col justify-between">
        <p className="text-[20px] font-semibold text-[#71717A]">Payment info</p>
        <div className="w-[439px] h-[70px] flex flex-col gap-2 border-b">
          <div className="flex justify-between">
            <p className="font-normal text-[16px] text-[#71717A]">Items</p>
            <p className="text-[16px] text-black font-bold">$25.98</p>
          </div>
          <div className="flex justify-between">
            <p className="font-normal text-[16px] text-[#71717A]">Shipping</p>
            <p className="text-[16px] text-black font-bold">0.99$</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="font-normal text-[16px] text-[#71717A]">Total</p>
          <p className="text-[16px] text-black font-bold">$25.98</p>
        </div>
        <button className="w-[439px] h-11 rounded-3xl bg-red-500 font-medium text-white text-[14px] flex justify-center items-center cursor-pointer">
          Checkout
        </button>
      </div>
    </div>
  );
};
