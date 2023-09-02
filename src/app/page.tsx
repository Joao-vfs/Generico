"use client";

import React, { useState } from "react";
import { About, Add, Contacts, Projects } from "./pages";
import { DarkMode } from "./components/dakMode";
import { generatePageHomeClasses } from "./utils/tailwindClasses";
import Sidebar from "./components/sidebar";
import Main from "./components/main";
import { Slide } from "./components/slide";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [activeDarkMode, setActiveDarkMode] = useState(false);
  const pageHomeClasses = generatePageHomeClasses(activeDarkMode);
  const handleToggleActive = () => {
    setActiveDarkMode(!activeDarkMode);
  };

  const handleChangePage = (item: number) => {
    setCurrentIndex(item);
  };

  const list: any[] = [
    { id: 0, component: <Main active={activeDarkMode} /> },
    { id: 2, component: <About /> },
    { id: 3, component: <Projects /> },
    { id: 4, component: <Contacts /> },
    { id: 5, component: <Add /> },
  ];

  return (
    <>
      <div className={`${pageHomeClasses}`}>
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
    </>
  );
}
