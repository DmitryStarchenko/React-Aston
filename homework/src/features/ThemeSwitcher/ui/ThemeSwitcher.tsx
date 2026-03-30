import { useTheme } from '../../../shared/lib/theme/useTheme';
import { Button } from '../../../shared/ui/Button/Button';
import styles from './ThemeSwitcher.module.css';

export const ThemeSwitcher = () => {
  const { toggleTheme, isDark } = useTheme();
  return (
    <Button
      CSSClasses={styles.themeToggle}
      onClick={toggleTheme}
      content={isDark ? '🌙' : '☀️'}
    />
  );
};
