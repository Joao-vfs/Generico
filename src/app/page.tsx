"use client";

import React, { useState } from "react";
import { About, Contacts, Projects } from "./pages";
import Sidebar from "./components/sidebar";
import Main from "./components/main";
import { Slide } from "./components/slide";
import userContext from "./contexts";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [activeDarkMode, setActiveDarkMode] = useState<boolean>(false);
  const [moveArrow, setMoveArrow] = useState<boolean>(false);

  const list = [
    { id: 0, link: "#s-inicial", component: <Main /> },
    { id: 2, link: "#s-about", component: <About /> },
    { id: 3, link: "#s-projects", component: <Projects /> },
    { id: 4, link: "#s-contacts", component: <Contacts /> },
  ];
  const handleToggleActive = () => {
    setActiveDarkMode(!activeDarkMode);
  };

  const handleChangePage = (item: number) => {
    window.location.href = `/${list[item].link}`;
    setCurrentIndex(item);
  };

  return (
    <userContext.Provider
      value={{
        activeDarkMode,
        handleChangePage,
        currentIndex,
        setCurrentIndex,
        list,
        handleToggleActive,
        moveArrow,
        setMoveArrow,
      }}
    >
      <div
        className={`relative w-full  h-screen flex flex-col overflow-hidden transition-colors duration-300 ease-in-out ${
          activeDarkMode
            ? "bg-white text-black"
            : "bg-gradient-to-br from-[#121212] from-10% via-[#121212] via-50% to-[#1E3A8A] to-100% text-white"
        }`}
      >
        <div className="absolute top-[-50%] left-[-30%] bg-[#2958FF] blur-[7rem] rounded-full w-[45rem] h-[45rem] "></div>
        <div className="absolute bottom-[-50%] right-[-30%] bg-[#F2672E] blur-[7rem] rounded-full w-[45rem] h-[45rem] "></div>
        <Sidebar />
        <Slide />
        
      </div>
    </userContext.Provider>
  );
}
