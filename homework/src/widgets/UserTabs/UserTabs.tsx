import { NavLink } from 'react-router';
import styles from './UserTabs.module.css';

export const UserTabs = () => {
  return (
    <>
      <NavLink className={styles.link} to="posts">
        Posts
      </NavLink>
      <NavLink className={styles.link} to="users">
        Users
      </NavLink>
      <NavLink className={styles.link} to="albums">
        Albums
      </NavLink>
    </>
  );
};
