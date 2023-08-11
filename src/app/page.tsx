import { getPortfolioHome, getPortfolioProjects } from "@/lib/contentful";
import Image from "next/image";

const Home = async () => {
  const home = await getPortfolioHome();
  const projects = await getPortfolioProjects();
  if (!home) return null;
  if (!projects) return null;

  const { introContent, aboutImage, aboutContent } = home[0].fields;
  const IntroText = introContent?.content[0].content[0].value;
  const AboutText = aboutContent?.content[0].content[0].value;

  return (
    <main className="bg-gray-100">
      <section id="hero" className="p-xs">
        <h1 className="text-header-lg">Lvan Ni</h1>
        <h1 className="text-header-lg">_Design_Dev</h1>
      </section>

      <section className="p-xs">
        <h3 className="text-body-lg">{IntroText}</h3>
      </section>

      <section className="p-xs">
        <a href="mailto:hello@lvanni.org" className="text-body-md email">
          hello@lvanni.org
        </a>
      </section>

      <section className="py-sm px-xs">
        <h2 className="text-header-md" id="projects">
          _Projects
        </h2>
      </section>

      <section>
        {projects.map((project) => {
          const ProjectTitle = project.fields.projectTitle?.toString();
          const ProjectDescription =
            project.fields.description?.content[0].content[0].value;
          const TitleImageURL = project.fields.titleImage?.fields.file.url;
          const TitleImageWidth =
            project.fields.titleImage?.fields.file.details.image.width;
          const TitleImageHeight =
            project.fields.titleImage?.fields.file.details.image.height;

          return (
            <article key={project.sys.id} className="p-xs">
              <Image
                src={"https:" + TitleImageURL}
                alt="Project Title Image"
                width={TitleImageWidth}
                height={TitleImageHeight}
                className="mt-4"
              />
              <h3 className="text-body-lg my-xs">{ProjectTitle}</h3>
              <p className="text-body-md">{ProjectDescription}</p>
            </article>
          );
        })}
      </section>

      <section>
        <h2 className="text-header-md py-sm px-xs" id="about">
          _About
        </h2>
      </section>

      <section className="p-xs">
        {aboutImage && (
          <Image
            src={"https:" + aboutImage?.fields.file?.url}
            alt="Personal Photo"
            width={aboutImage?.fields.file?.details.image?.width}
            height={aboutImage?.fields.file?.details.image?.height}
            className="px-md pb-xs"
          />
        )}
        <p className="p-xs text-body-md">{AboutText}</p>
      </section>
      <section className="p-xs">
        <a href="mailto:hello@lvanni.org" className="text-body-md email">
          hello@lvanni.org
        </a>
      </section>
    </main>
  );
};

export default Home;
