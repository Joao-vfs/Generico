"use client";

import userContext from "@/app/contexts";
import { isMobile } from "@/app/utils/isMobile";
import React, { useContext, useState } from "react";
import {
  SiAzuredevops,
  SiCss3,
  SiFigma,
  SiGithub,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiSass,
  SiStorybook,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const About: React.FC = () => {
  const userContextData = useContext(userContext);
  if (!userContextData) {
    return null;
  }
  const { moveArrow } = userContextData;

  const IconsDashBord = [
    { name: "Azuredevops", icons: <SiAzuredevops size={60} /> },
    { name: "Css", icons: <SiCss3 size={60} /> },
    { name: "Figma", icons: <SiFigma size={60} /> },
    { name: "Github", icons: <SiGithub size={60} /> },
    { name: "Gitlab", icons: <SiGitlab size={60} /> },
    { name: "Html", icons: <SiHtml5 size={60} /> },
    { name: "Javascript", icons: <SiJavascript size={60} /> },
    { name: "Nextjs", icons: <SiNextdotjs size={60} /> },
    { name: "React", icons: <SiReact size={60} /> },
    { name: "Redux", icons: <SiRedux size={60} /> },
    { name: "Sass", icons: <SiSass size={60} /> },
    { name: "Storybook", icons: <SiStorybook size={60} /> },
    { name: "Styledcomponents", icons: <SiStyledcomponents size={60} /> },
    { name: "Tailwindcss", icons: <SiTailwindcss size={60} /> },
    { name: "Typescript", icons: <SiTypescript size={60} /> },
  ];

  return (
    <div
      className={`relative ${
        moveArrow ? "animate-fade-rigth" : "animate-fade-left"
      } `}
    >
      <div className={`w-full flex items-center justify-between`}>
        <div>
          <p className={` w-[40rem] text-left text-xl`}>
            Como desenvolvedor front-end, trago uma sólida experiência e
            habilidades em constante evolução. Crio aplicações web eficientes e
            visualmente atraentes. Minhas habilidades garante estrutura e
            estilos impecáveis. Minha expertise em desenvolvimento permite criar
            interfaces interativas que cativam os usuários. Minha personalidade
            comunicativa facilita a colaboração, e meu senso de humor cria um
            ambiente positivo. Sou proativo, buscando soluções e melhorias, e me
            adapto às mudanças tecnológicas. Minhas habilidades interpessoais
            fortalecem a equipe, tornando a colaboração eficaz. Resumindo, como
            desenvolvedor front-end, combino habilidades técnicas sólidas com
            colaboração, sendo uma adição valiosa para equipes de
            desenvolvimento web. Estou pronto para enfrentar desafios e
            contribuir para projetos inovadores.
          </p>
        </div>
        <div className=" w-[40rem] h-[30rem] border-2 border-blue-500 absolute right-0 backdrop-blur-md shadow-2xl backdrop-filter flex flex-wrap gap-8 bg-trasnparent rounded-3xl items-center justify-center">
          {IconsDashBord.map((card) => {
            return (
              <div
                className="rounded-lg realtive border-2 border-indigo-500 bg-transparent p-2 flex items-center justify-center transition ease-in-out duration-100 delay-100 cursor-pointer "
                key={card.name}
              >
                {card.icons}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
