import React from 'react';
import APIBasics from '@/components/GSAP/APIBasics/APIBasics';
import AdditionalMethods from '@/components/GSAP/AdditionalMethods/AdditionalMethods';

const blog = () => {
  return (
    <>
      <section className='px-xs py-sm md:px-sm md:py-xs lg:px-Dxs lg:py-md 2xl:px-Dxl'>
        <h2
          className="text-header-md md:text-header-T lg:text-header-md-D"
        >
          _Blog
        </h2>
      </section>
      <section className='flex flex-col gap-4'>
        <APIBasics />
        <AdditionalMethods />
      </section>
    </>
  );
};

export default blog;
