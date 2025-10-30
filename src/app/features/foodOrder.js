import { Orders } from "../components/orders";
import { UpAndDown } from "../icons/upAndDown";

export const FoodOrder = () => {
  return (
    <div className="flex flex-col gap-6">
      <button className="w-full flex justify-end">
        <img src="/me.jpg" className="object-cover w-9 h-9 rounded-full" />
      </button>
      <div className="w-[1171px] min-h-32 bg-white border border-zinc-300 rounded-2xl">
        <div
          className="w-[1171px] h-[76px] flex flex-row justify-between items-center pl-4 pr-4
        border-b"
        >
          <div>
            <p className="text-[20px] text-black font-bold">Orders</p>
            <p className="text-[12px] font-medium text-zinc-300">32 items</p>
          </div>
          <div className="flex gap-3">
            <input type="date" />
            <button
              className={`w-[179px] h-9 rounded-[80px] cursor-pointer bg-zinc-300 text-[14px]
          font-medium content-center`}
            >
              Change delivery state
            </button>
          </div>
        </div>
        <div className="flex items-center h-[52px] border-b">
          <div className="w-12 h-[52px] flex justify-center items-center">
            <input type="checkbox" className="cursor-pointer" />
          </div>
          <div className="w-14 h-[52px] flex items-center justify-center">
            <span className="text-[14px]">№</span>
          </div>
          <div className="w-[213px] h-[52px] flex justify-start items-center">
            <span className="text-gray-500 text-[14px] font-medium pl-4">
              Customer
            </span>
          </div>
          <div className="w-40 h-[52px] flex items-center justify-start">
            <span className="text-[14px] text-gray-500 font-medium pl-4">
              Food
            </span>
          </div>
          <div className="w-40 h-[52px] flex items-center justify-start">
            <div
              className="text-gray-500 text-[14px] font-medium pl-4 flex
              items-center justify-between w-[140px]"
            >
              Date
              <button className="cursor-pointer">
                <UpAndDown />
              </button>
            </div>
          </div>
          <div className="w-40 h-[52px] flex items-center justify-start">
            <span className="text-gray-500 text-[14px] font-medium pl-4">
              Total
            </span>
          </div>
          <div className="w-[213px] h-[52px] flex items-center justify-start">
            <span className="text-gray-500 text-[14px] font-medium pl-4">
              Delivery Adress
            </span>
          </div>
          <div className="w-40 h-[52px] flex items-center justify-start">
            <span
              className="text-gray-500 text-[14px] font-medium pl-4
            flex items-center justify-between w-[140px]"
            >
              Delivery State
              <button className="cursor-pointer">
                <UpAndDown />
              </button>
            </span>
          </div>
        </div>
        <div className="divide-y">
          <Orders />
        </div>
      </div>
    </div>
  );
};
