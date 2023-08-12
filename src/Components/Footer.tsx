import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center p-xs pb-md lg:p-Dxs lg:pb-Dsm text-body-md bg-core-stone text-core-jet">
      <p className="lg:text-body-md-D">copyright©lvanni</p>
      <div className="flex justify-between items-center gap-4 text-body-md lg:text-body-md-D">
        <a
          href="https://www.linkedin.com/in/lvan-ni/"
          className="text-core-jet hover:text-user-blue"
        >
          _LinkedIn
        </a>
        <a
          href="https://github.com/lvan-ni"
          className="text-core-jet hover:text-user-blue"
        >
          _Github
        </a>
      </div>
    </footer>
  );
};

export default Footer;
