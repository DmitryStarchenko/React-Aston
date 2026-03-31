import type { User } from '../../entities/user/types/User';
import { UserCard } from '../../entities/user/ui/UserCard';
import styles from './UserList.module.css';

type Props = {
  users: User[];
};

export const UserList = (props: Props) => {
  const { users } = props;
  return (
    <div className={styles.usersList}>
      {users.map((user: User) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
