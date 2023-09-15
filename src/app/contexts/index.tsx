import { createContext } from "react";

type ListProps = {
  id: number;
  link: string;
  component: React.ReactNode;
};

type ContextProps = {
  activeDarkMode: boolean;
  handleChangePage: (item: number) => void;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  list: ListProps[];
  handleToggleActive: () => void;
  setMoveArrow: React.Dispatch<React.SetStateAction<boolean>>;
  moveArrow: boolean;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const userContext = createContext<ContextProps | undefined>(undefined);

export default userContext;
