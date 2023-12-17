'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import back from '@/assets/nav/back.png';

const BackNav = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    <button
      onClick={goBack}
      className='cursor-pointer'
    >
      Back
    </button>
  );
};

export default BackNav;
