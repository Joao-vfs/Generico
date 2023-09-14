"use client";

import userContext from "@/app/contexts";
import Image from "next/image";
import React, { useContext } from "react";
import JOAO from "../../assets/img/joao.png";
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiMinutemailer,
} from "react-icons/si";

export const Contacts: React.FC = () => {
  const userContextData = useContext(userContext);
  if (!userContextData) {
    return null;
  }
  const { moveArrow } = userContextData;

  const contactsItems = [
    { name: "Email", icon: <SiMinutemailer size={60} /> },
    { name: "Instagram", icon: <SiInstagram size={60} /> },
    { name: "Linkedin", icon: <SiLinkedin size={60} /> },
    { name: "GitHub", icon: <SiGithub size={60} /> },
  ];

  return (
    <div
      className={`flex justify-evenly items-center  ${
        moveArrow ? "animate-fade-rigth" : "animate-fade-left"
      } `}
    >
      <div>
        <h1 className="text-4xl bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#EF4444] text-transparent">
          CONTATOS.
        </h1>
        <span>Entre em contato comigo pelas redes sociais ou e-mail.</span>
        <div className="flex flex-wrap gap-6 py-5">
          {contactsItems.map((contact) => {
            return (
              <div className="group relative" key={contact.name}>
                <button className="hover:scale-105 hover:text-blue-500">
                  {contact.icon}
                </button>
                <span
                  className="absolute top-14 left-[50%] -translate-x-[50%] 
                  z-20 origin-left scale-0 px-3 rounded-lg border 
                  border-gray-300 bg-white py-2 text-sm font-bold
                  shadow-md transition-all duration-300 ease-in-out 
                  group-hover:scale-100"
                >
                  <span className={` text-black`}>{contact.name}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="shadow-2xl  w-80 h-80  bg-gradient-to-r from-[#F59E0B] to-[#EF4444] flex justify-center items-center rounded-br-[70%] rounded-tr-[70%] rounded-bl-[70%] rounded-tl-[30%]">
        <Image
          src={JOAO}
          width={600}
          height={600}
          alt=""
          className="object-cover rounded-full mt-[-6.5rem]"
        />
      </div>
    </div>
  );
};
