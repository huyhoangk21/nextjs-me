import Link from 'next/link';
import React from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { useDarkMode } from '../hooks/useDarkMode';
import { useMobileNav } from '../hooks/useMobileNav';

const MobileMenu = () => {
  const { open, toggleMenu } = useMobileNav();
  const { dark, toggleDarkMode } = useDarkMode();
  return (
    <div
      className={`${
        !open && 'hidden'
      } sm:hidden fixed top-16 bottom-0 inset-x-0 px-4 bg-white dark:bg-black dark:text-white`}
    >
      <ul className='flex flex-col font-semibold sm:flex-row'>
        <Link href='/blog' passHref>
          <li className='py-2 mt-2 custom-link' onClick={toggleMenu(false)}>
            Blog
          </li>
        </Link>
        <Link href='/contact' passHref>
          <li className='py-2 mb-2 custom-link' onClick={toggleMenu(false)}>
            Contact
          </li>
        </Link>
      </ul>
      <hr />
      <div className='pt-4 flex justify-between items-center'>
        <div className='sm:hidden'>Switch theme</div>
        <div
          className='border rounded-md py-2 px-3 flex items-center'
          onClick={toggleDarkMode(!dark)}
        >
          {dark ? (
            <BsFillMoonStarsFill className='text-blue-500 text-lg' />
          ) : (
            <BsFillSunFill className='text-blue-500 text-lg' />
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
