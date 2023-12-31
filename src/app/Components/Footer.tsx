import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center text-body-md md:text-body bg-core-stone text-core-jet p-xs pb-md md:px-sm md:pb-Dxs lg:p-Dxs lg:pb-Dsm 2xl:px-Dxl 2xl:pb-Dmd">
      <p className="lg:text-body-md-D">copyright©lvanni</p>
      <div className="flex justify-between items-center gap-4 text-body-md md:text-body lg:text-body-md-D">
        <a
          href="https://github.com/lvan-ni"
          className="text-core-jet hover:text-user-blue"
        >
          _Github
        </a>
        <a
          href="https://www.linkedin.com/in/lvan-ni/"
          className="text-core-jet hover:text-user-blue"
        >
          _LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
