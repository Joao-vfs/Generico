"use client";

import React, { useState } from "react";
import { Header } from "./components/header";
import Main from "./components/main";
import { DarkMode } from "./components/dakMode";
import { generatePageHomeClasses } from "./utils/tailwindClasses";
import fundo from "../app/assets/background.png";
import Image from "next/image";

export default function Home() {
  const [activeDarkMode, setActiveDarkMode] = useState<boolean>(false);

  const pageHomeClasses = generatePageHomeClasses(activeDarkMode);
  // const navBarOpenClasses = generateNavBarOpenClasses();

  const handleToogleActiveDarKMode = () => {
    setActiveDarkMode(!activeDarkMode);
  };

  return (
    <>
      <Image
        src={fundo}
        alt="fundo"
        layout="fill"
        objectFit="cover"
        className=" z-[-1]"
      />
      <div className={`${pageHomeClasses} backdrop-blur-sm`}>
        <Header active={activeDarkMode} />
        <Main active={activeDarkMode} />
        <DarkMode
          active={activeDarkMode}
          toggleActive={handleToogleActiveDarKMode}
        />
      </div>
    </>
  );
}
