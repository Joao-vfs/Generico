"use client";

import React, { useContext } from "react";
import Button from "../button";
import userContext from "@/app/contexts";
import { isMobile } from "@/app/utils/isMobile";
import Image from "next/image";
import JOAO from "../../assets/img/joao.png";

const Main: React.FC = () => {
  const userContextData = useContext(userContext);
  if (!userContextData) {
    return null;
  }
  const { moveArrow, activeDarkMode, list, handleChangePage } = userContextData;
  return (
    <main
      className={`relative text-left flex justify-around p-16 ${
        activeDarkMode ? "text-[#323232]" : "text-white"
      }  ${moveArrow ? "animate-fade-rigth" : "animate-fade-left"} `}
    >
      <section>
        <div className={`w-[28rem] h-[10rem] mb-16 `}>
          <h1 className={`mb-4 ${!isMobile() ? "text-4xl " : "text-2xl"}`}>
            Olá meu nome é <br />{" "}
            <strong className=" bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#EF4444] text-transparent">
              {" "}
              João Vitor
            </strong>{" "}
            e sou <br />{" "}
            <strong className="bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#EF4444] text-transparent">
              Desenvolvedor Front end
            </strong>
          </h1>

          <span
            className={`${
              activeDarkMode ? "text-[#323232]" : "text-white"
            } text-sm`}
          >
            Apaixonado pelas áreas de Frontend e Desenvolvimento. Gosto de
            construir Interface de site de rápido desempenho e bem projetada com
            as mais recentes tecnologias.
          </span>
        </div>
        <a onClick={() => handleChangePage(list[2].id)}>
          <Button title="Ver Projetos" />
        </a>
      </section>
      <div className="shadow-2xl  w-80 h-80 bg-gradient-to-r from-[#F59E0B] to-[#EF4444] flex justify-center items-center rounded-br-[70%] rounded-tr-[70%] rounded-bl-[70%] rounded-tl-[30%]">
        {/* <Image
          src={JOAO}
          width={600}
          height={600}
          alt=""
          className="object-cover rounded-full mt-[-6.5rem]"
        /> */}
      </div>
    </main>
  );
};

export default Main;
