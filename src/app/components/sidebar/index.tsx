import { SidebarItems, SidebarProps } from "./type";

const Sidebar: React.FC<SidebarProps> = () => {
  const sidebarItems: SidebarItems[] = [
    { label: "Home" },
    { label: "Sobre" },
    { label: "Contatos" },
  ];
  return (
    <div className="absolute top-[20%] left-[26%] text-center">
      <ul className="flex flex-col gap-4">
        <h1 className="text-blue text-5xl">
          Olá bem vindo ao meu Portifólio ; )
        </h1>
        {sidebarItems.map((links, index): any => {
          return (
            <>
              <li
                className="text-white text-3xl transition ease-in-out delay-150 hover:text-blue duration-400 hover:scale-150 cursor-pointer"
                key={index}
              >
                <span>{links.label}</span>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
