import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

type SlideProps = {
    list: any
    setCurrentIndex: any,
    currentIndex: number
}

export const Slide: React.FC<SlideProps> = ({list, setCurrentIndex, currentIndex}) => {

  const slideLeft = () => {
    setCurrentIndex((prevIndex : any) =>
      prevIndex > 0 ? prevIndex - 1 : list.length - 1
    );
  };

  const slideRight = () => {
    setCurrentIndex((prevIndex : any) =>
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
        {list.map((item : any, index : any) => (
          <div
            key={item.id}
            className={`w-full object-cover inline-block p-2 ease-in-out duration-300 ${
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
