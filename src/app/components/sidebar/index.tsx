import React, { useState } from "react";
import {
  generateSideBarClasses,
  generateSideBarIconClasses,
  generateSideBarLabelClasses,
} from "@/app/utils/tailwindClasses";
import { navigationList } from "../../utils/navigationList";
import Link from "next/link";

type SidebarProps = {
  active: boolean;
  handleToggleShowSideBar: any;
};

const Sidebar: React.FC<SidebarProps> = ({ active }) => {
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  const sidebarClasses = generateSideBarClasses(active);
  const sidebarLabelClasses = generateSideBarLabelClasses(active);

  const handleItemNext = () => {
    const nextIndex = (activeItemIndex + 1) % navigationList.length;
    setActiveItemIndex(nextIndex);
    console.log(nextIndex, "nextIndex");
  };

  const handleItemPrev = () => {
    const prevIndex =
      (activeItemIndex - 1 + navigationList.length) % navigationList.length;
    setActiveItemIndex(prevIndex);
  };

  return (
    <div>
      <ul className="flex justify-around w-full ">
        <Link href={navigationList[activeItemIndex].link}>
          <div onClick={handleItemPrev}>
            <span>Anterior</span>
          </div>
        </Link>
        {navigationList.map((item): JSX.Element => {
          return (
            <li key={item.id}>
              <Link href={item.link}>
                <span
                  className={`${sidebarLabelClasses}`}
                  style={{
                    color: activeItemIndex === item.id ? "purple" : "",
                  }}
                >
                  {item.icon} {item.label}
                </span>
              </Link>
            </li>
          );
        })}
        <Link href={navigationList[activeItemIndex].link}>
          <div onClick={handleItemNext}>
            <span>Próximo</span>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
