"use client";

import React from "react";
import { SidebarItems, SidebarProps } from "./type";

const Sidebar: React.FC<SidebarProps> = ({ active }) => {
  const sidebarItems: SidebarItems[] = [
    { label: "Home" },
    { label: "Sobre" },
    { label: "Contatos" },
  ];
  return (
    <div
      className={`absolute top-[30%] left-[23%] text-center bg-opacity-40 bg-transparent ${
        active ? "bg-white" : "bg-black"
      }`}
    >
      <ul className="flex flex-col gap-4">
        <h1
          className={`${
            active ? "text-blue" : "text-white"
          } text-5xl transition ease-in-out delay-150 duration-400 animate-fade-up`}
        >
          Olá bem vindo ao meu Portifólio ;)
        </h1>
        {sidebarItems.map((links, index): any => {
          return (
            <li
              className={`  ${
                active
                  ? "text-black hover:text-blue"
                  : "text-blue hover:text-white"
              } inline-block text-3xl transition ease-in-out delay-150 duration-400 hover:scale-125 cursor-pointer animate-fade-up`}
              key={index}
            >
              <span>{links.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
