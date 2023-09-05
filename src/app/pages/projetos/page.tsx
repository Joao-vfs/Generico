"use client";

import Cards from "@/app/components/card";
import userContext from "@/app/contexts";
import React, { useContext } from "react";

export const Projects: React.FC = () => {
  const userContextData = useContext(userContext);
  if (!userContextData) {
    return null;
  }
  const { moveArrow } = userContextData;

  return (
    <div
      className={`flex flex-col flex-wrap text-center ${
        moveArrow ? "animate-fade-rigth" : "animate-fade-left"
      } `}
    >
      <div
        className={`flex flex-wrap gap-[1rem] p-10 justify-around text-center ${
          moveArrow ? "animate-fade-rigth" : "animate-fade-left"
        } `}
      >
        <Cards
          title="Projeto"
          content=" Como desenvolvedor front-end, minha experiência e habilidades se
        destacam em um campo em constante evolução. Com um domínio sólido do
        Redux, StyledComponents e JavaScript, sou capaz de criar aplicações web
        eficientes e visualmente atraentes. "
          button="Ver Mais"
        />
        <Cards
          title="Projeto"
          content=" Como desenvolvedor front-end, minha experiência e habilidades se
        destacam em um campo em constante evolução. Com um domínio sólido do
        Redux, StyledComponents e JavaScript, sou capaz de criar aplicações web
        eficientes e visualmente atraentes. "
          button="Ver Mais"
        />
        <Cards
          title="Projeto"
          content=" Como desenvolvedor front-end, minha experiência e habilidades se
        destacam em um campo em constante evolução. Com um domínio sólido do
        Redux, StyledComponents e JavaScript, sou capaz de criar aplicações web
        eficientes e visualmente atraentes. "
          button="Ver Mais"
        />
        <Cards
          title="Projeto"
          content=" Como desenvolvedor front-end, minha experiência e habilidades se
        destacam em um campo em constante evolução. Com um domínio sólido do
        Redux, StyledComponents e JavaScript, sou capaz de criar aplicações web
        eficientes e visualmente atraentes. "
          button="Ver Mais"
        />
        <Cards
          title="Projeto"
          content=" Como desenvolvedor front-end, minha experiência e habilidades se
        destacam em um campo em constante evolução. Com um domínio sólido do
        Redux, StyledComponents e JavaScript, sou capaz de criar aplicações web
        eficientes e visualmente atraentes. "
          button="Ver Mais"
        />
        <Cards
          title="Projeto"
          content=" Como desenvolvedor front-end, minha experiência e habilidades se
        destacam em um campo em constante evolução. Com um domínio sólido do
        Redux, StyledComponents e JavaScript, sou capaz de criar aplicações web
        eficientes e visualmente atraentes. "
          button="Ver Mais"
        />
        <Cards
          title="Projeto"
          content=" Como desenvolvedor front-end, minha experiência e habilidades se
        destacam em um campo em constante evolução. Com um domínio sólido do
        Redux, StyledComponents e JavaScript, sou capaz de criar aplicações web
        eficientes e visualmente atraentes. "
          button="Ver Mais"
        />
        <Cards
          title="Projeto"
          content=" Como desenvolvedor front-end, minha experiência e habilidades se
        destacam em um campo em constante evolução. Com um domínio sólido do
        Redux, StyledComponents e JavaScript, sou capaz de criar aplicações web
        eficientes e visualmente atraentes. "
          button="Ver Mais"
        />
        <Cards
          title="Projeto"
          content=" Como desenvolvedor front-end, minha experiência e habilidades se
        destacam em um campo em constante evolução. Com um domínio sólido do
        Redux, StyledComponents e JavaScript, sou capaz de criar aplicações web
        eficientes e visualmente atraentes. "
          button="Ver Mais"
        />
        <Cards
          title="Projeto"
          content=" Como desenvolvedor front-end, minha experiência e habilidades se
        destacam em um campo em constante evolução. Com um domínio sólido do
        Redux, StyledComponents e JavaScript, sou capaz de criar aplicações web
        eficientes e visualmente atraentes. "
          button="Ver Mais"
        />
        <Cards
          title="Projeto"
          content=" Como desenvolvedor front-end, minha experiência e habilidades se
        destacam em um campo em constante evolução. Com um domínio sólido do
        Redux, StyledComponents e JavaScript, sou capaz de criar aplicações web
        eficientes e visualmente atraentes. "
          button="Ver Mais"
        />
        <Cards
          title="Projeto"
          content=" Como desenvolvedor front-end, minha experiência e habilidades se
        destacam em um campo em constante evolução. Com um domínio sólido do
        Redux, StyledComponents e JavaScript, sou capaz de criar aplicações web
        eficientes e visualmente atraentes. "
          button="Ver Mais"
        />
        <Cards
          title="Projeto"
          content=" Como desenvolvedor front-end, minha experiência e habilidades se
        destacam em um campo em constante evolução. Com um domínio sólido do
        Redux, StyledComponents e JavaScript, sou capaz de criar aplicações web
        eficientes e visualmente atraentes. "
          button="Ver Mais"
        />
        <Cards
          title="Projeto"
          content=" Como desenvolvedor front-end, minha experiência e habilidades se
        destacam em um campo em constante evolução. Com um domínio sólido do
        Redux, StyledComponents e JavaScript, sou capaz de criar aplicações web
        eficientes e visualmente atraentes. "
          button="Ver Mais"
        />
        <Cards
          title="Projeto"
          content=" Como desenvolvedor front-end, minha experiência e habilidades se
        destacam em um campo em constante evolução. Com um domínio sólido do
        Redux, StyledComponents e JavaScript, sou capaz de criar aplicações web
        eficientes e visualmente atraentes. "
          button="Ver Mais"
        />
        <Cards
          title="Projeto"
          content=" Como desenvolvedor front-end, minha experiência e habilidades se
        destacam em um campo em constante evolução. Com um domínio sólido do
        Redux, StyledComponents e JavaScript, sou capaz de criar aplicações web
        eficientes e visualmente atraentes. "
          button="Ver Mais"
        />
        <Cards
          title="Projeto"
          content=" Como desenvolvedor front-end, minha experiência e habilidades se
        destacam em um campo em constante evolução. Com um domínio sólido do
        Redux, StyledComponents e JavaScript, sou capaz de criar aplicações web
        eficientes e visualmente atraentes. "
          button="Ver Mais"
        />
        <Cards
          title="Projeto"
          content=" Como desenvolvedor front-end, minha experiência e habilidades se
        destacam em um campo em constante evolução. Com um domínio sólido do
        Redux, StyledComponents e JavaScript, sou capaz de criar aplicações web
        eficientes e visualmente atraentes. "
          button="Ver Mais"
        />
        <Cards
          title="Projeto"
          content=" Como desenvolvedor front-end, minha experiência e habilidades se
        destacam em um campo em constante evolução. Com um domínio sólido do
        Redux, StyledComponents e JavaScript, sou capaz de criar aplicações web
        eficientes e visualmente atraentes. "
          button="Ver Mais"
        />
        <Cards
          title="Projeto"
          content=" Como desenvolvedor front-end, minha experiência e habilidades se
        destacam em um campo em constante evolução. Com um domínio sólido do
        Redux, StyledComponents e JavaScript, sou capaz de criar aplicações web
        eficientes e visualmente atraentes. "
          button="Ver Mais"
        />
        <Cards
          title="Projeto"
          content=" Como desenvolvedor front-end, minha experiência e habilidades se
        destacam em um campo em constante evolução. Com um domínio sólido do
        Redux, StyledComponents e JavaScript, sou capaz de criar aplicações web
        eficientes e visualmente atraentes. "
          button="Ver Mais"
        />
        <Cards
          title="Projeto"
          content=" Como desenvolvedor front-end, minha experiência e habilidades se
        destacam em um campo em constante evolução. Com um domínio sólido do
        Redux, StyledComponents e JavaScript, sou capaz de criar aplicações web
        eficientes e visualmente atraentes. "
          button="Ver Mais"
        />
        <Cards
          title="Projeto"
          content=" Como desenvolvedor front-end, minha experiência e habilidades se
        destacam em um campo em constante evolução. Com um domínio sólido do
        Redux, StyledComponents e JavaScript, sou capaz de criar aplicações web
        eficientes e visualmente atraentes. "
          button="Ver Mais"
        />
        <Cards
          title="Projeto"
          content=" Como desenvolvedor front-end, minha experiência e habilidades se
        destacam em um campo em constante evolução. Com um domínio sólido do
        Redux, StyledComponents e JavaScript, sou capaz de criar aplicações web
        eficientes e visualmente atraentes. "
          button="Ver Mais"
        />
        <Cards
          title="Projeto"
          content=" Como desenvolvedor front-end, minha experiência e habilidades se
        destacam em um campo em constante evolução. Com um domínio sólido do
        Redux, StyledComponents e JavaScript, sou capaz de criar aplicações web
        eficientes e visualmente atraentes. "
          button="Ver Mais"
        />
        <Cards
          title="Projeto"
          content=" Como desenvolvedor front-end, minha experiência e habilidades se
        destacam em um campo em constante evolução. Com um domínio sólido do
        Redux, StyledComponents e JavaScript, sou capaz de criar aplicações web
        eficientes e visualmente atraentes. "
          button="Ver Mais"
        />
        <Cards
          title="Projeto"
          content=" Como desenvolvedor front-end, minha experiência e habilidades se
        destacam em um campo em constante evolução. Com um domínio sólido do
        Redux, StyledComponents e JavaScript, sou capaz de criar aplicações web
        eficientes e visualmente atraentes. "
          button="Ver Mais"
        />
        <Cards
          title="Projeto"
          content=" Como desenvolvedor front-end, minha experiência e habilidades se
        destacam em um campo em constante evolução. Com um domínio sólido do
        Redux, StyledComponents e JavaScript, sou capaz de criar aplicações web
        eficientes e visualmente atraentes. "
          button="Ver Mais"
        />
      </div>
    </div>
  );
};
