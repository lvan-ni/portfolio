import Hero from "@/app/Components/Hero";
import Projects from "@/app/Components/Projects";
import About from "@/app/Components/About";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { getPortfolioHome } from "@/lib/contentful";

const Home = async () => {
  const data = await getPortfolioHome(
    process.env.CONTENTFUL_PORTFOLIO_HOME_ID as string
  );
  if (!data) return null;

  const { introContent } = data;
  if (!introContent) return null;
  return (
    <main className="bg-core-stone text-core-jet">
      <Hero />
      <Projects />
      <About /> 
    </main>
  );
};

export default Home;
