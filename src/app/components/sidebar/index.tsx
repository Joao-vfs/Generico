"use client";

import {
  generateSideBarClasses,
  generateSideBarH1Classes,
  generateSideBarLabelClasses,
} from "@/app/utils/tailwindClasses";
import React from "react";

type SidebarProps = {
  active: boolean;
};

type SidebarItems = {
  label?: string;
  links?: string;
};

const Sidebar: React.FC<SidebarProps> = ({ active }) => {

  const sidebarClasses = generateSideBarClasses(active);
  const sidebarH1Classes = generateSideBarH1Classes(active);
  const sidebarLabelClasses = generateSideBarLabelClasses(active);
  const sidebarItems: SidebarItems[] = [
    { label: "Home" },
    { label: "Sobre" },
    { label: "Contatos" },
  ];
  
  return (
    <div className={`${sidebarClasses}`}>
      <ul className="flex flex-col gap-4">
        <h1 className={`${sidebarH1Classes}`}>
          Olá bem vindo ao meu Portifólio ;)
        </h1>
        {sidebarItems.map((links, index): any => {
          return (
            <li className={`${sidebarLabelClasses}`} key={index}>
              <span>{links.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
