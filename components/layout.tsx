import React, { ReactNode } from 'react';
import Navbar from '../components/navbar';
import { useDarkMode } from '../hooks/useDarkMode';
import { MobileNavProvider } from '../hooks/useMobileNav';
import { SearchProvider } from '../hooks/useSearch';
import Main from './main';

const Layout = ({ children }: { children?: ReactNode }) => {
  const { dark } = useDarkMode();

  return (
    <div className={`${dark && 'dark'}`}>
      <div
        className={`grid grid-rows-layout min-h-screen dark:bg-black ${
          dark && 'dark'
        }`}
      >
        <MobileNavProvider>
          <Navbar />
        </MobileNavProvider>
        <SearchProvider>
          <Main>{children}</Main>
        </SearchProvider>
      </div>
    </div>
  );
};

export default Layout;
