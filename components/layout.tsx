import React, { ReactNode } from 'react';
import Navbar from '../components/navbar';
import { MobileNavProvider } from '../hooks/useMobileNav';
import Main from './main';

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <MobileNavProvider>
      <div className='grid grid-rows-layout min-h-screen'>
        <Navbar />
        <Main>{children}</Main>
      </div>
    </MobileNavProvider>
  );
};

export default Layout;
