const generateNavBarClasses = (active: boolean) => {
  return `${`w-full h-[10%]  p-5 border-b-2 ${
    active
      ? "bg-black text-white border-white"
      : " bg-white text-black border-black"
  } animate-fade-up`}`;
};

const generateNavBarItemsClasses = () => {
  return `${` text-5xl cursor-pointer transition ease-in-out duration-75 hover:scale-125`}`;
};

const generateNavBarOpenClasses = (show: boolean) => {
  return `${` ${show && "backdrop-filter backdrop-blur-lg bg-transparent "}`}`;
};

const generateMainH1Classes = (active: boolean) => {
  return `${active ? "" : ""}  text-4xl overflow-hidden whitespace-nowrap`;
};

const generateMainH1ItalicClasses = () => {
  return `${" text-4xl overflow-hidden whitespace-nowrap"}`;
};

const generateButtonClasses = (active: boolean) => {
  return `
     h-[3rem] rounded-[10px] transition ease-in-out delay-100 duration-500 hover:scale-110 animate-fade-up animation-delay-4000ms  mt-10 w-[13rem]
    ${active ? "bg-black" : "bg-white"}
  `;
};

const generateSideBarClasses = (active: boolean) => {
  return `
    
    ${active ? "bg-white text-white" : " bg-white text-black"} 
   
  
  `;
};

const generateSideBarLabelClasses = (active: boolean) => {
  return `  ${
    active ? "" : ""
  } text-1xl flex  gap-[1rem] cursor-pointer animate-fade-up hover:border-b-2`;
};

const generateSideBarIconClasses = (active: boolean) => {
  return `  ${active ? "" : ""} text-3xl flex cursor-pointer animate-fade-left`;
};

const generateDarkModeClasses = (active: boolean) => {
  return `cursor-pointer items-center rounded-[50px] w-[5rem] h-[2rem] p-1 flex ${
    active ? "justify-start bg-black" : "justify-end bg-white"
  }  `;
};

const generateDarkModeIconClasses = (active: boolean) => {
  return `${
    active
      ? "animate-dark-mode-rigth text-white"
      : "animate-dark-mode-left text-black"
  } text-2xl`;
};

const generatePageHomeClasses = (active: boolean) => {
  return `" relative flex flex-col h-screen w-full transition-colors duration-1000 ease-in-out  ${
    active ? "bg-white text-black" : "bg-black text-white"
  } `;
};

export {
  generateMainH1Classes,
  generateButtonClasses,
  generateNavBarClasses,
  generateSideBarClasses,
  generatePageHomeClasses,
  generateDarkModeClasses,
  generateNavBarOpenClasses,
  generateNavBarItemsClasses,
  generateSideBarIconClasses,
  generateSideBarLabelClasses,
  generateDarkModeIconClasses,
  generateMainH1ItalicClasses,
};
