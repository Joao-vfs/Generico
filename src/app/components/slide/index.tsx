import userContext from "@/app/contexts";
import { isMobile } from "@/app/utils/isMobile";
import React, { useContext } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export const Slide: React.FC = () => {
  const userContextData = useContext(userContext);
  if (!userContextData) {
    return null;
  }
  const { list, setCurrentIndex, currentIndex, setMoveArrow, activeDarkMode } =
    userContextData;
  const slideLeft = () => {
    setMoveArrow(true);
    setCurrentIndex((prevIndex: number) =>
      prevIndex > 0 ? prevIndex - 1 : list.length - 1
    );
  };

  const slideRight = () => {
    setMoveArrow(false);
    setCurrentIndex((prevIndex: number) =>
      prevIndex < list.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className=" flex justify-center items-center ">
      <div className="w-full h-screen flex flex-col justify-center items-center px-32 overflow-auto ">
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
        {isMobile() ? (
          <div
            className={`p-2 h-16 w-full fixed bottom-0  ${
              activeDarkMode ? "text-white bg-[#212121]" : "text-black bg-white"
            } `}
          >
            <a href={`${list[currentIndex].link}`}>
              <MdChevronLeft
                size={40}
                className={`opacity-50 cursor-pointer hover:opacity-100 fixed left-10 bottom-2 `}
                onClick={slideLeft}
              />
            </a>

            <a href={`${list[currentIndex].link}`}>
              <MdChevronRight
                size={40}
                className={`opacity-50 cursor-pointer hover:opacity-100 fixed right-10 bottom-2`}
                onClick={slideRight}
              />
            </a>
          </div>
        ) : (
          <>
            <a href={`${list[currentIndex].link}`}>
              <MdChevronLeft
                size={40}
                className={`opacity-50 cursor-pointer hover:opacity-100 fixed left-2 top-[50%]`}
                onClick={slideLeft}
              />
            </a>

            <a href={`${list[currentIndex].link}`}>
              <MdChevronRight
                size={40}
                className={`opacity-50 z-50 cursor-pointer hover:opacity-100 fixed right-2 top-[50%]`}
                onClick={slideRight}
              />
            </a>
          </>
        )}
      </div>
      {/* <div className="animate-fade-left">
        <span
          className={`animate-waves absolute right-[-17%] top-[-10%] z-20 w-96 h-[25rem] bg-[#0066FF] rounded-full`}
        />
        <span
          className={`animate-waves absolute right-[-20%] top-[28%] z-20 w-96 h-[25rem] bg-[#0066FF] rounded-full`}
        />
        <span
          className={`animate-waves absolute right-[-15%] top-[15%] z-10 w-96 h-[25rem] bg-[#0085FF] rounded-full`}
        />
        <span
          className={`animate-waves absolute right-[-12%] top-[50%] z-10 w-96 h-[25rem] bg-[#0085FF] rounded-full`}
        />
        <span
          className={`animate-waves absolute right-[-18%] top-[27%] z-10 w-96 h-[25rem] bg-[#04578E] rounded-full`}
        />
        <span
          className={`animate-waves absolute right-[-15%] top-[50%] z-10 w-96 h-[25rem] bg-[#04578E] rounded-full`}
        />
        <span
          className={`animate-waves absolute right-[-10%] top-[65%] z-10 w-96 h-[25rem] bg-[#0066FF] rounded-full`}
        />
      </div> */}
    </div>
  );
};
