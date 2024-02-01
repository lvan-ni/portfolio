import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IImage } from "@/Interface/IImage";
import { getPortfolioProjects } from "@/lib/contentful";

const Projects = async () => {
  const projects = await getPortfolioProjects();
  
  if (!projects) return null;
  

  return (
    <div className="my-sm md:my-md lg:my-Dxs 2xl:my-Dsm">
      <section className="px-xs py-sm md:px-sm md:py-xs lg:px-Dxs lg:py-md 2xl:px-Dxl">
        <h2
          className="text-header-md md:text-header-T lg:text-header-md-D"
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
          if (!ProjectDescription) return null;

          return (
            <>
              {/* PROJECTS Mobile 320 */}
              <article
                key={project.sys.id}
                className="p-xs md:hidden lg:hidden"
              >
                <video
                  autoPlay
                  playsInline
                  muted
                  loop
                  preload="auto"
                  className="py-xs"
                  width={800}
                  height={700}
                >
                  <source
                    src={"https:" + TitleImage.fields.file.url}
                    type="video/mp4"
                  />
                </video>
                <h3 className="project-title-lg pb-xs">{ProjectTitle}</h3>
                <div className="text-body whitespace-pre-line">
                  {documentToReactComponents(ProjectDescription)}
                </div>
              </article>

              {/* PROJECTS Tablet 768 */}
              <article
                key={project.sys.id + 'tablet'}
                className="hidden lg:hidden md:flex space-between px-xs py-sm"
              >
                <video
                  autoPlay
                  playsInline
                  muted
                  loop
                  preload="auto"
                  className="p-xs"
                  width={500}
                  height={700}
                >
                  <source
                    src={"https:" + TitleImage.fields.file.url}
                    type="video/mp4"
                  />
                </video>
                <div className="flex flex-col items-start gap-4">
                  <h3 className="project-title-lg pb-xs">{ProjectTitle}</h3>
                  <div className="text-body whitespace-pre-line">
                    {documentToReactComponents(ProjectDescription)}
                  </div>
                </div>
              </article>

              {/* PROJECTS Desktop 1024+ */}
              <article
                key={project.sys.id + 'desktop'}
                className="hidden md:hidden lg:flex space-between px-Dxs py-sm 2xl:px-Dxl"
              >
                <video
                  autoPlay
                  playsInline
                  muted
                  loop
                  preload="auto"
                  className="p-xs"
                  width={600}
                  height={700}
                >
                  <source
                    src={"https:" + TitleImage.fields.file.url}
                    type="video/mp4"
                  />
                </video>
                <div className="flex flex-col items-start gap-4 pl-md 2xl:px-Dlg">
                  <h3 className="project-title-D pb-xs 2xl:project-title-lg-D">
                    {ProjectTitle}
                  </h3>
                  <div className="text-body-md-D 2xl:text-body-D whitespace-pre-line">
                    {documentToReactComponents(ProjectDescription)}
                  </div>
                </div>
              </article>
            </>
          );
        })}
      </section>
    </div>
  );
};

export default Projects;
