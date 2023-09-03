import React, { useState } from "react";
import { AiFillFolderAdd, AiFillProject } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";
import { RiContactsFill } from "react-icons/ri";
import { Url } from "next/dist/shared/lib/router/router";

type SidebarProps = {
  active: boolean;
  handleChangePage: (item: number) => void;
  activeItemIndex: number;
};

type SidebarItem = {
  id: number;
  label: string;
  icon?: JSX.Element;
};

const Sidebar: React.FC<SidebarProps> = ({
  active,
  handleChangePage,
  activeItemIndex,
}) => {
  const SidebarItems: SidebarItem[] = [
    { id: 0, label: "J-VFS" },
    {
      id: 1,
      icon: <HiDocumentText size={30} />,
      label: "SOBRE",
    },
    {
      id: 2,
      icon: <AiFillProject size={30} />,
      label: "PROJETOS",
    },
    {
      id: 3,
      icon: <RiContactsFill size={30} />,
      label: "CONTATOS",
    },
    {
      id: 4,
      icon: <AiFillFolderAdd size={30} />,
      label: "ADICIONAR",
    },
  ];

  return (
    <div
      className={`${`w-full h-[10%]  p-2 border-b-2 ${
        active
          ? "bg-black text-white border-white"
          : " bg-white text-black border-black"
      } animate-fade-left`}`}
    >
      <ul className="flex justify-around w-full ">
        {SidebarItems.map((item, index): JSX.Element => {
          return (
            <li key={item.id}>
              <span
                className={`  ${
                  active ? "" : ""
                } text-1xl flex  gap-[1rem] cursor-pointer animate-fade-left hover:border-b-2`}
                style={{
                  borderBottom: `${
                    index === activeItemIndex ? "solid 2px black" : ""
                  }`,
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
