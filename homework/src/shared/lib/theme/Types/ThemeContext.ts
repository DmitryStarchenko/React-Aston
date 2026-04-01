import type { MouseEventHandler } from 'react';

export interface ThemeProviderProps {
  children: React.ReactNode;
}

export interface ThemeContextType {
  toggleTheme: MouseEventHandler<HTMLButtonElement>;
  isDark: boolean;
}
