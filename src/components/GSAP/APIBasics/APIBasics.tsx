'use client';
import React, { useEffect } from 'react';
import logo from '@/assets/logo.svg';
import grow from '@/assets/logo-grow.svg';
import Image from 'next/image';
import gsap from 'gsap';

const APIBasics = () => {

  useEffect(() => {
    gsap.to('.logo', {
      duration: 2.5,
      x: 240,
      y: 100,
      backgroundColor: '#7799F7',
      borderRadius: '20%',
      border: '5px solid red',
      ease: 'expo.inOut',
    });

    gsap.set('.grow', {
      transformOrigin: '50% 50%',
    });
    gsap.to('.grow', { duration: 2.5, rotation: 360 });

    const myObject = { rotation: 0 };
    gsap.to(myObject, {
      duration: 2.5,
      rotation: 360,
      onUpdate: function () {
        // console.log(myObject.rotation);
      },
    });
  }, []);

  return (
    <div className='p-4'>
      <Image
        src={logo}
        alt='logo'
        className='logo'
        priority={true}
      />
      <Image
        src={grow}
        alt='grow'
        className='grow'
        priority={true}
      />
    </div>
  );
};

export default APIBasics;