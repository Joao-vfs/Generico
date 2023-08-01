"use client";

import React from "react";

type DarkModeProps = {
  toggleActive: any;
};

export const DarkMode: React.FC<DarkModeProps> = ({ toggleActive }) => {
  return (
    <div>
      <button className="fixed bottom-4 right-4" onClick={toggleActive}>
        DARK MODE
      </button>
    </div>
  );
};
