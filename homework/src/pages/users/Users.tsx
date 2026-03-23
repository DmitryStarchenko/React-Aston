import { NavLink } from 'react-router-dom';
import styles from './Users.module.css';

export const Users = () => {
  return (
    <div className={styles.content}>
      <h1>Users</h1>
      <div className={styles.nav}>
        <NavLink className={styles.link} to="1/albums">
          Albums
        </NavLink>
        <NavLink className={styles.link} to="5/todos">
          Todos
        </NavLink>
        <NavLink className={styles.link} to="8/posts">
          Posts
        </NavLink>
      </div>
    </div>
  );
};
