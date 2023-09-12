import React, { useContext } from "react";
import userContext from "@/app/contexts";
import { isMobile } from "@/app/utils/isMobile";
import { DarkMode } from "../dakMode";
import Image from "next/image";
import LOGO from "../../assets/img/JVFS.png";
import LOGOBLACK from "../../assets/img/JVFS (1).png";


type SidebarItem = {
  id: number;
  label?: string;
};

const Sidebar: React.FC = () => {
  const userContextData = useContext(userContext);
  if (!userContextData) {
    return null;
  }
  const { currentIndex, handleChangePage, list, activeDarkMode, moveArrow } =
    userContextData;
  const sidebarItems: SidebarItem[] = [
    {
      id: 0,
      label: "Ínicio",
    },
    {
      id: 1,
      label: "Sobre mim",
    },
    {
      id: 2,
      label: "Projetos",
    },
    {
      id: 3,
      label: "Contatos",
    },
  ];

  return (
    <div className="flex z-10 justify-around h-16 p-6">
      {activeDarkMode ? (
        <Image className="w-16 h-8" src={LOGOBLACK} alt="Logo" />
      ) : (
        <Image className="w-16 h-8" src={LOGO} alt="Logo" />
      )}

      <div>
        <ul className="flex gap-20 text-base">
          {sidebarItems.map((item, index) => {
            return (
              <li
                key={item.id}
                className={`gap-20 group flex items-center bg-transparent p-2 px-6 text-xl font-thin tracking-widest text-white`}
              >
                <a
                  className={`${
                    activeDarkMode ? "text-black" : "text-white"
                  } relative after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:scale-x-0 after:bg-[#0085FF] after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100 ${
                    currentIndex === index
                      ? "after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0  after:bg-[#0085FF] after:scale-x-100"
                      : ""
                  }`}
                  href={`${list[currentIndex].link}`}
                  onClick={() => handleChangePage(item.id)}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <DarkMode />
    </div>
  );
};

export default Sidebar;
