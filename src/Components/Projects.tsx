import React from "react";
import Image from "next/image";
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
          const ProjectDescription =
            project.fields.description?.content[0].content[0].value;
          const TitleImageURL = project.fields.titleImage?.fields.file.url;

          return (
            <>
              {/* PROJECTS Mobile */}
              <article key={project.sys.id} className="p-xs lg:hidden">
                <Image
                  src={"https:" + TitleImageURL}
                  alt="Project Title Image"
                  width={800}
                  height={500}
                  className="p-xs"
                />
                <h3 className="text-body-lg lg:text-body-lg-D my-xs">
                  {ProjectTitle}
                </h3>
                <p className="text-body-lg lg:text-body-md-D">
                  {ProjectDescription}
                </p>
              </article>

              {/* PROJECTS Desktop */}
              <article
                key={project.sys.id + project.sys.space}
                className="hidden lg:flex space-between px-Dlg py-sm "
              >
                <Image
                  src={"https:" + TitleImageURL}
                  alt="Project Title Image"
                  width={700}
                  height={500}
                  className="p-sm"
                />
                <div className="flex flex-col items-start gap-4 p-sm">
                  <h3 className="text-body-lg lg:text-body-lg-D my-xs">
                    {ProjectTitle}
                  </h3>
                  <p className="text-body-lg lg:text-body-md-D">
                    {ProjectDescription}
                  </p>
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
