import React from "react";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IImage } from "@/Interface/IImage";
import { getPortfolioProjects } from "@/lib/contentful";

const Projects = async () => {
  const projects = await getPortfolioProjects();
  if (!projects) return null;

  return (
    <>
      <section className="px-xs py-sm md:px-sm md:py-xs lg:px-Dxs lg:py-md 2xl:px-Dxl">
        <h2
          className="text-header-md md:text-header-md-D lg:text-header-md-D"
          id="projects"
        >
          _Projects
        </h2>
      </section>

      <section>
        {projects.map((project) => {
          const ProjectTitle = project.fields.projectTitle?.toString();
          const ProjectDescription = project.fields.description;
          const TitleImage = project.fields.titleImage as IImage;

          return (
            <>
              {/* PROJECTS Mobile */}
              <article
                key={project.sys.id}
                className="p-xs md:hidden lg:hidden"
              >
                <Image
                  src={"https:" + TitleImage.fields.file.url}
                  alt="Project Title Image"
                  width={800}
                  height={500}
                  className="p-xs"
                />
                <h3 className="text-body-lg">{ProjectTitle}</h3>
                <div className="text-body-lg">
                  {ProjectDescription &&
                    documentToReactComponents(ProjectDescription)}
                </div>
              </article>

              {/* PROJECTS Tablet 768 */}
              <article
                key={project.sys.id + project.sys.space}
                className="hidden lg:hidden md:flex space-between px-xs py-sm"
              >
                <Image
                  src={"https:" + TitleImage.fields.file.url}
                  alt="Project Title Image"
                  width={500}
                  height={500}
                  className="p-xs"
                />
                <div className="flex flex-col items-start gap-4">
                  <h3 className="text-body-lg">{ProjectTitle}</h3>
                  <div className="text-body">
                    {ProjectDescription &&
                      documentToReactComponents(ProjectDescription)}
                  </div>
                </div>
              </article>

              {/* PROJECTS Desktop 1024+ */}
              <article
                key={project.sys.id}
                className="hidden md:hidden lg:flex space-between px-Dxs py-sm 2xl:px-Dxl"
              >
                <Image
                  src={"https:" + TitleImage.fields.file.url}
                  alt="Project Title Image"
                  width={600}
                  height={500}
                  className="p-xs 2xl:ml-lg"
                />
                <div className="flex flex-col items-start gap-4 pl-md 2xl:px-Dlg">
                  <h3 className="text-body-lg-D">{ProjectTitle}</h3>
                  <div className="text-body-D">
                    {ProjectDescription &&
                      documentToReactComponents(ProjectDescription)}
                  </div>
                </div>
              </article>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Projects;
