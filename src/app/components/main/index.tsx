"use client";

import React from "react";
import Button from "../button";
import {
  generateMainH1Classes,
  generateMainH1ItalicClasses,
} from "@/app/utils/tailwindClasses";

type MainProps = {
  active: boolean;
};

const Main: React.FC<MainProps> = ({ active }) => {
  const mainH1Classes = generateMainH1Classes(active);
  const mainH1ItalicClasses = generateMainH1ItalicClasses();
  const [showItalicText, setShowItalicText] = React.useState<boolean>(false);
  const [showButton, setShowButton] = React.useState<boolean>(false);
  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowItalicText(true);
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  React.useEffect(() => {
    if (showItalicText) {
      const time = setTimeout(() => {
        setShowButton(true);
      }, 4900);
      return () => {
        clearTimeout(time);
      };
    }
  }, [showItalicText]);

  return (
    <main className="absolute flex flex-col justify-center align-center top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] text-center p-5">
      <section className="w-auto">
        <div>
          <>
            <h1 className={`${mainH1Classes}`}>Olá, eu sou o João Vitor</h1>
          </>
          <br />
          {showItalicText && (
            <>
              <h1 className={`${mainH1ItalicClasses}`}>
                <em>Desenvolvedor Front-End.</em>
              </h1>
            </>
          )}
        </div>

        <article>
          {showButton && (
            <div className="flex justify-center gap-[2.5rem]">
              <Button active={active} title="" />
              <Button active={active} title="" />
            </div>
          )}
        </article>
      </section>
    </main>
  );
};

export default Main;
