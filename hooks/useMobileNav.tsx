import React, { createContext, ReactNode, useContext, useState } from 'react';

type MobileNavContextType = {
  open: boolean;
  toggleMenu: (value: boolean) => () => void;
};

const MobileNavContext = createContext<MobileNavContextType>(null!);

export const MobileNavProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleMenu = (value: boolean) => () => {
    setOpen(value);
  };

  const value = { open, toggleMenu };

  return (
    <MobileNavContext.Provider value={value}>
      {children}
    </MobileNavContext.Provider>
  );
};

export const useMobileNav = () => useContext(MobileNavContext);
