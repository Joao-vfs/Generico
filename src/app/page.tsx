"use client";
import { useState } from "react";
import { Header } from "./components/header";

export default function Home() {
  const [bright, setBright] = useState(false);
  console.log(bright, "bright");

  return (
    <>
      <Header />
      <button
        className={`bg-${
          bright ? 'white' : 'gray_weight'
        } absolute bottom-[3%] right-[2%] text-white`}
        onClick={() => setBright(!bright)}
      >
        Olá
      </button>
    </>
  );
}
