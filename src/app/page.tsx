import Hero from '@/components/Hero/Hero';
import Projects from '@/components/Projects/Projects';
import About from '@/components/About/About';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

const Home = async () => {
  return (
    <>
      <Header />
      <main className='bg-core-stone text-core-jet'>
        <Hero />
        <Projects />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default Home;
