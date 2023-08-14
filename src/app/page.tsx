import Hero from "@/app/Components/Hero";
import Projects from "@/app/Components/Projects";
import About from "@/app/Components/About";

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
