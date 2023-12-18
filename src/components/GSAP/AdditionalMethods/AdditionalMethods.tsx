'use client';
import React, { useLayoutEffect } from 'react';
import logo from '@/assets/logo2.svg';
import Image from 'next/image';
import gsap from 'gsap';

const AdditionalMethods = () => {
  const lvanRef = React.useRef() as React.MutableRefObject<HTMLImageElement>;

  useLayoutEffect(() => {
    let lvan = gsap.context(() => {
      gsap.to(lvanRef.current, {
        duration: 1.5,
        opacity: 0,
        scale: 0.3,
        ease: 'back',
      });
    });
    return () => lvan.revert();
  }, []);

  return (
    <div className='mx-sm md:mx-md lg:mx-Dxs 2xl:mx-Dsm'>
      <h1>Addtional Methods</h1>
      <div className='p-4'>
        <Image
          src={logo}
          alt='logo'
          priority={true}
          ref={lvanRef}
        />
        {/* <Image
        src={grow}
        alt='grow'
        className='grow'
        priority={true}
      /> */}
      </div>
    </div>
  );
};

export default AdditionalMethods;
