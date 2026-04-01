import { useGetUsersQuery } from '../../entities/[entity]/api/usersApi';
import type { User } from '../../entities/[entity]/model/types';
import { withLoading } from '../../shared/lib/hoc/HOC';
import { UserList } from '../../widgets/UserList/UserList';

export const UserListWithLoading = withLoading<{
  isLoading: boolean;
  users: User[];
}>(UserList);

export const Users = () => {
  const { data, isLoading } = useGetUsersQuery(undefined);

  return (
    <>
      <h1>Users</h1>
      <UserListWithLoading users={data ?? []} isLoading={isLoading} />
    </>
  );
};
