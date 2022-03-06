import Link from 'next/link';
import React from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import { useMobileNav } from '../hooks/useMobileNav';

const MobileMenu = () => {
  const { open, toggleMenu } = useMobileNav();

  return (
    <div
      className={`${
        !open && 'hidden'
      } sm:hidden absolute top-16 bottom-0 inset-x-0 px-4 bg-white z-50`}
    >
      <ul className='flex flex-col font-semibold sm:flex-row'>
        <Link href='/blog' passHref>
          <li className='pt-4 custom-link' onClick={toggleMenu(false)}>
            Blog
          </li>
        </Link>
        <Link href='/contact' passHref>
          <li className='py-4 custom-link' onClick={toggleMenu(false)}>
            Contact
          </li>
        </Link>
      </ul>
      <hr />
      <div className='pt-4 flex justify-between items-center'>
        <div className='sm:hidden'>Switch theme</div>
        <div className='border rounded-md py-2 px-3 flex items-center'>
          <BsFillSunFill className='text-blue-400 text-lg mr-2' />
          Light
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;