import React, { useState } from "react";
import {
  generateNavBarClasses,
  generateSideBarClasses,
  generateSideBarIconClasses,
  generateSideBarLabelClasses,
} from "@/app/utils/tailwindClasses";
import { AiFillFolderAdd, AiFillProject } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";
import { RiContactsFill } from "react-icons/ri";
import { Url } from "next/dist/shared/lib/router/router";

type SidebarProps = {
  active: boolean;
  handleChangePage: any;
  activeItemIndex: number;
};

type SidebarItem = {
  id: number;
  label: string;
  icon?: JSX.Element;
  link: Url;
};

const Sidebar: React.FC<SidebarProps> = ({
  active,
  handleChangePage,
  activeItemIndex,
}) => {
  const navBarClasses = generateNavBarClasses(active);
  const sidebarLabelClasses = generateSideBarLabelClasses(active);


  const SidebarItems: SidebarItem[] = [
    { id: 0, label: "J-VFS", link: "/" },
    {
      id: 1,
      icon: <HiDocumentText />,
      label: "SOBRE",
      link: "/adicionar",
    },
    {
      id: 2,
      icon: <AiFillProject />,
      label: "PROJETOS",
      link: "/adicionar",
    },
    {
      id: 3,
      icon: <RiContactsFill />,
      label: "CONTATOS",
      link: "/adicionar",
    },
    {
      id: 4,
      icon: <AiFillFolderAdd />,
      label: "ADICIONAR",
      link: "/adicionar",
    },
  ];

  return (
    <div className={`${navBarClasses}`}>
      <ul className="flex justify-around w-full ">
        {SidebarItems.map((item, index): JSX.Element => {
          return (
            <li key={item.id}>
              <span
                className={`${sidebarLabelClasses}`}
                style={{
                  color: `${index === activeItemIndex ? "purple" : ""}`,
                }}
                onClick={() => handleChangePage(item.id)}
              >
                {item.icon} {item.label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
