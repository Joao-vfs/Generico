"use client";

import React, { useContext } from "react";
import Button from "../button";
import userContext from "@/app/contexts";
import { isMobile } from "@/app/utils/isMobile";

const Main: React.FC = () => {
  const userContextData = useContext(userContext);
  if (!userContextData) {
    return null;
  }
  const { moveArrow } = userContextData;
  return (
    <main className="h-screen flex flex-col text-center justify-center items-center ">
      <section>
        <div>
          <h1
            className={`${
              !isMobile() ? "text-4xl" : "text-2xl"
            } overflow-hidden whitespace-nowrap  ${
              moveArrow ? "animate-fade-rigth" : "animate-fade-left"
            }`}
          >
            Olá, eu sou o João Vitor
            <br />
            <em>Desenvolvedor Front-End.</em>
          </h1>
        </div>
        <article>
          <div
            className={`flex flex-wrap justify-center mt-4 ${
              !isMobile() ? "gap-[2.5rem]" : "gap-[15px]"
            }`}
          >
            <Button title="" />
            <Button title="" />
          </div>
        </article>
      </section>
    </main>
  );
};

export default Main;
