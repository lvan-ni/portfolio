// import Hero from "@/Components/Hero";
import Projects from "@/Components/Projects";
import About from "@/Components/About";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { getPortfolioHome } from "@/lib/contentful";

const Home = async () => {
  const data = await getPortfolioHome(process.env.CONTENTFUL_PORTFOLIO_HOME_ID as string);
  if (!data) return null;

  const { introContent } = data;
  if (!introContent) return null;
  return (
    <main className="bg-core-stone text-core-jet">
      {/* <Hero />
      <Projects />
      <About /> */}
      <section id="hero" className="p-xs lg:px-Dxs lg:py-sm">
        <h1 className="text-header-lg lg:text-header-lg-D">Lvan Ni</h1>
        <h1 className="text-header-lg lg:hidden">_Designer</h1>
        <h1 className="text-header-lg lg:hidden">_Developer</h1>
        <h1 className="hidden lg:block lg:text-header-lg-D">
          _Designer_Developer
        </h1>
      </section>

      <section className="p-xs lg:px-Dxs lg:py-sm">
        <h3 className="text-body-lg lg:text-body-lg-D">
          {documentToReactComponents(introContent)}
        </h3>
      </section>

      <section className="p-xs lg:px-Dxs lg:py-sm">
        <a
          href="mailto:hello@lvanni.org"
          className="text-body-md lg:text-body-md-D text-core-jet hover:text-user-blue hover:border-user-blue email"
        >
          hello@lvanni.org
        </a>
      </section>
    </main>
  );
};

export default Home;
