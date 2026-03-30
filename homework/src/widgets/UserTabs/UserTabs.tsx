import { NavLink } from 'react-router';
import styles from './UserTabs.module.css';

export const UserTabs = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <>
      <NavLink className={getLinkClass} to="posts">
        Posts
      </NavLink>
      <NavLink className={getLinkClass} to="users">
        Users
      </NavLink>
      <NavLink className={getLinkClass} to="albums">
        Albums
      </NavLink>
    </>
  );
};
