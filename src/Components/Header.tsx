"use client";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center outline p-xs pt-lg bg-gray-100">
      <a href="#hero" className="text-logo">L_N</a>
      <div className="flex justify-between items-center gap-4 text-body-md">
        <a href="#projects">_Projects</a>
        <a href="#about">_About</a>
      </div>
    </header>
  );
};

export default Header;
