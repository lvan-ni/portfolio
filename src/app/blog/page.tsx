import React from 'react';
import BackNav from '@/components/BackNav/BackNav';
import APIBasics from '@/components/GSAP/APIBasics/APIBasics';
import AdditionalMethods from '@/components/GSAP/AdditionalMethods/AdditionalMethods';

const blog = () => {
  return (
    <div className='py-sm px-xs md:px-sm md:py-xs lg:px-Dxs 2xl:px-Dxl'>
      <header className='flex justify-between items-center'>
        <BackNav />
        <h2 className='text-header-md md:text-header-T lg:text-header-md-D'>
          _Blog
        </h2>
      </header>
      <APIBasics />
      <AdditionalMethods />
    </div>
  );
};

export default blog;
