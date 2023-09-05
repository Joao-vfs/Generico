"use client";

import userContext from "@/app/contexts";
import { isMobile } from "@/app/utils/isMobile";
import React, { useContext } from "react";

export const About: React.FC = () => {
  const userContextData = useContext(userContext);
  if (!userContextData) {
    return null;
  }
  const { moveArrow } = userContextData;
  const responsiveness = isMobile()
  return (
    <div
      className={`text-center ${responsiveness ? 'text-sm p-10' : 'text-xl'} ${
        moveArrow ? "animate-fade-rigth" : "animate-fade-left"
      } `}
    >
      <h1>SOBRE</h1>
      <p>
        Como desenvolvedor front-end, minha experiência e habilidades se
        destacam em um campo em constante evolução. Com um domínio sólido do
        Redux, StyledComponents e JavaScript, sou capaz de criar aplicações web
        eficientes e visualmente atraentes. Minha destreza com HTML e CSS
        garante que minhas criações sejam bem estruturadas e estilisticamente
        impecáveis. Além disso, sou fluente em TypeScript, proporcionando
        segurança e clareza ao meu código. Minha expertise em React.js me
        permite desenvolver interfaces interativas que cativam os usuários e
        melhoram a experiência do usuário final. Uso Swagger para documentar
        APIs de forma organizada e o Postman para testá-las minuciosamente.
        Minha personalidade comunicativa facilita a colaboração, e meu senso de
        humor cria um ambiente de trabalho positivo e criativo. Sou proativo,
        buscando constantemente soluções e melhorias. Aprendo rápido e me adapto
        às mudanças tecnológicas. Minhas habilidades em relações interpessoais
        fortalecem os laços com a equipe, tornando a colaboração suave e eficaz.
        Resumindo, como desenvolvedor front-end, reúno habilidades técnicas
        robustas e uma personalidade voltada para a colaboração, tornando-me uma
        adição valiosa para qualquer equipe de desenvolvimento web. Estou pronto
        para enfrentar desafios e contribuir para o sucesso de projetos
        inovadores.
      </p>
    </div>
  );
};
