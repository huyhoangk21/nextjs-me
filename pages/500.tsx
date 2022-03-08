import React from 'react';

const Custom500 = () => {
  return (
    <div className='dark:text-white flex flex-col items-center gap-y-4 my-20 text-gray-500'>
      <div className='text-8xl font-thin'>500</div>
      <div className='text-4xl'>Oops... Something went wrong</div>
      <div className='text-lg px-4 py-1'>Please try again later!</div>
    </div>
  );
};

export default Custom500;
