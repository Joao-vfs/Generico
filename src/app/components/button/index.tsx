import userContext from "@/app/contexts";
import React, { useContext } from "react";
import { IoIosArrowForward } from "react-icons/io";

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
      className={`group h-[3rem] flex  items-center w-[13rem] shadow-2xl rounded-sm transition ease-in-out delay-100 duration-100 focus:outline-none hover:bg-gradient-to-br hover:from-[#F59E0B] hover:to-[#EF4444] ${
        moveArrow ? "animate-fade-rigth" : "animate-fade-left"
      } 
${activeDarkMode ? "bg-[#212121] text-white" : "bg-white  text-black"}`}
    >
      <a className="translate-x-8 transition ease-in-out delay-100 duration-100 group-hover:text-transparent">
        {title}
      </a>
      <span className="transition ease-in-out delay-100 translate-x-14 group-hover:border-none group-hover:translate-x-0 group-active:scale-50 ">
        <IoIosArrowForward size={30} />
      </span>
    </button>
  );
};

export default Button;
