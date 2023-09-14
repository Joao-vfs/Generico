"use client";

import userContext from "@/app/contexts";
import { isMobile } from "@/app/utils/isMobile";
import React, { useContext, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
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
  const [showSelectedIcon, setShowSelectedIcon] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<any>([]);

  const IconsDashBord = [
    {
      name: "AzureDevops",
      icons: <SiAzuredevops size={60} />,
      content:
        "Uma plataforma de gerenciamento de ciclo de vida de aplicativos da Microsoft que oferece recursos para planejamento, desenvolvimento, entrega e monitoramento de software.",
    },
    {
      name: "CSS",
      icons: <SiCss3 size={60} />,
      content:
        "A última versão do Cascading Style Sheets, usada para estilizar elementos HTML em páginas da web.",
    },
    {
      name: "Figma",
      icons: <SiFigma size={60} />,
      content:
        "Uma ferramenta de design de interface do usuário (UI) e experiência do usuário (UX) baseada na web, colaborativa e fácil de usar.",
    },
    {
      name: "GitHub",
      icons: <SiGithub size={60} />,
      content:
        "Uma plataforma de hospedagem de código-fonte que permite o controle de versão e colaboração em projetos de software.",
    },
    {
      name: "GitLab",
      icons: <SiGitlab size={60} />,
      content:
        " Uma alternativa ao GitHub que oferece hospedagem de código-fonte, controle de versão e ferramentas de CI/CD.",
    },
    {
      name: "HTML",
      icons: <SiHtml5 size={60} />,
      content:
        "A linguagem de marcação usada para criar páginas da web, oferecendo recursos avançados de mídia e interatividade.",
    },
    {
      name: "JavaScript",
      icons: <SiJavascript size={60} />,
      content:
        "Uma linguagem de programação amplamente usada para desenvolvimento web que adiciona interatividade e dinamismo às páginas da web.",
    },
    {
      name: "Next.js",
      icons: <SiNextdotjs size={60} />,
      content:
        "Um framework de React para construção de aplicativos web rápidos e escaláveis.",
    },
    {
      name: "React",
      icons: <SiReact size={60} />,
      content:
        "Uma biblioteca JavaScript para criação de interfaces de usuário interativas e reativas.",
    },
    {
      name: "Redux",
      icons: <SiRedux size={60} />,
      content:
        "Uma biblioteca de gerenciamento de estado para aplicações JavaScript, frequentemente usada com React.",
    },
    {
      name: "Sass",
      icons: <SiSass size={60} />,
      content:
        " Uma extensão da linguagem CSS que permite o uso de variáveis e recursos avançados de estilização.",
    },
    {
      name: "StoryBook",
      icons: <SiStorybook size={60} />,
      content:
        "Uma ferramenta de desenvolvimento que ajuda a criar e visualizar componentes de interface do usuário isoladamente.",
    },
    {
      name: "Styled Components",
      icons: <SiStyledcomponents size={60} />,
      content:
        "Uma biblioteca para estilizar componentes React usando JavaScript e CSS-in-JS.",
    },
    {
      name: "Tailwind.css",
      icons: <SiTailwindcss size={60} />,
      content:
        "Um framework CSS que facilita a criação de interfaces responsivas e estilizadas de forma eficiente.",
    },
    {
      name: "TypeScript",
      icons: <SiTypescript size={60} />,
      content:
        "Uma linguagem de programação que adiciona tipagem estática ao JavaScript, melhorando a segurança e a manutenção do código.",
    },
  ];

  const handleSelectedIcon = (icon: any) => {
    setShowSelectedIcon(!showSelectedIcon);
    setSelectedIcon(icon);
  };

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
      <div className={`w-full flex items-center `}>
        <div>
          <p className={` w-[40rem] text-left text-xl`}>
            Como desenvolvedor front-end, tenho experiência sólida e habilidades
            em constante evolução. Crio aplicativos web eficientes e atraentes,
            garantindo estrutura e estilos impecáveis. Minha expertise em
            desenvolvimento resulta em interfaces interativas que prendem a
            atenção dos usuários. Sou comunicativo, colaborativo e tenho um
            senso de humor positivo. Sou proativo, adaptável às mudanças
            tecnológicas e fortaleço equipes com minhas habilidades
            interpessoais. Como desenvolvedor front-end, combino habilidades
            técnicas sólidas com colaboração, sendo uma adição valiosa para
            equipes de desenvolvimento web, sempre pronto para enfrentar
            desafios e contribuir para projetos inovadores.
            <br />
            Aqui do lado mostro algumas Tecnológias de que dominio.
          </p>
        </div>
        <div className="z-50 w-[40rem] h-[30rem] border-2 border-blue-500 absolute right-0 backdrop-blur-md shadow-2xl backdrop-filter flex flex-wrap gap-8 bg-transparent rounded-3xl items-center justify-center">
          {showSelectedIcon ? (
            <div className="p-5 flex flex-col items-center gap-20 justify-center text-center animate-fade-up">
              <div className="p-2 flex items-center gap-5 justify-center ">
                <span>{selectedIcon.icons}</span>
                <h1>{selectedIcon.name}</h1>
              </div>
              <span className="text-sm">{selectedIcon.content}</span>
              <button
                className="group cursor-pointer shadow-2xl hover:border-2 w-28 h-10 flex items-center justify-center 	transition ease-in-out duration-1000 delay-1000 hover:border-white rounded-xl hover:bg-gradient-to-tr hover:from-[#F2672E] hover:to-[#EF4444] hover:scale-110 active:scale-75"
                onClick={handleSelectedIcon}
              >
                Voltar
              </button>
            </div>
          ) : (
            IconsDashBord.map((card) => (
              <div
                className="animate-fade-up rounded-lg border-2 border-blue-500 bg-transparent p-2 flex items-center justify-center transition ease-in-out duration-100 delay-100 cursor-pointer hover:scale-105"
                key={card.name}
                onClick={() => handleSelectedIcon(card)}
              >
                {card.icons}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
