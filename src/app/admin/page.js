"use client";
import { useState } from "react";
export default function Home() {
  const [state, setState] = useState("Order");

  const clickFoodMenu = () => {
    setState("Food menu");
  };

  const clickOrder = () => {
    setState("Order");
  };
  return (
    <div className="bg-zinc-100 flex h-screen w-full flex-row">
      <AdminNavigation
        state={state}
        clickFoodMenu={clickFoodMenu}
        clickOrder={clickOrder}
      />
      <div className="w-full flex justify-center h-screen pt-9">
        {state === "Food menu" && <FoodMenu />}
        {state === "Order" && <FoodOrder />}
      </div>
    </div>
  );
}
