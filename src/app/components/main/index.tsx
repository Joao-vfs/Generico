"use client";

import React from "react";
import Button from "../button";

type MainProps = {
  active: boolean ;
};

const Main: React.FC<MainProps> = ({ active }) => {
  return (
    <main className="absolute flex flex-col justify-center align-center top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] text-center ">
      <section>
        <div>
          <h1
            className={`${
              active ? "" : ""
            }  text-4xl overflow-hidden whitespace-nowrap animate-fade-left`}
          >
            Olá, eu sou o João Vitor
          </h1>
          <br />
          <h1
            className={`${" text-4xl overflow-hidden whitespace-nowrap animate-fade-left"}`}
          >
            <em>Desenvolvedor Front-End.</em>
          </h1>
        </div>
        <article>
          <div className="flex justify-center gap-[2.5rem]">
            <Button active={active} title="" />
            <Button active={active} title="" />
          </div>
        </article>
      </section>
    </main>
  );
};

export default Main;
