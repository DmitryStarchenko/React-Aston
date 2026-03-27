import { MainLayout } from '../../shared/layouts/MainLayout';
import { UserListWithLoading } from '../../shared/lib/hoc/HOC';
import { useGetUsersQuery } from '../../entities/[entity]/api/usersApi';

export const Users = () => {
  const { data, isLoading } = useGetUsersQuery(undefined);

  if (!data) return <h1>Error</h1>;

  return (
    <MainLayout>
      <h1>Users</h1>
      <UserListWithLoading users={data} isLoading={isLoading} />
    </MainLayout>
  );
};
