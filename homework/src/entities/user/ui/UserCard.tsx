import type { User } from '../types/User';
import styles from './UserCard.module.css';

type Props = {
  user: User;
};

export const UserCard = (props: Props) => {
  const { user } = props;

  return (
    <div className={styles.card}>
      <p className={styles.name}>{user.name}</p>
      <p className={styles.userName}>{user.username}</p>
      <p className={styles.email}>{user.email}</p>
      <p className={styles.website}>{user.website}</p>
    </div>
  );
};
