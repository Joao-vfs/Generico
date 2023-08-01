"use client";
import { useState } from "react";
import Sidebar from "../sidebar";
import Link from "next/link";

export const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className={`text-blue`}>
      <nav className="w-full h-20 flex justify-around items-center border-b-[6px] border-blue">
        {!open ? (
          <p
            className=" text-4xl cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            ...
          </p>
        ) : (
          <p
            className=" text-4xl cursor-pointer"
            onClick={() => {
              setOpen(!open);
            }}
          >
            X
          </p>
        )}
        {open && <Sidebar active={false} />}
        <h1 className="text-2xl">LOGO</h1>
        <Link href="/adicionar">ADICIONAR +</Link>
      </nav>
    </header>
  );
};
