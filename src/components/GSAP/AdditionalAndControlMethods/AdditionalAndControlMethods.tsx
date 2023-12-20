'use client';
import React, { useLayoutEffect, useRef } from 'react';
import logo from '@/assets/logo2.svg';
import Image from 'next/image';
import gsap from 'gsap';

const AdditionalAndControlMethods = () => {
  const lvanRef = useRef() as React.MutableRefObject<HTMLImageElement>;
  const tween = useRef([]) as React.MutableRefObject<gsap.core.Tween[]>;

  useLayoutEffect(() => {
    const lvan = gsap.context(() => {
      const lvanTween = gsap.from(lvanRef.current, {
        duration: 2,
        opacity: 0,
        scale: 0.3,
        ease: 'back',
      });
      tween.current.push(lvanTween);
    });

    const circle = gsap.context(() => {
      const circleTween = gsap.from('.circle', {
        duration: 2,
        opacity: 0,
        // y: 150,
        // y: () => Math.random() * 400 - 200,
        y: 'random(-200, 200)',
        stagger: 0.25,
      });
      tween.current.push(circleTween);
    });

    return () => {
      lvan.revert();
      circle.revert();
    };
  }, []);

  const restart = () => {
    tween.current.forEach((tween) => tween.restart());
  };

  const pause = () => {
    tween.current.forEach((tween) => tween.pause());
  };

  const resume = () => {
    tween.current.forEach((tween) => tween.resume());
  };

  const reverse = () => {
    tween.current.forEach((tween) => tween.reverse());
  };

  const seek = () => {
    tween.current.forEach((tween) => tween.seek(1)); // Jumps to 1 second into the animation
  };

  const progress = () => {
    tween.current.forEach((tween) => tween.progress(0.3)); // Updates the animation to 30% complete point
  };

  const timeScale = (scale: number) => {
    tween.current.forEach((tween) => tween.timeScale(scale));
  };

  return (
    <div className='mx-sm md:mx-md lg:mx-Dxs 2xl:mx-Dsm'>
      <h1>Addtional & Control Methods</h1>
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
      <div className='flex flex-col items-center w-full text-xs gap-2'>
        <div className='flex gap-2'>
          <button
            onClick={restart}
            className='btn-xs'
          >
            Replay
          </button>
          <button
            onClick={pause}
            className='btn-xs'
          >
            Pause
          </button>
          <button
            onClick={resume}
            className='btn-xs'
          >
            Resume
          </button>
          <button
            onClick={reverse}
            className='btn-xs'
          >
            Reverse
          </button>
        </div>
        <div className='flex gap-2'>
          <button
            onClick={seek}
            className='btn-xs'
          >
            Seek 1s
          </button>
          <button
            onClick={progress}
            className='btn-xs'
          >
            Progress 30%
          </button>
          <button
            onClick={() => timeScale(0.5)}
            className='btn-xs'
          >
            Time x 0.5
          </button>
          <button
            onClick={() => timeScale(2)}
            className='btn-xs'
          >
            Time x 2
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdditionalAndControlMethods;
