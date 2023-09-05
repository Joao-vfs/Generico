import userContext from "@/app/contexts";
import React, { useContext, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export const Slide: React.FC = () => {
  const userContextData = useContext(userContext);
  if (!userContextData) {
    return null;
  }
  const { list, setCurrentIndex, currentIndex, setMoveArrow } = userContextData;
  const slideLeft = () => {
    setMoveArrow(true);
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : list.length - 1
    );
  };

  const slideRight = () => {
    setMoveArrow(false);
    setCurrentIndex((prevIndex) =>
      prevIndex < list.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="relative flex items-center">
      <a href={`${list[currentIndex].link}`}>
        <MdChevronLeft
          size={40}
          className={`opacity-50 cursor-pointer hover:opacity-100 fixed left-0 top-[50%]`}
          onClick={slideLeft}
        />
      </a>
      <div className="w-full h-screen overflow-auto">
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
      <a href={`${list[currentIndex].link}`}>
        <MdChevronRight
          size={40}
          className={`opacity-50  cursor-pointer hover:opacity-100 fixed right-0 top-[50%]`}
          onClick={slideRight}
        />
      </a>
    </div>
  );
};
