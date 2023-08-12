import React from "react";
import { getPortfolioHome } from "@/lib/contentful";

const Hero = async () => {
  const data = await getPortfolioHome();
  if (!data) return null;

  const { introContent } = data[0].fields;
  const IntroText = introContent?.content[0].content[0].value;

  return (
    <>
      <section id="hero" className="p-xs lg:px-Dxs lg:py-sm">
        <h1 className="text-header-lg lg:text-header-lg-D">Lvan Ni</h1>
        <h1 className="text-header-lg lg:hidden">_Designer</h1>
        <h1 className="text-header-lg lg:hidden">_Developer</h1>
        <h1 className="hidden lg:block lg:text-header-lg-D">
          _Designer_Developer
        </h1>
      </section>

      <section className="p-xs lg:px-Dxs lg:py-sm">
        <h3 className="text-body-lg lg:text-body-lg-D">{IntroText}</h3>
      </section>

      <section className="p-xs lg:px-Dxs lg:py-sm">
        <a
          href="mailto:hello@lvanni.org"
          className="text-body-md lg:text-body-md-D text-core-jet hover:text-user-blue hover:border-user-blue email"
        >
          hello@lvanni.org
        </a>
      </section>
    </>
  );
};

export default Hero;
