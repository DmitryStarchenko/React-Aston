import { useTheme } from '../../../shared/lib/theme/useTheme';
import styles from './ThemeSwitcher.module.css';

export const ThemeSwitcher = () => {
  const { toggleTheme, isDark } = useTheme();
  return (
    <button className={styles.themeToggle} onClick={toggleTheme}>
      <span>{isDark ? '🌙' : '☀️'}</span>
    </button>
  );
};
