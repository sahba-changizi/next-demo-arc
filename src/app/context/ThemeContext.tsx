'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';

type ThemeContextType = {
  toggleTheme: () => void;
  isDark: boolean;
};

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export function CustomThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setIsDark(savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };

  const theme = createTheme({
    palette: {
      mode: isDark ? 'dark' : 'light',
      primary: {
        main: isDark ? '#90caf9' : '#1976d2',
      },
      secondary: {
        main: isDark ? '#f48fb1' : '#d81b60',
      },
    },
    shape: {
      borderRadius: 12,
    },
  });

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDark }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
