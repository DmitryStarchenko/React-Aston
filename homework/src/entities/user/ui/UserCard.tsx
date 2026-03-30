import { NavLink } from 'react-router-dom';
import type { User } from '../types/User';
import styles from './UserCard.module.css';

type Props = {
  user: User;
};

export const UserCard = (props: Props) => {
  const { user } = props;
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <div className={styles.card}>
      <p className={styles.name}>{user.name}</p>
      <p className={styles.userName}>{user.username}</p>
      <div className={styles.userContent}>
        Email: <p className={styles.content}>{user.email}</p>
      </div>
      <div className={styles.userContent}>
        Website: <p className={styles.content}>{user.website}</p>
      </div>
      <div className={styles.nav}>
        <NavLink className={getLinkClass} to={`${user.id}/albums`}>
          Albums
        </NavLink>
        <NavLink className={getLinkClass} to={`${user.id}/todos`}>
          Todos
        </NavLink>
        <NavLink className={getLinkClass} to={`${user.id}/posts`}>
          Posts
        </NavLink>
      </div>
    </div>
  );
};
