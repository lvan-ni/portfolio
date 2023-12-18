'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo-header.png';

const Header = () => {
  // const handleScrollHero = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   e.preventDefault();
  //   const heroSection = document.querySelector('#hero');
  //   const offset = -100;

  //   if (heroSection) {
  //     const top = (heroSection as HTMLElement).offsetTop + offset;
  //     window.scrollTo({
  //       top,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  // const handleScrollProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   e.preventDefault();
  //   const projectsSection = document.querySelector('#projects');
  //   const offset = -90;

  //   if (projectsSection) {
  //     const top = (projectsSection as HTMLElement).offsetTop + offset;
  //     window.scrollTo({
  //       top,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  // const handleScrollBlog = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   e.preventDefault();
  //   const blogSection = document.querySelector('#blog');
  //   const offset = -90;

  //   if (blogSection) {
  //     const top = (blogSection as HTMLElement).offsetTop + offset;
  //     window.scrollTo({
  //       top,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  // const handleScrollAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   e.preventDefault();
  //   const aboutSection = document.querySelector('#about');
  //   const offset = -90;

  //   if (aboutSection) {
  //     const top = (aboutSection as HTMLElement).offsetTop + offset;
  //     window.scrollTo({
  //       top,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  return (
    <header className='sticky top-0 z-50 flex justify-between items-center bg-core-stone text-core-jet p-xs md:px-sm md:py-xs lg:px-Dxs lg:py-xs 2xl:px-Dxl'>
      <Link
        href='/'
        // onClick={handleScrollHero}
      >
        <Image
          src={logo}
          alt='logo'
          className='w-sm lg:w-lg'
        />
      </Link>
      <div className='flex justify-between items-center gap-4 text-body-md md:text-body lg:text-body-md-D'>
        {/* <a
          href='#projects'
          // onClick={handleScrollProjects}
          className='text-core-jet hover:text-user-blue'
        >
          _Projects
        </a> */}
        <Link
          href='/journal'
          className='text-core-jet hover:text-user-blue'
        >
          _Journal
        </Link>
        <Link
          href='/about'
          className='text-core-jet hover:text-user-blue'
        >
          _About
        </Link>
      </div>
    </header>
  );
};

export default Header;
