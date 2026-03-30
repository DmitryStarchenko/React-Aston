import { NavLink } from 'react-router-dom';
import styles from './Users.module.css';

export const Users = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <div className={styles.content}>
      <h1>Users</h1>
      <div className={styles.nav}>
        <NavLink className={getLinkClass} to="1/albums">
          Albums
        </NavLink>
        <NavLink className={getLinkClass} to="5/todos">
          Todos
        </NavLink>
        <NavLink className={getLinkClass} to="8/posts">
          Posts
        </NavLink>
      </div>
    </div>
  );
};
