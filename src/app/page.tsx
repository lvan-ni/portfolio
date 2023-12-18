import Hero from '@/components/Hero/Hero';
import Projects from '@/components/Projects/Projects';

const Home = async () => {
  return (
    <>
      <main className='bg-core-stone text-core-jet'>
        <Hero />
        <Projects />
      </main>
    </>
  );
};

export default Home;
