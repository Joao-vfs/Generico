"use client";
import { useState } from "react";
import Sidebar from "../sidebar";
import { HeaderProps, StateProps } from "./type";

export const Header: React.FC<HeaderProps> = () => {
  const [open, setOpen] = useState<StateProps>(false);
  return (
    <>
      <header className="border-b-[6px] border-blue">
        <nav className="w-full h-20 flex justify-around items-center">
          {!open ? (
            <p
              className="text-blue text-4xl cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              ...
            </p>
          ) : (
            <p
              className="text-blue text-4xl cursor-pointer"
              onClick={() => {
                setOpen(!open);
              }}
            >
              X
            </p>
          )}
          {open && <Sidebar />}
          <h1 className="text-2xl text-white">Logo</h1>
          <button className="text-2xl text-blue bg-trasparent">
            Adicionar +
          </button>
        </nav>
      </header>
    </>
  );
};
