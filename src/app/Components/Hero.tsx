import React from 'react';
import { getPortfolioHome } from '@/lib/contentful';

const Hero = async () => {
  const data = await getPortfolioHome(
    process.env.CONTENTFUL_PORTFOLIO_HOME_ID as string
  );
  if (!data) return null;

  const { introContent } = data;
  if (!introContent) return null;

  return (
    <div id='hero'>
      {/* HERO Mobile 320 */}
      <div className='md:hidden lg:hidden'>
        <section className='p-xs'>
          <h1 className='text-header s:text-header-lg'>Lvan Ni</h1>
          <h1 className='text-header s:text-header-lg'>_Design_Dev</h1>
        </section>

        <section className='p-xs'>
          <p className='text-body-lg'>
            As a Full-Stack Developer and UX designer, I approach problems from
            a combined perspective, crafting intuitive and effective solutions.
          </p>
          <br />
          <p className='text-body-lg'>
            Currently consulting with a startup redesigning and rebuilding their
            user experience and web app.
          </p>
          <br />
          <p className='text-body-lg'>
            In my free time, I&apos;m delving into GSAP, excited to bring a new
            dimension of dynamic interactive animations to future projects.
          </p>
        </section>

        <section className='p-xs'>
          <a
            href='mailto:lvan.ni@appliedtechnology.se'
            className='text-body-md text-core-jet hover:text-user-blue hover:border-user-blue email'
          >
            Explore Your Vision
          </a>
        </section>
      </div>

      {/* HERO Tablet 768 */}
      <div className='hidden md:block lg:hidden'>
        <section className='md:px-sm md:py-xs'>
          <h1 className='text-header-D'>Lvan Ni</h1>
          <h1 className='text-header-D'>_Designer_Developer</h1>
        </section>

        <section className='px-sm py-xs'>
          <p className='text-body-md-D'>
            As a Full-Stack Developer and UX designer, I approach problems from
            a combined perspective, crafting intuitive and effective solutions.
          </p>
          <br />
          <p className='text-body-md-D'>
            Currently consulting with a startup redesigning and rebuilding their
            user experience and web app.
          </p>
          <br />
          <p className='text-body-md-D'>
            In my free time, I&apos;m delving into GSAP, excited to bring a new
            dimension of dynamic interactive animations to future projects.
          </p>
        </section>

        <section className='md:px-sm md:py-xs'>
          <a
            href='mailto:lvan.ni@appliedtechnology.se'
            className='md:text-body text-core-jet hover:text-user-blue hover:border-user-blue email'
          >
            Explore Your Vision
          </a>
        </section>
      </div>

      {/* HERO DESKTOP 1024+ */}
      <div className='hidden lg:block'>
        <section className='lg:px-Dxs lg:py-sm 2xl:px-Dxl'>
          <h1 className='lg:text-header-lg-D'>Lvan Ni</h1>
          <h1 className='lg:text-header-lg-D'>_Designer_Developer</h1>
        </section>

        <section className='lg:px-Dxs lg:py-sm 2xl:px-Dxl'>
          <p className='lg:text-body-lg-D'>
            As a Full-Stack Developer and UX designer, I approach problems from
            a combined perspective, crafting intuitive and effective solutions.
          </p>
          <br />
          <p className='lg:text-body-lg-D'>
            Currently consulting with a startup redesigning and rebuilding their
            user experience and web app.
          </p>
          <br />
          <p className='lg:text-body-lg-D'>
            In my free time, I&apos;m delving into GSAP, excited to bring a new
            dimension of dynamic interactive animations to future projects.
          </p>
        </section>

        <section className='lg:px-Dxs lg:py-sm 2xl:px-Dxl'>
          <a
            href='mailto:lvan.ni@appliedtechnology.se'
            className='lg:text-body-md-D text-core-jet hover:text-user-blue hover:border-user-blue email'
          >
            Explore Your Vision
          </a>
        </section>
      </div>
    </div>
  );
};

export default Hero;
