import React from "react";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IImage } from "@/Interface/IImage";
import { getPortfolioHome } from "@/lib/contentful";

const About = async () => {
  const data = await getPortfolioHome(
    process.env.CONTENTFUL_PORTFOLIO_HOME_ID as string
  );
  if (!data) return null;

  const { aboutContent } = data;
  if (!aboutContent) return null;

  const aboutImage = data.aboutImage as IImage;

  return (
    <>
      <section>
        <h2
          className="text-header-md py-sm px-xs md:text-header-md-D md:px-sm md:py-xs 2xl:px-Dxl"
          id="about"
        >
          _About
        </h2>
      </section>

      {/* ABOUT Mobile 640 */}
      <section className="p-xs md:hidden lg:hidden">
        {aboutImage && (
          <Image
            src={"https:" + aboutImage.fields.file?.url}
            alt="Personal Photo"
            width={800}
            height={700}
            className="px-md pb-md"
          />
        )}
        <div className="text-body-md">
          {documentToReactComponents(aboutContent)}
        </div>
      </section>
      <section className="md:hidden lg:hidden flex px-xs py-xs">
        <a
          href="mailto:hello@lvanni.org"
          className="text-body-md text-core-jet hover:text-user-blue hover:border-user-blue email"
        >
          hello@lvanni.org
        </a>
      </section>


      {/* ABOUT Tablet */}
      <section className="hidden lg:hidden md:flex md:px-sm">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <div className="text-body ">
              {documentToReactComponents(aboutContent)}
            </div>
          </div>
          <div className="col-span-1">
            {aboutImage && (
              <Image
                src={"https:" + aboutImage.fields.file?.url}
                alt="Personal Photo"
                width={500}
                height={700}
                className="px-sm py-xs ml-sm"
              />
            )}
          </div>
        </div>
      </section>

      <section className="hidden lg:hidden md:flex md:px-sm md:py-xs">
        <a
          href="mailto:hello@lvanni.org"
          className="md:text-body text-core-jet hover:text-user-blue hover:border-user-blue email"
        >
          hello@lvanni.org
        </a>
      </section>


      {/* ABOUT Desktop */}
      <section className="hidden md:hidden lg:flex md:px-sm 2xl:px-Dxl">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 py-lg">
            <div className="lg:text-body-md-D 2xl:text-body-D 2xl:mr-md">
              {documentToReactComponents(aboutContent)}
            </div>
          </div>
          <div className="col-span-1">
            {aboutImage && (
              <Image
                src={"https:" + aboutImage.fields.file?.url}
                alt="Personal Photo"
                width={600}
                height={700}
                className="lg:px-sm lg:py-lg 2xl:ml-lg"
              />
            )}
          </div>
        </div>
      </section>

      <section className="hidden md:hidden lg:flex lg:px-sm pt-md 2xl:px-Dxl">
        <a
          href="mailto:hello@lvanni.org"
          className="lg:text-body-md-D text-core-jet hover:text-user-blue hover:border-user-blue email"
        >
          hello@lvanni.org
        </a>
      </section>
    </>
  );
};

export default About;
