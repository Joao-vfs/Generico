import userContext from "@/app/contexts";
import { isMobile } from "@/app/utils/isMobile";
import React, { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export const DarkMode: React.FC = () => {
  const userContextData = useContext(userContext);
  if (!userContextData) {
    return null;
  }
  const { activeDarkMode, handleToggleActive } = userContextData;
  return (
    <div
      className={`relative cursor-pointer bg-transparent border-2 gap-6 items-center justify-center rounded-full flex ${
        activeDarkMode ? " border-[#323232]" : " border-white"
      } ${isMobile() ? "w-auto h-auto" : "w-20 h-8"} `}
      onClick={handleToggleActive}
    >
      <div
        className={`${
          activeDarkMode
            ? "animate-dark-mode-left border-2 border-black rounded-full right-0"
            : "animate-dark-mode-rigth border-2 border-white rounded-full left-0"
        } absolute bg-[#0085FF] -z-10 w-8 h-8`}
      />
      <FaMoon size={30}/>
      <FaSun size={30}/>
    </div>
  );
};
