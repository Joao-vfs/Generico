import userContext from "@/app/contexts";
import { isMobile } from "@/app/utils/isMobile";
import React, { useContext } from "react";
import { BsCircleFill, BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export const DarkMode: React.FC = () => {
  const userContextData = useContext(userContext);
  if (!userContextData) {
    return null;
  }
  const { activeDarkMode, handleToggleActive } = userContextData;
  return (
    <>
      {!isMobile() ? (
        <div
          className={`cursor-pointer items-center rounded-[50px] w-[5rem] h-[2rem] p-1 flex ${
            activeDarkMode ? "justify-start bg-white" : "justify-end bg-black"
          }  `}
          onClick={handleToggleActive}
        >
          <BsCircleFill
            className={`${
              activeDarkMode
                ? "animate-dark-mode-rigth text-black"
                : "animate-dark-mode-left text-white"
            } text-2xl`}
          />
        </div>
      ) : (
        <div
          className={`cursor-pointer  items-center rounded-[50%] w-[2rem] h-[2rem] p-1 flex  ${
            activeDarkMode ? " bg-white " : " bg-black "
          }  `}
        >
          {activeDarkMode ? (
            <BsFillMoonFill
              onClick={handleToggleActive}
              size={40}
              color={"#4169e1"}
            />
          ) : (
            <BsFillSunFill
              onClick={handleToggleActive}
              size={40}
              color={"#FFFF00"}
            />
          )}
        </div>
      )}
    </>
  );
};
