"use client";

import Alert from "@/app/components/alert";
import Cards from "@/app/components/card";
import userContext from "@/app/contexts";
import Image from "next/image";
import React, { useContext } from "react";
import teste from "../../assets/img/5539119.jpg";

export const Projects: React.FC = () => {
  const userContextData = useContext(userContext);
  if (!userContextData) {
    return null;
  }
  const { moveArrow } = userContextData;

  return (
    <div className={`flex flex-col flex-wrap text-center`}>
      <div
        className={`flex flex-wrap gap-[1rem] p-10 justify-around text-center mb-24 ${
          moveArrow ? "animate-fade-rigth" : "animate-fade-left"
        } `}
      >
        <Cards
          title="Título"
          image={<Image src={teste} alt="" />}
          content="Um Cronograma de estudos, que selciona tarefas e marca e define a quantidade de tempo"
          button="Ver Mais"
        />
        <Cards
          title="Título"
          image={<Image src={teste} alt="" />}
          content="Um Cronograma de estudos, que selciona tarefas e marca e define a quantidade de tempo"
          button="Ver Mais"
        />
        <Cards
          title="Título"
          image={<Image src={teste} alt="" />}
          content="Um Cronograma de estudos, que selciona tarefas e marca e define a quantidade de tempo"
          button="Ver Mais"
        />
      </div>
      <Alert />
    </div>
  );
};
