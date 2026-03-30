import { useGetUsersQuery } from '../../entities/[entity]/api/usersApi';
import type { User } from '../../entities/user/types/User';
import { withLoading } from '../../shared/lib/hoc/HOC';
import { UserList } from '../../widgets/UserList/UserList';

export const UserListWithLoading = withLoading<{
  isLoading: boolean;
  users: User[];
}>(UserList);

export const Users = () => {
  const { data, isLoading } = useGetUsersQuery(undefined);

  if (!data) return <h1>Error</h1>;

  return (
    <>
      <h1>Users</h1>
      <UserListWithLoading users={data} isLoading={isLoading} />
    </>
  );
};
