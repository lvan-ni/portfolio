import React from "react";
import Image from "next/image";
import { getPortfolioHome } from "@/lib/contentful";

const About = async () => {
  const data = await getPortfolioHome();
  if (!data) return null;

  const { aboutImage, aboutContent } = data[0].fields;
  const AboutText = aboutContent?.content[0].content[0].value;

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
            src={"https:" + aboutImage?.fields.file?.url}
            alt="Personal Photo"
            width={800}
            height={700}
            className="px-md pb-xs"
          />
        )}
        <p className="text-body-md lg:text-body-lg-D">{AboutText}</p>
      </section>

      {/* ABOUT Desktop */}
      <section className="hidden lg:flex lg:px-Dxs">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            {aboutImage && (
              <Image
                src={"https:" + aboutImage?.fields.file?.url}
                alt="Personal Photo"
                width={aboutImage?.fields.file?.details.image?.width}
                height={aboutImage?.fields.file?.details.image?.height}
                className="lg:px-Dsm lg:pb-md"
              />
            )}
          </div>
          <div className="col-span-1">
            <p className="text-body-md lg:text-body-md-D">{AboutText}</p>
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
