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
          className="text-header-md py-sm px-xs md:text-header-md-D md:px-sm md:py-xs"
          id="about"
        >
          _About
        </h2>
      </section>

      {/* ABOUT Mobile 640 */}
      <section className="p-xs md:hidden">
        {aboutImage && (
          <Image
            src={"https:" + aboutImage.fields.file?.url}
            alt="Personal Photo"
            width={800}
            height={700}
            className="px-md pb-md"
          />
        )}
        <div className="text-body-md lg:text-body-lg-D">{documentToReactComponents(aboutContent)}</div>
      </section>

      {/* ABOUT Tablet 640 - 1024 */}
      <section className="hidden md:flex md:px-sm">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            {aboutImage && (
              <Image
                src={"https:" + aboutImage.fields.file?.url}
                alt="Personal Photo"
                width={500}
                height={700}
                className="md:px-sm py-xs"
              />
            )}
          </div>
          <div className="col-span-1">
            <div className="md:text-body-lg">{documentToReactComponents(aboutContent)}</div>
          </div>
        </div>
      </section>

      <section className="md:px-sm md:py-xs">
        <a
          href="mailto:hello@lvanni.org"
          className="md:text-body-lg text-core-jet hover:text-user-blue hover:border-user-blue email"
        >
          hello@lvanni.org
        </a>
      </section>
    </>
  );
};

export default About;
