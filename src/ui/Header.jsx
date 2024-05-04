import React from "react";

export default function Header({ children }) {
  return (
    <div className=" flex justify-center item center font-bold text-2xl sm:text-3xl text-stone-600 tracking-wider pt-10">
      {children}
    </div>
  );
}
