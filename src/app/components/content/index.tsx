"use client";

import Image from "next/image";
import fundo from  "../../assets/background.jpg"

const Content = () => {
  return <div>
    <Image src={fundo} alt="" />
  </div>;
};

export default Content;
