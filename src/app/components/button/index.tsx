import { generateButtonClasses } from "@/app/utils/tailwindClasses";
import React from "react";

type ButtonProps = {
  active: boolean;
  title: string;
};

const Button: React.FC<ButtonProps> = ({ active, title }) => {
  const buttonClasses = generateButtonClasses(active);

  return <button className={`${buttonClasses}`}>{title}</button>;
};

export default Button;
