import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

type ListItem = {
  id: number;
  component: React.ReactNode;
  link: string;
};

type SlideProps = {
  list: ListItem[];
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  currentIndex: number;
};

export const Slide: React.FC<SlideProps> = ({
  list,
  setCurrentIndex,
  currentIndex,
}) => {
  window.location.href = `/${list[currentIndex].link}`;
  const slideLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : list.length - 1
    );
  };

  const slideRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < list.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="relative flex items-center">
      <MdChevronLeft
        size={40}
        className={`opacity-50 cursor-pointer hover:opacity-100`}
        onClick={slideLeft}
      />
      <div className="w-full h-[90vh] overflow-hidden scroll whitespace-nowrap scrollbar-hide">
        {list.map((item, index) => (
          <div
            key={item.id}
            className={`w-full object-cover inline-block ease-in-out duration-300 ${
              index === currentIndex ? "" : "hidden"
            }`}
          >
            {item.component}
          </div>
        ))}
      </div>

      <MdChevronRight
        size={40}
        className={`opacity-50  cursor-pointer hover:opacity-100`}
        onClick={slideRight}
      />
    </div>
  );
};
