"use client";

import Alert from "@/app/components/alert";
import userContext from "@/app/contexts";
import { isMobile } from "@/app/utils/isMobile";
import React, { useContext, useEffect, useState } from "react";

export const Add: React.FC = () => {
  const [authenticationEmail, setAuthenticationEmail] = useState("");
  const [authenticationPassword, setAuthenticationEmailPassword] = useState("");
  const [validation, setValidation] = useState(false);

  useEffect(() => {
    if (
      authenticationEmail === "joaojvfs04@gmail.com" &&
      authenticationPassword === "S@ciAlquimist@1015115"
    ) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  }, [authenticationEmail, authenticationPassword]);

  const handleValidationUser = () => {
    if (validation) {
      <Alert
        title={"Você não é o criador desse Portifólio"}
        Body={undefined}
        submit={() => {}}
        button={"Entendi"}
      />;
      window.location.href = "/#s-addProjects";
    } else {
      <Alert
        title={"Você não é o criador desse Portifólio"}
        Body={undefined}
        submit={() => {}}
        button={"Entendi"}
      />;
      window.location.href = "/#s-toadd";
    }
  };

  const userContextData = useContext(userContext);
  if (!userContextData) {
    return null;
  }
  const { moveArrow, activeDarkMode } = userContextData;

  return (
    <div
      className={`flex ${
        isMobile() ? "flex-col text-center" : "text-left h-screen"
      }  gap-10  justify-center items-center ${
        moveArrow ? "animate-fade-rigth" : "animate-fade-left"
      }`}
    >
      <div className={` w-96 `}>
        <h1 className="text-2xl">Olá Visitante!</h1>
        <p>
          Espero que esse Portifolio tenha te inspirado te deixado com uma ótima
          experiência mas essa sessão foi por mim para adicionar os trabalhos
          que está inserido na sessão Projetos, isso mostra o meu conhecimento
          com banco de dados e sistema CRUD. Mas eu não posso deixar você
          adicionar projetos :(. Então foi criado essa tela de login pra
          certificar que apenas eu consiga fazer esse gerenciamneto, obrigado
          por visitar esse portifólio e espero que entre em contato.
        </p>
      </div>
      <div
        className={`card px-8 py-6 rounded-lg text-black ${
          activeDarkMode ? "bg-black" : "bg-white"
        }  w-72`}
      >
        <div className="my-6">
          <input
            onBlur={(e) => setAuthenticationEmail(e.target.value)}
            className={`p-2 border-2 ${
              activeDarkMode
                ? "border-bg-gray-400 focus:outline-bg-gray-400 "
                : "border-black focus:outline-black "
            }  my-2 rounded w-[100%] `}
            placeholder="Email"
            type="email"
            required
          />
          <input
            onBlur={(e) => setAuthenticationEmailPassword(e.target.value)}
            className={`p-2 my-2 border-2 ${
              activeDarkMode
                ? "border-bg-gray-400 focus:outline-bg-gray-400"
                : "border-black focus:outline-black "
            } rounded w-[100%]`}
            placeholder="Password"
            type="password"
            required
          />
          <button
            onClick={handleValidationUser}
            className={`${
              activeDarkMode
                ? " bg-white hover:bg-gray-400 text-black"
                : "bg-black hover:bg-gray-800 text-white"
            }  font-semibold p-2 mt-3 rounded w-[100%]`}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
