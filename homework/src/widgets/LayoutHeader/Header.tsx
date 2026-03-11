import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import { About } from '../../shared/ui/Button/About/About';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Posts</h1>
      <div className={styles.nav}>
        <About />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
