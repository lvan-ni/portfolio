'use client';
import React, { useLayoutEffect } from 'react';
import logo from '@/assets/logo2.svg';
import Image from 'next/image';
import gsap from 'gsap';

const ControlMethods = () => {
  const lvanRef = React.useRef() as React.MutableRefObject<HTMLImageElement>;

  useLayoutEffect(() => {
    let lvan = gsap.context(() => {
      gsap.from(lvanRef.current, {
        duration: 1.5,
        opacity: 0,
        scale: 0.3,
        ease: 'back',
      });
    });

    let circle = gsap.context(() => {
      gsap.from('.circle', {
        duration: 1,
        opacity: 0,
        // y: 150,
        // y: () => Math.random() * 400 - 200,
        y: 'random(-200, 200)',
        stagger: 0.25,
      });
    });

    return () => {
      lvan.revert();
      circle.revert();
    };
  }, []);

  return (
    <div className='mx-sm md:mx-md lg:mx-Dxs 2xl:mx-Dsm'>
      <h1>Control Methods</h1>
      <div className='flex items-center justify-between p-4'>
        <Image
          src={logo}
          alt='logo'
          height={100}
          priority={true}
          ref={lvanRef}
        />
        <div className='w-10 h-10 rounded-full bg-primary-teal circle' />
        <div className='w-10 h-10 rounded-full bg-secondary-mint circle' />
        <div className='w-10 h-10 rounded-full bg-core-charcoal circle' />
        <div className='w-10 h-10 rounded-full bg-user-blue circle' />
      </div>
    </div>
  );
};

export default ControlMethods;
