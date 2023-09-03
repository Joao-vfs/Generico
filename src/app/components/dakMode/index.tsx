import React from "react";
import { BsCircleFill } from "react-icons/bs";

type DarkModeProps = {
  toggleActive: () => void;
  active: boolean;
};

export const DarkMode: React.FC<DarkModeProps> = ({ toggleActive, active }) => {
  return (
    <div className="absolute bottom-4 right-4">
      <div
        className={`cursor-pointer items-center rounded-[50px] w-[5rem] h-[2rem] p-1 flex ${
          active ? "justify-start bg-black" : "justify-end bg-white"
        }  `}
        onClick={toggleActive}
      >
        <BsCircleFill
          className={`${
            active
              ? "animate-dark-mode-rigth text-white"
              : "animate-dark-mode-left text-black"
          } text-2xl`}
        />
      </div>
    </div>
  );
};
