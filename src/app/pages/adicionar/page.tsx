"use client";

import userContext from "@/app/contexts";
import React, { useContext } from "react";

export const Add: React.FC = () => {
  const userContextData = useContext(userContext);
  if (!userContextData) {
    return null;
  }
  const { moveArrow } = userContextData;
  return (
    <div
      className={`flex  justify-center align-center ${
        moveArrow ? "animate-fade-rigth" : "animate-fade-left"
      } `}
    >
      <h1>ADICIONAR</h1>
    </div>
  );
};
