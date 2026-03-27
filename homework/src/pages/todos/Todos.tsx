import { useGetTodosQuery } from '../../entities/[entity]/api/todosApi';
import { MainLayout } from '../../shared/layouts/MainLayout';
import { TodoListWithLoading } from '../../shared/lib/hoc/HOC';

export const Todos = () => {
  const { data, isLoading } = useGetTodosQuery(undefined);

  if (!data) return <h1>Error</h1>;
  return (
    <MainLayout>
      <h1>Todos</h1>
      <TodoListWithLoading todos={data} isLoading={isLoading} />
    </MainLayout>
  );
};
