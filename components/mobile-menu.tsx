import React from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import { useMobileNav } from '../hooks/useMobileNav';

const MobileMenu = () => {
  const { open } = useMobileNav();

  return (
    <div
      className={`${
        !open && 'hidden'
      } sm:hidden absolute top-16 bottom-0 inset-x-0 px-4 bg-white`}
    >
      <ul className='flex flex-col font-semibold sm:flex-row'>
        <li className='pt-3'>Blog</li>
        <li className='py-3'>Contact</li>
      </ul>
      <hr />
      <div className='pt-3 flex justify-between items-center'>
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
