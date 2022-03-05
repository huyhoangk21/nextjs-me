import Link from 'next/link';
import React from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import { useMobileNav } from '../hooks/useMobileNav';

const Menu = () => {
  return (
    <div className='hidden sm:flex'>
      <ul className='flex flex-col font-semibold sm:flex-row gap-x-5'>
        <Link href='/blogs' passHref>
          <li className='custom-link'>Blog</li>
        </Link>
        <Link href='/contact' passHref>
          <li className='custom-link'>Contact</li>
        </Link>
      </ul>
      <div className='border-l flex items-center px-5 ml-5 cursor-pointer'>
        <BsFillSunFill className='text-blue-400 text-lg' />
      </div>
    </div>
  );
};

export default Menu;
