import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

type DarkModeContextType = {
  dark: boolean;
  toggleDarkMode: (value: boolean) => () => void;
};

const DarkModeContext = createContext<DarkModeContextType>(null!);

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    const mode = localStorage.getItem('dark');
    if (mode && mode === 'dark') {
      setDark(true);
    } else {
      setDark(false);
    }
  });

  const toggleDarkMode = (value: boolean) => () => {
    setDark(value);
    localStorage.setItem('dark', value ? 'dark' : 'light');
  };

  const value = { dark, toggleDarkMode };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
