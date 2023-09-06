"use client";

import React from "react";

type AlertProps = {
  title: string;
  Body: any;
  submit: () => void;
  button: string;
};

const Alert: React.FC<AlertProps> = ({ title, Body, submit, button }) => {
  return (
    <div
      className={`bg-white rounded-2 w-48 h-48 absolute flex flex-col justify-center align-center top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] text-center `}
    >
      <strong>{title}</strong>
      <div>{Body}</div>
      <button onClick={submit}>{button}</button>
    </div>
  );
};

export default Alert;
