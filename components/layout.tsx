import React, { ReactNode } from 'react';
import Navbar from '../components/navbar';
import { MobileNavProvider } from '../hooks/useMobileNav';
import { SearchProvider } from '../hooks/useSearch';
import Main from './main';

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <div className='grid grid-rows-layout min-h-screen'>
      <MobileNavProvider>
        <Navbar />
      </MobileNavProvider>
      <SearchProvider>
        <Main>{children}</Main>
      </SearchProvider>
    </div>
  );
};

export default Layout;
