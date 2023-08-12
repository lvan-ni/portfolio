import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { getPortfolioHome } from "@/lib/contentful";

const Hero = async () => {
  const data = await getPortfolioHome(
    process.env.CONTENTFUL_PORTFOLIO_HOME_ID as string
  );
  if (!data) return null;

  const { introContent } = data;
  if (!introContent) return null;

  return (
    <>
      {/* HERO Mobile */}
      <div className="md:hidden lg:hidden">
        <section id="hero" className="p-xs">
          <h1 className="text-header">Lvan Ni</h1>
          <h1 className="text-header">_Design_Dev</h1>
        </section>

        <section className="p-xs">
          <h3 className="text-body-lg">
            {documentToReactComponents(introContent)}
          </h3>
        </section>

        <section className="p-xs">
          <a
            href="mailto:hello@lvanni.org"
            className="text-body-md text-core-jet hover:text-user-blue hover:border-user-blue email"
          >
            hello@lvanni.org
          </a>
        </section>
      </div>

      {/* HERO Tablet */}
      <div className="hidden md:block lg:hidden">
        <section id="hero" className="md:px-sm md:py-xs">
          <h1 className="md:text-header-lg">Lvan Ni</h1>
          <h1 className="md:text-header-lg">
            _Designer_Developer
          </h1>
        </section>

        <section className="md:px-sm md:py-xs">
          <h3 className="md:text-body-lg">
            {documentToReactComponents(introContent)}
          </h3>
        </section>

        <section className="md:px-sm md:py-xs">
          <a
            href="mailto:hello@lvanni.org"
            className="md:text-body text-core-jet hover:text-user-blue hover:border-user-blue email"
          >
            hello@lvanni.org
          </a>
        </section>
      </div>

      {/* HERO DESKTOP */}
      <div className="hidden lg:block">
        <section id="hero" className="lg:px-Dxs lg:py-sm">
          <h1 className="lg:text-header-lg-D">Lvan Ni</h1>
          <h1 className="lg:text-header-lg-D">
            _Designer_Developer
          </h1>
        </section>

        <section className="lg:px-Dxs lg:py-sm">
          <h3 className="lg:text-body-lg-D">
            {documentToReactComponents(introContent)}
          </h3>
        </section>

        <section className="lg:px-Dxs lg:py-sm">
          <a
            href="mailto:hello@lvanni.org"
            className="lg:text-body-md-D text-core-jet hover:text-user-blue hover:border-user-blue email"
          >
            hello@lvanni.org
          </a>
        </section>
      </div>
    </>
  );
};

export default Hero;
