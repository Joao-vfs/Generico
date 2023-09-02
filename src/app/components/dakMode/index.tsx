import {
  generateDarkModeClasses,
  generateDarkModeIconClasses,
} from "@/app/utils/tailwindClasses";
import React from "react";
import { BsCircleFill } from "react-icons/bs";

type DarkModeProps = {
  toggleActive: any;
  active: boolean;
};

export const DarkMode: React.FC<DarkModeProps> = ({ toggleActive, active }) => {
  const darkModeClasses = generateDarkModeClasses(active);
  const darkModeIconClasses = generateDarkModeIconClasses(active);
  return (
    <div className="absolute bottom-4 right-4">
      <div className={`${darkModeClasses}`} onClick={toggleActive}>
        <BsCircleFill className={`${darkModeIconClasses}`} />
      </div>
    </div>
  );
};
