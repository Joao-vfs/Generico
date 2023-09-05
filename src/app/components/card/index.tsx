"use client";

import userContext from "@/app/contexts";
import React, { useContext } from "react";

type CardProps = {
  title: string;
  content: string;
  button: string;
};

const Cards: React.FC<CardProps> = ({ title, content, button }) => {
  const userContextData = useContext(userContext);
  if (!userContextData) {
    return null;
  }
  const { activeDarkMode } = userContextData;
  
  return (
    <div
      className={`w-60 bg-gradient-to-l ${
        activeDarkMode ? "bg-black text-white" : "bg-white text-black"
      } border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md`}
    >
      <div className="col-span-2 text-lg font-bold capitalize rounded-md">
        {title}
      </div>
      <div className="col-span-2 rounded-md ">{content}</div>
      <div className="col-span-3">
        <button
          className={`relative py-2 px-8 text-base font-bold uppercase rounded-[50px] overflow-hidden ${
            activeDarkMode ? "bg-white text-black" : "bg-black text-white"
          } transition-all duration-400 ease-in-out shadow-md hover:scale-105 `}
        >
          {button}
        </button>
      </div>
    </div>
  );
};

export default Cards;
