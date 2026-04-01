import type { ComponentType } from 'react';
import { useGetUsersQuery } from '../../entities/[entity]/api/usersApi';
import type { User } from '../../entities/[entity]/model/types';
import { UserCard } from '../../entities/user/ui/UserCard';
import { withLoading } from '../../shared/lib/hoc/HOC';
import { ItemList } from '../../shared/ui/ItemList/ItemList';
import styles from './Users.module.css';

export const UserListWithLoading = withLoading<{
  isLoading: boolean;
  items: User[];
  Card: ComponentType<{ item: User }>;
}>(ItemList);

export const Users = () => {
  const { data, isLoading } = useGetUsersQuery(undefined);

  return (
    <>
      <h1>Users</h1>
      <div className={styles.usersList}>
        <UserListWithLoading
          items={data ?? []}
          isLoading={isLoading}
          Card={UserCard}
        />
      </div>
    </>
  );
};
