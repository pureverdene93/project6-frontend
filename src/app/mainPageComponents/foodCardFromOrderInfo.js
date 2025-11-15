import { ExitRedIcon } from "../icons/exit-red";
import { PlusSignIconBlack } from "../icons/plusSignIconBlack";
import { MinusCard } from "../icons/minus";

export const FoodCardFromOrderInfo = () => {
  return (
    <div className="w-[439px] h-[140px] flex justify-between">
      <img
        src="/tsuivan3.png"
        className="w-[124px] h-[120px] object-cover rounded-xl"
      />
      <div className="w-[305px] h-[120px] flex flex-col justify-between">
        <div className="flex flex-row">
          <div>
            <p className="text-[16px] font-bold text-red-500">
              Sunshine Stackers
            </p>
            <p className="text-black text-[12px] font-normal">
              Fluffy pancakes stacked with fruits, cream, syrup, and powdered
              sugar.
            </p>
          </div>
          <button className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer border border-red-500 shrink-0">
            <ExitRedIcon />
          </button>
        </div>
        <div className="w-[305px] flex justify-between items-center">
          <div className="flex items-center gap-2">
            <button className="cursor-pointer">
              <MinusCard />
            </button>
            <span>1</span>
            <button className="cursor-pointer">
              <PlusSignIconBlack />
            </button>
          </div>
          <p className="text-[16px] font-bold text-black">$12.99</p>
        </div>
      </div>
    </div>
  );
};
