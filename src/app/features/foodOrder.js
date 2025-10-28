export const FoodOrder = () => {
  return (
    <div className="flex flex-col">
      <button>
        <img src="/me.jpg" className="object-cover w-9 h-9 rounded-full" />
      </button>
      <div className="w-[1171px] h-[76px] flex flex-row">
        <div>
          <p className="text-[20px] text-black font-bold">Orders</p>
          <p className="text-[12px] font-medium text-zinc-300">32 items</p>
        </div>
        <input type="date" />
        <button
          className={`w-[179px] h-9 rounded-[80px] cursor-pointer bg-zinc-300 text-[14px]
          font-medium content-center`}
        >
          Change delivery state
        </button>
      </div>
    </div>
  );
};
