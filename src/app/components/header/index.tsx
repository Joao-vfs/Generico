"use client";
import { useEffect, useState } from "react";
import Sidebar from "../sidebar";
import Link from "next/link";
import { AiFillFolderAdd } from "react-icons/ai";
import {
  generateNavBarClasses,
  generateNavBarItemsClasses,
  generateNavBarOpenClasses,
} from "@/app/utils/tailwindClasses";
import { useRouter } from "next/router";

type HeaderProps = {
  active: boolean;
};

export const Header: React.FC<HeaderProps> = ({ active }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const navBarClasses = generateNavBarClasses(active);
  const navBarItemsClasses = generateNavBarItemsClasses();

  const handleToggleShowSideBar = () => {
    setOpen(!open);
    setShow(!show);
  };

  return (
    <>
      <nav className={`${navBarClasses}`}>
        <Sidebar
          active={active}
          handleToggleShowSideBar={handleToggleShowSideBar}
        />
      </nav>
    </>
  );
};
