'use client';
import React, { useEffect } from 'react';
import logo from '@/assets/logo2.svg';
import grow from '@/assets/logo-grow.svg';
import Image from 'next/image';
import gsap from 'gsap';

const AdditionalMethods = () => {

  useEffect(() => {
    gsap.to('.logo2', {
      duration: 1.5,
      opacity: 0,
      scale: 0.3,
      ease: 'back',
    });
  }, []);

  return (
    <div className='p-4'>
      <Image
        src={logo}
        alt='logo'
        className='logo2'
        priority={true}
      />
      {/* <Image
        src={grow}
        alt='grow'
        className='grow'
        priority={true}
      /> */}
    </div>
  );
};

export default AdditionalMethods;
