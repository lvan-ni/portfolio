import React from "react";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IImage } from "@/Interface/IImage";
import { getPortfolioHome } from "@/lib/contentful";

const About = async () => {
  const data = await getPortfolioHome(process.env.CONTENTFUL_PORTFOLIO_HOME_ID as string);
  if (!data) return null;

  const { aboutContent } = data;
  if (!aboutContent) return null;

  const aboutImage = data.aboutImage as IImage;
  
  return (
    <>
      <section>
        <h2
          className="text-header-md lg:text-header-md-D py-sm px-xs lg:px-Dxs lg:py-md"
          id="about"
        >
          _About
        </h2>
      </section>

      {/* ABOUT Mobile */}
      <section className="p-xs lg:hidden">
        {aboutImage && (
          <Image
            src={"https:" + aboutImage.fields.file?.url}
            alt="Personal Photo"
            width={800}
            height={700}
            className="px-md pb-xs"
          />
        )}
        <div className="text-body-md lg:text-body-lg-D">{documentToReactComponents(aboutContent)}</div>
      </section>

      {/* ABOUT Desktop */}
      <section className="hidden lg:flex lg:px-Dxs">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            {aboutImage && (
              <Image
                src={"https:" + aboutImage.fields.file?.url}
                alt="Personal Photo"
                width={500}
                height={700}
                className="lg:px-Dsm lg:pb-md"
              />
            )}
          </div>
          <div className="col-span-1">
            <div className="text-body-md lg:text-body-md-D">{documentToReactComponents(aboutContent)}</div>
          </div>
        </div>
      </section>

      <section className="p-xs pb-sm lg:px-Dxs lg:py-md">
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

export default About;
