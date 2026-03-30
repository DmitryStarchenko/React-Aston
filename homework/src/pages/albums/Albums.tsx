import { NavLink } from 'react-router-dom';
import styles from './Albums.module.css';

export const Albums = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <div className={styles.content}>
      <h1>Albums</h1>
      <div className={styles.nav}>
        <NavLink className={getLinkClass} to="5/photos">
          Photos
        </NavLink>
      </div>
    </div>
  );
};
