"use client";

import { useState, useEffect } from "react";
import Sidebar from "../sidebar";
import Link from "next/link";
import { DarkMode } from "../dakMode";
import { BiMenuAltLeft } from "react-icons/bi";
import Image from "next/image";

export const Content: React.FC = () => {
  const [activeDarkMode, setActiveDarkMode] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [showItalicText, setShowItalicText] = useState<boolean>(false);
  const [showButton, setShowButton] = useState<boolean>(false);

  const handleToggleActiveDarkMode = () => {
    setActiveDarkMode(!activeDarkMode);
  };

  const handleToggleShowSideBar = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowItalicText(true);
    }, 2700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (showItalicText) {
      const time = setTimeout(() => {
        setShowButton(true);
      }, 2500);
      return () => {
        clearTimeout(time);
      };
    }
  }, [showItalicText]);

  return (
    <div>
      <div
        className={`${
          activeDarkMode ? "bg-white text-blue" : "bg-black text-white"
        } h-[100vh]`}
      >
        <header>
          <nav
            className={`w-full h-20 flex justify-around items-center border-b-[6px] ${
              activeDarkMode ? " border-black" : "border-blue"
            }`}
          >
            {!open && (
              <BiMenuAltLeft
                onClick={handleToggleShowSideBar}
                className=" text-5xl cursor-pointer transition ease-in-out duration-150 delay-150 hover:scale-125"
              />
            )}
            {open && (
              <>
                <div
                  className="fixed top-0 left-0 h-full w-full backdrop-filter backdrop-blur-lg bg-opacity-40"
                  onClick={handleToggleShowSideBar}
                >
                  <Sidebar active={activeDarkMode} />
                </div>
              </>
            )}
            <Image src='' alt="Logo" width={100} height={100} />
            <Link href="/adicionar">ADICIONAR +</Link>
          </nav>

          <DarkMode toggleActive={handleToggleActiveDarkMode} />
        </header>
        <main className="p-[2rem] w-full">
          <section className="flex justify-left items-left mt-[10rem] text-left">
            <div className="w-[20em]">
              <>
                <h1
                  className={`${
                    activeDarkMode ? "text-black" : "text-white"
                  } animate-typing-text text-4xl overflow-hidden whitespace-nowrap`}
                >
                  Olá, eu sou o João Vitor
                </h1>
              </>
              <br />
              {showItalicText && (
                <>
                  <h1 className="animate-typing-italic text-4xl overflow-hidden whitespace-nowrap text-blue">
                    <em>Desenvolvedor Front-End !</em>
                  </h1>
                </>
              )}
            </div>
          </section>
          <article className="flex gap-8 mt-[2rem]">
            {showButton && (
              <>
                <button
                  className={`w-[10%] h-[3rem] ${
                    activeDarkMode
                      ? "bg-black hover:bg-blue hover:text-white"
                      : "bg-blue hover:bg-black hover:text-blue hover:border-blue hover:border-2 hover:font-bold"
                  }  rounded-[10px] transition ease-in-out delay-100 duration-500 hover:scale-110 animate-fade-up`}
                >
                  Clique
                </button>
                <button
                  className={`w-[10%] h-[3rem] ${
                    activeDarkMode
                      ? "bg-black hover:bg-blue hover:text-white"
                      : "bg-blue hover:bg-black hover:text-blue hover:border-blue hover:border-2 hover:font-bold"
                  } rounded-[10px] transition ease-in-out delay-100 duration-500 hover:scale-110 animate-fade-up animation-delay-4000ms`}
                >
                  Clique
                </button>
              </>
            )}
          </article>
        </main>
      </div>
    </div>
  );
};
