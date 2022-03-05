import React, { createContext, ReactNode, useContext, useState } from 'react';

type MobileNavContextType = {
  open: boolean;
  toggleMenu: () => void;
};

const MobileNavContext = createContext<MobileNavContextType>(null!);

export const MobileNavProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const value = { open, toggleMenu };

  return (
    <MobileNavContext.Provider value={value}>
      {children}
    </MobileNavContext.Provider>
  );
};

export const useMobileNav = () => useContext(MobileNavContext);
