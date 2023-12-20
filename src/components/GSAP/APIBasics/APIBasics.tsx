'use client';
import React, { useLayoutEffect, useRef } from 'react';
import logo from '@/assets/logo.svg';
import grow from '@/assets/logo-grow.svg';
import Image from 'next/image';
import gsap from 'gsap';

const APIBasics = () => {
  const lvanRef = useRef() as React.MutableRefObject<HTMLImageElement>;
  const growRef = useRef() as React.MutableRefObject<HTMLImageElement>;

  useLayoutEffect(() => {
    const lvan = gsap.context(() => {
      gsap.to(lvanRef.current, {
        duration: 2.5,
        x: 200,
        y: 100,
        backgroundColor: '#aadac8',
        borderRadius: '10%',
        border: '5px solid white',
        ease: 'expo.inOut',
      });
    });

    const grow = gsap.context(() => {
      gsap.set(growRef.current, {
        transformOrigin: '50% 50%',
      });
      gsap.to(growRef.current, { duration: 2.5, rotation: 360 });
    });

    const myObject = { rotation: 0 };
    gsap.to(myObject, {
      duration: 2.5,
      rotation: 360,
      onUpdate: function () {
        // console.log(myObject.rotation);
      },
    });
    
    return () => {
      lvan.revert();
      grow.revert();
    };
  }, []);

  return (
    <div className='mx-sm md:mx-md lg:mx-Dxs 2xl:mx-Dsm'>
      <h1>API Basics</h1>
      <div className='p-4'>
        <Image
          src={logo}
          alt='logo'
          priority={true}
          height={100}
          ref={lvanRef}
        />
        <Image
          src={grow}
          alt='grow'
          priority={true}
          height={100}
          ref={growRef}
        />
      </div>
    </div>
  );
};

export default APIBasics;
