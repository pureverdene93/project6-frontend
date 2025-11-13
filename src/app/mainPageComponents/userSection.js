export const UserSection = () => {
  return (
    <div className="absolute min-w-[188px] h-[104px] bg-white rounded-xl flex justify-center items-center flex-col gap-2">
      <p className="text-black text-[20px] font-semibold">test@gmail.com</p>
      <button className="cursor-pointer w-20 h-9 bg-zinc-100 rounded-xl flex justify-center items-center cursor-pointerc font-medium text-[14px] text-black">
        Sign out
      </button>
    </div>
  );
};
