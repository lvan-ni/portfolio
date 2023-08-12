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
      <section className="py-sm px-xs lg:px-Dxs lg:py-md">
        <h2 className="text-header-md lg:text-header-md-D" id="projects">
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
              <article key={project.sys.id} className="p-xs lg:hidden">
                <Image
                  src={"https:" + TitleImage.fields.file.url}
                  alt="Project Title Image"
                  width={800}
                  height={500}
                  className="p-xs"
                />
                <h3 className="text-body-lg lg:text-body-lg-D my-xs">
                  {ProjectTitle}
                </h3>
                <div className="text-body-lg lg:text-body-md-D">
                  {ProjectDescription &&
                    documentToReactComponents(ProjectDescription)}
                </div>
              </article>

              {/* PROJECTS Tablet Landscape (iPad: 1024) + Laptop */}
              <article
                key={project.sys.id + project.sys.space}
                className="hidden lg:flex space-between px-Dxs xl:px-Dlg py-sm "
              >
                <Image
                  src={"https:" + TitleImage.fields.file.url}
                  alt="Project Title Image"
                  width={500}
                  height={500}
                  className="p-xs"
                />
                <div className="flex flex-col items-start gap-4 p-sm">
                  <h3 className="text-body-lg lg:text-body-lg-D my-xs">
                    {ProjectTitle}
                  </h3>
                  <div className="text-body-lg lg:text-body-md-D">
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
