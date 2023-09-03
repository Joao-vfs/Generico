"use client";

import React, { useState } from "react";
import { About, Add, Contacts, Projects } from "./pages";
import { DarkMode } from "./components/dakMode";
import Sidebar from "./components/sidebar";
import Main from "./components/main";
import { Slide } from "./components/slide";
import { Url } from "next/dist/shared/lib/router/router";

type ListProps = {
  id: number;
  link: string;
  component: React.ReactNode;
};

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [activeDarkMode, setActiveDarkMode] = useState(false);

  const list: ListProps[] = [
    { id: 0, link: "#s-inicial", component: <Main active={activeDarkMode} /> },
    { id: 2, link: "#s-about", component: <About /> },
    { id: 3, link: "#s-projects", component: <Projects /> },
    { id: 4, link: "#s-contacts", component: <Contacts /> },
    { id: 5, link: "#s-toadd", component: <Add /> },
  ];
  const handleToggleActive = () => {
    setActiveDarkMode(!activeDarkMode);
  };

  const handleChangePage = (item: number) => {
    window.location.href = `/${list[item].link}`;
    setCurrentIndex(item);
  };

  return (
    <div
      className={`relative flex flex-col h-screen transition-colors duration-1000 ease-in-out ${
        activeDarkMode ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <Sidebar
        active={activeDarkMode}
        handleChangePage={handleChangePage}
        activeItemIndex={currentIndex}
      />
      <Slide
        list={list}
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
      />
      <DarkMode active={activeDarkMode} toggleActive={handleToggleActive} />
    </div>
  );
}
