import React from "react";

type ButtonProps = {
  active: boolean;
  title: string;
};

const Button: React.FC<ButtonProps> = ({ active, title }) => {

  return (
    <button
      className={` h-[3rem] rounded-[10px] transition ease-in-out delay-100 duration-500 hover:scale-110 animate-fade-left animation-delay-4000ms  mt-10 w-[13rem]
  ${active ? "bg-black" : "bg-white"}`}
    >
      {title}
    </button>
  );
};

export default Button;
