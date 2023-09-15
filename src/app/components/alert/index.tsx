"use client";

import userContext from "@/app/contexts";
import { isMobile } from "@/app/utils/isMobile";
import React, { useContext, useEffect, useState } from "react";
import {
  AiFillFolderAdd,
  AiFillCloseCircle,
  AiOutlineClose,
} from "react-icons/ai";

const Alert: React.FC = () => {
  const [authenticationEmail, setAuthenticationEmail] = useState("");
  const [authenticationPassword, setAuthenticationEmailPassword] = useState("");
  const [validation, setValidation] = useState(false);

  useEffect(() => {
    if (authenticationEmail === "teste" && authenticationPassword === "teste") {
      setValidation(true);
    } else {
      setValidation(false);
    }
  }, [authenticationEmail, authenticationPassword]);

  const userContextData = useContext(userContext);
  if (!userContextData) {
    return null;
  }
  const { activeDarkMode, show, setShow } = userContextData;

  const handleValidationLogin = () => {
    if (validation) {
      alert("deu bom");
    } else {
      alert("deu ruim");
    }
  };

  return (
    <div className="relative z-20">
      <AiFillFolderAdd
        className="animate-to-appear fixed bottom-0 right-4 cursor-pointer"
        size={80}
        onClick={() => {
          setShow(!show);
        }}
      />
      {show && (
        <div className="fixed top-0 left-0 w-full h-full backdrop-blur-md backdrop-filter">
          <div
            className={`animate-fade-up flex flex-col absolute top-[10%] left-[30%] ${
              activeDarkMode ? "bg-[#212121] text-white" : "bg-white text-black"
            }  h-[50vh] w-[50%] rounded-[1rem] text-left justify-center items-center`}
          >
            <AiOutlineClose
              className="absolute top-3 right-4 cursor-pointer"
              onClick={() => {
                setShow(!show);
              }}
              size={40}
            />
            <div className={`animate-to-appear flex gap-10`}>
              <div className={`w-96`}>
                <h1 className="text-2xl">Olá Visitante!</h1>
                <p>
                  Espero que esse Portifolio tenha te inspirado e te deixado com
                  uma ótima experiência mas essa sessão foi por mim para
                  adicionar os trabalhos que está inserido na sessão Projetos,
                  isso mostra o meu conhecimento com banco de dados e sistema
                  CRUD. Mas eu não posso deixar você adicionar projetos :(
                  <br />
                  Então foi criado essa tela de login pra certificar que apenas
                  eu consiga fazer esse gerenciamneto, obrigado por visitar esse
                  portifólio e espero que entre em contato.
                </p>
              </div>
              <div
                className={`card px-8 py-6 rounded-lg  ${
                  activeDarkMode
                    ? "bg-white text-black "
                    : "bg-[#212121] text-white"
                }  w-72`}
              >
                <div className="my-6">
                  <input
                    onBlur={(e) => setAuthenticationEmail(e.target.value)}
                    className={`p-2 border-2 text-black ${
                      activeDarkMode
                        ? "border-bg-gray-400 focus:outline-bg-gray-400 "
                        : "border-black focus:outline-black "
                    }  my-2 rounded w-[100%] `}
                    placeholder="Email"
                    type="email"
                    required
                  />
                  <input
                    onBlur={(e) =>
                      setAuthenticationEmailPassword(e.target.value)
                    }
                    className={`p-2 my-2 border-2 text-black ${
                      activeDarkMode
                        ? "border-bg-gray-400 focus:outline-bg-gray-400 "
                        : "border-black focus:outline-black "
                    } rounded w-[100%]`}
                    placeholder="Password"
                    type="password"
                    required
                  />
                  <button
                    onClick={handleValidationLogin}
                    className={`${
                      activeDarkMode
                        ? "bg-[#212121] text-white "
                        : " bg-white text-black"
                    }  font-semibold p-2 hover:scale-105 active:scale-95 mt-3 rounded w-[100%]`}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alert;
