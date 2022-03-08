import Link from 'next/link';
import React from 'react';

const Custom404 = () => {
  return (
    <div className='dark:text-white flex flex-col items-center gap-y-4 my-20 text-gray-500'>
      <div className='text-8xl font-thin'>404</div>
      <div className='text-4xl'>This page is missing</div>
      <Link href='/' passHref>
        <a className='text-blue-500 text-lg px-4 py-1'>Back to Home</a>
      </Link>
    </div>
  );
};

export default Custom404;
