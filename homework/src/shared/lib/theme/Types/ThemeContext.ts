export interface ThemeProviderProps {
  children: React.ReactNode;
}

export interface ThemeContextType {
  toggleTheme: () => void;
  isDark: boolean;
}
