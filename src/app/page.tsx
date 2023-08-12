import Hero from "@/Components/Hero";
import Projects from "@/Components/Projects";
import About from "@/Components/About";

const Home = async () => {

  return (
    <main className="bg-core-stone text-core-jet">
      <Hero />
      <Projects />
      <About />
    </main>
  );
};

export default Home;
