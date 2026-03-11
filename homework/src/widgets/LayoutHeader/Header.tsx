import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Posts</h1>
      <ThemeSwitcher />
    </div>
  );
};
