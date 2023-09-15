"use client";

import userContext from "@/app/contexts";
import React, { ReactNode, useContext } from "react";

type CardProps = {
  title: string;
  content: string;
  button: string;
  image: ReactNode;
};

const Cards: React.FC<CardProps> = ({ title, content, button, image }) => {
  const userContextData = useContext(userContext);
  if (!userContextData) {
    return null;
  }
  const { activeDarkMode } = userContextData;

  return (
    <div
      className={`flex relative items-start justify-center rounded-br-3xl rounded-bl-3xl w-64 border-2 border-indigo-500 shadow-2xl`}
    >
      <div className="overflow-hidden relative text-center group items-center max-w-sm max-h-sm flex flex-col transition-all duration-500">
        <div className="group-hover:blur-sm transition-all border-none duration-500 delay-200 object-center hover:border-black">
          {image}
        </div>
        <div className=" transition-all duration-500 delay-200">
          <h1 className="text-xl bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#EF4444] text-transparent transition-all duration-500 delay-200 py-3 items-end">
            {title}
          </h1>
        </div>
        <div className="flex items-end transition-all duration-500 delay-200 group-hover:bottom-0 -bottom-full absolute  justify-center w-full h-full ">
          <div className="flex flex-col text-2xl bg-gradient-to-r from-[#F59E0B] to-[#EF4444] rounded-br-3xl rounded-bl-3xl w-full text-white transition-all duration-500 delay-200 ">
            <p className="text-sm border-b-2 border-white py-1">{content}</p>
            <button
              className={`text-xl text-white transition-all hover:scale-105 active:scale-75 duration-100 delay-100 py-3 items-end`}
            >
              {button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
