"use client";

import userContext from "@/app/contexts";
import { isMobile } from "@/app/utils/isMobile";
import React, { useContext } from "react";
import { AiOutlineGithub } from "react-icons/ai";

export const About: React.FC = () => {
  const userContextData = useContext(userContext);
  if (!userContextData) {
    return null;
  }
  const { moveArrow } = userContextData;

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
        {/* <span className="absolute right-[-8%] top-[-70%] bg-[#F2672E] w-48 h-48 rounded-full" />
        <span className="absolute left-[50%] top-[-80%] bg-[#F2672E] w-24 h-24 rounded-full" />
        <span className="absolute right-[42%] bottom-[-50%] bg-[#F2672E] w-32 h-32 rounded-full" />
        <span className="absolute right-[20%] bottom-[-70%] bg-[#F2672E] w-14 h-14 rounded-full" /> */}
        <div className="z-50 w-[40rem] h-[30rem] border-2 border-blue-500 absolute right-0 backdrop-blur-md shadow-2xl backdrop-filter flex flex-wrap gap-8 p-24 bg-trasnparent rounded-3xl">
          <div className="rounded-lg w-20 h-20 border-2  border-indigo-500 bg-transparent flex items-center justify-center cursor-pointer hover:scale-105">
            <AiOutlineGithub size={80} />
          </div>
          <div className="rounded-lg  w-20 h-20 border-2 border-indigo-500 bg-transparent flex items-center justify-center cursor-pointer hover:scale-105">
            <AiOutlineGithub size={80} />
          </div>
          <div className="rounded-lg  w-20 h-20 border-2 border-indigo-500 bg-transparent flex items-center justify-center cursor-pointer hover:scale-105">
            <AiOutlineGithub size={80} />
          </div>
          <div className="rounded-lg  w-20 h-20 border-2 border-indigo-500 bg-transparent flex items-center justify-center cursor-pointer hover:scale-105">
            <AiOutlineGithub size={80} />
          </div>
          <div className="rounded-lg  w-20 h-20 border-2 border-indigo-500 bg-transparent flex items-center justify-center cursor-pointer hover:scale-105">
            <AiOutlineGithub size={80} />
          </div>
          <div className="rounded-lg  w-20 h-20 border-2 border-indigo-500 bg-transparent flex items-center justify-center cursor-pointer hover:scale-105">
            <AiOutlineGithub size={80} />
          </div>
          <div className="rounded-lg  w-20 h-20 border-2 border-indigo-500 bg-transparent flex items-center justify-center cursor-pointer hover:scale-105">
            <AiOutlineGithub size={80} />
          </div>
          <div className="rounded-lg  w-20 h-20 border-2 border-indigo-500 bg-transparent flex items-center justify-center cursor-pointer hover:scale-105">
            <AiOutlineGithub size={80} />
          </div>
        </div>
      </div>
    </div>
  );
};
