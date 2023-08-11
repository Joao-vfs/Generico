const generateNavBarClasses = (active: boolean) => {
  return `${`w-full h-[15%] flex justify-around items-center border-b-[2px] ${
    active ? " " : ""
  } animate-fade-up`}`;
};

const generateNavBarItemsClasses = () => {
  return `${" text-5xl cursor-pointer transition ease-in-out duration-75 hover:scale-125"}`;
};

const generateNavBarOpenClasses = () => {
  return `${"fixed top-0 left-0 h-full w-full backdrop-filter backdrop-blur-lg bg-transparent"}`;
};

const generateMainH1Classes = (active: boolean) => {
  return `${
    active ? "" : ""
  } animate-typing-text text-4xl overflow-hidden whitespace-nowrap`;
};

const generateMainH1ItalicClasses = () => {
  return `${"animate-typing-italic text-4xl overflow-hidden whitespace-nowrap"}`;
};

const generateButtonClasses = (active: boolean) => {
  return `
    w-[10%] h-[3rem] rounded-[10px] transition ease-in-out delay-100 duration-500 hover:scale-110 animate-fade-up animation-delay-4000ms mr-10 mt-10 w-[13rem]
    ${active ? "bg-white" : "bg-white"}
  `;
};

const generateSideBarClasses = (active: boolean) => {
  return `
    absolute translate-y-[50%] translate-x-[50%] top-[10%] text-center backdrop-blur-lg bg-opacity-10 bg-inherit 
    ${active ? "" : ""}
  `;
};

const generateSideBarH1Classes = (active: boolean) => {
  return `${
    active ? "" : ""
  } bg-transparent text-5xl transition ease-in-out delay-150 duration-400 animate-fade-up`;
};

const generateSideBarLabelClasses = (active: boolean) => {
  return `  ${
    active ? "" : ""
  } text-3xl bg-transparent transition ease-in-out delay-150 duration-400 hover:scale-125 cursor-pointer animate-fade-up`;
};

const generateDarkModeClasses = (active: boolean) => {
  return `cursor-pointer items-center rounded-[50px] w-[5rem] h-[2rem] p-1 flex ${
    active ? "justify-start bg-black" : "justify-end bg-blue"
  }  `;
};

const generateDarkModeIconClasses = (active: boolean) => {
  return `${active ? "" : ""} ${
    active ? "animate-dark-mode-rigth" : "animate-dark-mode-left"
  } text-2xl`;
};

const generatePageHomeClasses = (active: boolean) => {
  return `transition-colors duration-1000 ease-in-out ${
    active
      ? "bg-white text-black"
      : "bg-black text-white"
  } h-screen`;
};

export {
  generateMainH1Classes,
  generateButtonClasses,
  generateNavBarClasses,
  generateSideBarClasses,
  generatePageHomeClasses,
  generateDarkModeClasses,
  generateSideBarH1Classes,
  generateNavBarOpenClasses,
  generateNavBarItemsClasses,
  generateSideBarLabelClasses,
  generateDarkModeIconClasses,
  generateMainH1ItalicClasses,
};
