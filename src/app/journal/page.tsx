import React from 'react';
import APIBasics from '@/components/GSAP/APIBasics/APIBasics';
import AdditionalMethods from '@/components/GSAP/AdditionalMethods/AdditionalMethods';
import ControlMethods from '@/components/GSAP/ControlMethods/ControlMethods';

const blog = () => {
  return (
    <>
      <section className='px-xs py-sm md:px-sm md:py-xs lg:px-Dxs lg:py-md 2xl:px-Dxl'>
        <h2
          className="text-header-md md:text-header-T lg:text-header-md-D"
        >
          _Journal
        </h2>
      </section>
      <section className='flex flex-col gap-8'>
        <APIBasics />
        {/* <AdditionalMethods /> */}
        <ControlMethods />
      </section>
    </>
  );
};

export default blog;
