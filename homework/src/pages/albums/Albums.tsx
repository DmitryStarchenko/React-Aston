import { NavLink } from 'react-router-dom';
import styles from './Albums.module.css';

export const Albums = () => {
  return (
    <div className={styles.content}>
      <h1>Albums</h1>
      <div className={styles.nav}>
        <NavLink className={styles.link} to="5/photos">
          Photos
        </NavLink>
      </div>
    </div>
  );
};
