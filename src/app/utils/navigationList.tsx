import React from "react";

import { AiFillProject, AiFillFolderAdd } from "react-icons/ai";
import { RiContactsFill } from "react-icons/ri";
import { HiDocumentText } from "react-icons/hi";

type SidebarItem = {
  id: number;
  label: string;
  icon?: JSX.Element;
  link: any;
};

export const navigationList: SidebarItem[] = [
  { id: 0, label: "J-VFS", link: "/" },
  {
    id: 1,
    icon: <HiDocumentText />,
    label: "SOBRE",
    link: "/adicionar",
  },
  {
    id: 2,
    icon: <AiFillProject />,
    label: "PROJETOS",
    link: "/adicionar",
  },
  {
    id: 3,
    icon: <RiContactsFill />,
    label: "CONTATOS",
    link: "/adicionar",
  },
  {
    id: 4,
    icon: <AiFillFolderAdd />,
    label: "ADICIONAR",
    link: "/adicionar",
  },
];
