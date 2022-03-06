import Link from 'next/link';
import React from 'react';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import { useDarkMode } from '../hooks/useDarkMode';

const Menu = () => {
  const { dark, toggleDarkMode } = useDarkMode();

  return (
    <div className='hidden sm:flex'>
      <ul className='flex flex-col font-semibold sm:flex-row gap-x-5'>
        <Link href='/blog' passHref>
          <li className='custom-link'>Blog</li>
        </Link>
        <Link href='/contact' passHref>
          <li className='custom-link'>Contact</li>
        </Link>
      </ul>
      <div
        className='border-l flex items-center px-5 ml-5 cursor-pointer'
        onClick={toggleDarkMode(!dark)}
      >
        {dark ? (
          <BsFillMoonStarsFill className='text-blue-500 text-lg' />
        ) : (
          <BsFillSunFill className='text-blue-500 text-lg' />
        )}
      </div>
    </div>
  );
};

export default Menu;
