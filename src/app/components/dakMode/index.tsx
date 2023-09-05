import userContext from "@/app/contexts";
import { isMobile } from "@/app/utils/isMobile";
import React, { useContext } from "react";
import { BsCircleFill, BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export const DarkMode: React.FC = () => {
  const responsiveness = isMobile();
  const userContextData = useContext(userContext);
  if (!userContextData) {
    return null;
  }
  const { activeDarkMode, handleToggleActive } = userContextData;
  return (
    <>
      {!responsiveness ? (
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
          className={`cursor-pointer items-center rounded-[50%] w-[2rem] h-[2rem] p-1 flex border-2  ${
            activeDarkMode
              ? "justify-start bg-black border-white"
              : "justify-end bg-white border-black"
          }  `}
        >
          {activeDarkMode ? (
            <BsFillMoonFill onClick={handleToggleActive} size={40} />
          ) : (
            <BsFillSunFill onClick={handleToggleActive} size={40} />
          )}
        </div>
      )}
    </>
  );
};
