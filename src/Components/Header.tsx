"use client";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center p-xs lg:px-Dxs pt-lg lg:py-md bg-core-stone text-core-jet">
      <a href="#hero" className="text-logo text-core-jet hover:text-user-blue lg:text-logo-desktop">L_N</a>
      <div className="flex justify-between items-center gap-4 text-body-md lg:text-body-md-desktop">
        <a href="#projects" className="text-core-jet hover:text-user-blue">_Projects</a>
        <a href="#about" className="text-core-jet hover:text-user-blue">_About</a>
      </div>
    </header>
  );
};

export default Header;
