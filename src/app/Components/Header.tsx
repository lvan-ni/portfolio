import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center p-xs lg:px-Dxs pt-xs lg:py-md bg-core-stone text-core-jet">
      <a href="#hero">
        <img
          src="/logo-header.png"
          className="w-sm lg:w-lg"
        />
      </a>
      <div className="flex justify-between items-center gap-4 text-body-md lg:text-body-md-D">
        <a href="#projects" className="text-core-jet hover:text-user-blue">
          _Projects
        </a>
        <a href="#about" className="text-core-jet hover:text-user-blue">
          _About
        </a>
      </div>
    </header>
  );
};

export default Header;
