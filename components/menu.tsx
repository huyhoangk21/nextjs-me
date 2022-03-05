import React from 'react';
import { BsFillSunFill } from 'react-icons/bs';

const Menu = () => {
  return (
    <div className='hidden sm:flex'>
      <ul className='flex flex-col font-semibold sm:flex-row gap-x-5'>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <div className='border-l flex items-center px-5 ml-5 cursor-pointer'>
        <BsFillSunFill className='text-blue-400 text-lg' />
      </div>
    </div>
  );
};

export default Menu;
