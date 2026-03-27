import { NavLink } from 'react-router-dom';
import styles from './Users.module.css';
import { MainLayout } from '../../shared/layouts/MainLayout';
import { useGetUsersQuery } from '../../entities/[entity]/api/usersApi';

export const Users = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;
  const { data, isLoading } = useGetUsersQuery(undefined);

  if (!data) return <h1>Error</h1>;

  return (
    <MainLayout>
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
      <UserListWithLoading users={data} isLoading={isLoading} />
    </MainLayout>
  );
};
