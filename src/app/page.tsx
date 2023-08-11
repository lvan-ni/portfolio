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
    <main className="bg-core-stone text-core-jet">
      <section id="hero" className="p-xs lg:px-Dxs lg:py-sm">
        <h1 className="text-header-lg lg:text-header-lg-desktop">Lvan Ni</h1>
        <h1 className="text-header-lg lg:hidden">_Designer</h1>
        <h1 className="text-header-lg lg:hidden">_Developer</h1>
        <h1 className="hidden lg:block lg:text-header-lg-desktop">
          _Designer_Developer
        </h1>
      </section>

      <section className="p-xs lg:px-Dxs lg:py-sm">
        <h3 className="text-body-lg lg:text-body-lg-desktop">{IntroText}</h3>
      </section>

      <section className="p-xs lg:px-Dxs lg:py-sm">
        <a
          href="mailto:hello@lvanni.org"
          className="text-body-md lg:text-body-md-desktop text-core-jet hover:text-user-blue hover:border-user-blue email"
        >
          hello@lvanni.org
        </a>
      </section>

      <section className="py-sm px-xs lg:px-Dxs lg:py-md">
        <h2 className="text-header-md lg:text-header-md-desktop" id="projects">
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
            <>
            {/* Mobile */}
              <article key={project.sys.id} className="p-xs lg:hidden">
                <Image
                  src={"https:" + TitleImageURL}
                  alt="Project Title Image"
                  width={500}
                  height={500}
                  className="p-xs"
                />
                <h3 className="text-body-lg lg:text-body-lg-desktop my-xs">
                  {ProjectTitle}
                </h3>
                <p className="text-body-lg lg:text-body-md-desktop">
                  {ProjectDescription}
                </p>
              </article>

              {/* Desktop */}
              <article key={project.sys.id + project.sys.space} className="hidden lg:flex space-between px-Dlg py-sm ">
                <Image
                  src={"https:" + TitleImageURL}
                  alt="Project Title Image"
                  width={700}
                  height={500}
                  className="p-sm"
                />
                <div className="flex flex-col items-start gap-4 p-sm">
                <h3 className="text-body-lg lg:text-body-lg-desktop my-xs">
                  {ProjectTitle}
                </h3>
                <p className="text-body-lg lg:text-body-md-desktop">
                  {ProjectDescription}
                </p>
                </div>
              </article>
            </>
          );
        })}
      </section>

      <section>
        <h2
          className="text-header-md lg:text-header-md-desktop py-sm px-xs lg:px-Dxs lg:py-md"
          id="about"
        >
          _About
        </h2>
      </section>

      {/* Mobile */}
      <section className="p-xs lg:hidden">
        {aboutImage && (
          <Image
            src={"https:" + aboutImage?.fields.file?.url}
            alt="Personal Photo"
            width={aboutImage?.fields.file?.details.image?.width}
            height={aboutImage?.fields.file?.details.image?.height}
            className="px-md pb-xs"
          />
        )}
        <p className="text-body-md lg:text-body-lg-desktop">{AboutText}</p>
      </section>

      {/* Desktop */}
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
            <p className="text-body-md lg:text-body-md-desktop">{AboutText}</p>
          </div>
        </div>
      </section>

      <section className="p-xs pb-sm lg:px-Dxs lg:py-md">
        <a
          href="mailto:hello@lvanni.org"
          className="text-body-md lg:text-body-md-desktop text-core-jet hover:text-user-blue hover:border-user-blue email"
        >
          hello@lvanni.org
        </a>
      </section>
    </main>
  );
};

export default Home;
