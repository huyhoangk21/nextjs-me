import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useMobileNav } from '../hooks/useMobileNav';
import Menu from './menu';
import MobileMenu from './mobile-menu';

const Navbar = () => {
  const { open, toggleMenu } = useMobileNav();

  return (
    <div className='border-b sticky top-0 z-50 bg-white dark:bg-gray-900 dark:border-b-slate-700'>
      <nav className='custom-container flex justify-between items-center h-full dark:text-white'>
        <Link href='/' passHref>
          <div
            onClick={toggleMenu(false)}
            className='cursor-pointer font-bold text-2xl'
          >
            Hoang Le
          </div>
        </Link>
        <MobileMenu />
        <Menu />
        <div className='text-lg sm:hidden' onClick={toggleMenu(!open)}>
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
