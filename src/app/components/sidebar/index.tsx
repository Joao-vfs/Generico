import React, { useContext, useState } from "react";
import { AiFillFolderAdd, AiFillProject, AiFillHome } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";
import { RiContactsFill } from "react-icons/ri";
import userContext from "@/app/contexts";
import { isMobile } from "@/app/utils/isMobile";
import { DarkMode } from "../dakMode";

type SidebarItem = {
  id: number;
  label: string;
  icon?: JSX.Element;
};

const Sidebar: React.FC = () => {
  const userContextData = useContext(userContext);
  if (!userContextData) {
    return null;
  }
  const { activeDarkMode, currentIndex, handleChangePage } = userContextData;
  const responsiveness = isMobile();
  const SidebarItems: SidebarItem[] = [
    { id: 0, icon: <AiFillHome size={30} />, label: "J-VFS" },
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
      className={`${`w-full h-[10%]  p-2 ${
        activeDarkMode ? "bg-black text-white" : " bg-white text-black "
      } animate-fade-up`}`}
    >
      <ul className="flex justify-around items-center w-full ">
        {SidebarItems.map((item, index): JSX.Element => {
          return (
            <li key={item.id}>
              {responsiveness ? (
                <span
                  className={`text-1xl flex items-center gap-[1rem] cursor-pointer hover:border-b-2 animate-fade-up`}
                  style={{
                    borderBottom: `${
                      index === currentIndex
                        ? `solid 2px ${activeDarkMode ? "white" : "black"}`
                        : ""
                    }`,
                  }}
                  onClick={() => handleChangePage(item.id)}
                >
                  {item.icon}
                </span>
              ) : (
                <div
                  className={`text-1xl flex justify-center items-center gap-[1rem] cursor-pointer hover:border-b-2 animate-fade-up`}
                  style={{
                    borderBottom: `${
                      index === currentIndex
                        ? `solid 2px ${activeDarkMode ? "white" : "black"}`
                        : ""
                    }`,
                  }}
                  onClick={() => handleChangePage(item.id)}
                >
                  <span>{item.icon}</span> <span>{item.label}</span>
                </div>
              )}
            </li>
          );
        })}
        <DarkMode />
      </ul>
    </div>
  );
};

export default Sidebar;
