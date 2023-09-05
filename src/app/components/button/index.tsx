import userContext from "@/app/contexts";
import React, { useContext } from "react";

type ButtonProps = {
  title: string;
};

const Button: React.FC<ButtonProps> = ({ title }) => {
  const userContextData = useContext(userContext);
  if (!userContextData) {
    return null;
  }
  const { activeDarkMode, moveArrow } = userContextData;
  return (
    <button
      className={` h-[3rem] rounded-[10px] transition ease-in-out delay-100 duration-500 hover:scale-110 ${
        moveArrow ? "animate-fade-rigth" : "animate-fade-left"
      } animation-delay-4000ms  w-[13rem]
  ${activeDarkMode ? "bg-black" : "bg-white"}`}
    >
      {title}
    </button>
  );
};

export default Button;
