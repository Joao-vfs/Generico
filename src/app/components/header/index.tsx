"use client";
import { useEffect, useState } from "react";
import Sidebar from "../sidebar";
import Link from "next/link";
import { BiMenuAltLeft } from "react-icons/bi";
import { AiFillFolderAdd } from "react-icons/ai";
import {
  generateNavBarClasses,
  generateNavBarItemsClasses,
  generateNavBarOpenClasses,
} from "@/app/utils/tailwindClasses";

type HeaderProps = {
  active: boolean;
};

export const Header: React.FC<HeaderProps> = ({ active }) => {
  const navBarClasses = generateNavBarClasses(active);
  const navBarItemsClasses = generateNavBarItemsClasses();
  const navBarOpenClasses = generateNavBarOpenClasses();
  const [open, setOpen] = useState<boolean>(false);

  const handleToggleShowSideBar = () => {
    setOpen(!open);
  };
  return (
    <>
      <nav className={`${navBarClasses}`}>
        <BiMenuAltLeft
          onClick={handleToggleShowSideBar}
          className={`${navBarItemsClasses}`}
        />
        {open && (
          <>
            <div
              className={`${navBarOpenClasses}`}
              onClick={handleToggleShowSideBar}
            >
              <Sidebar active={active} />
            </div>
          </>
        )}
        <h1 className={`${navBarItemsClasses}`}>J-FVS</h1>
        <Link href="/adicionar">
          <AiFillFolderAdd className={`${navBarItemsClasses}`} />
        </Link>
      </nav>
    </>
  );
};
