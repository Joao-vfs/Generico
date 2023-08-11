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
    }, 2700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  React.useEffect(() => {
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
    <main>
      <section className="mt-[10rem] p-5">
        <div>
          <>
            <h1 className={`${mainH1Classes}`}>Olá, eu sou o João Vitor</h1>
          </>
          <br />
          {showItalicText && (
            <>
              <h1 className={`${mainH1ItalicClasses}`}>
                <em>Desenvolvedor Front-End !</em>
              </h1>
            </>
          )}
        </div>

        <article>
          {showButton && (
            <>
              <Button active={active} title="" />
              <Button active={active} title="" />
            </>
          )}
        </article>
      </section>
    </main>
  );
};

export default Main;
