import { NavLink } from 'react-router-dom';
import styles from './UserCard.module.css';
import type { User } from '../../[entity]/model/types';

type Props = {
  item: User;
};

export const UserCard = (props: Props) => {
  const { item } = props;
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <div className={styles.card}>
      <p className={styles.name}>{item.name}</p>
      <p className={styles.userName}>{item.username}</p>
      <div className={styles.userContent}>
        Email: <p className={styles.content}>{item.email}</p>
      </div>
      <div className={styles.userContent}>
        Website: <p className={styles.content}>{item.website}</p>
      </div>
      <div className={styles.nav}>
        <NavLink className={getLinkClass} to={`${item.id}/albums`}>
          Albums
        </NavLink>
        <NavLink className={getLinkClass} to={`${item.id}/todos`}>
          Todos
        </NavLink>
        <NavLink className={getLinkClass} to={`${item.id}/posts`}>
          Posts
        </NavLink>
      </div>
    </div>
  );
};
