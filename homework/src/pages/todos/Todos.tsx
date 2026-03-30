import { useGetTodosQuery } from '../../entities/[entity]/api/todosApi';
import type { Todo } from '../../entities/todo/types/Todos';
import { withLoading } from '../../shared/lib/hoc/HOC';
import { TodoList } from '../../widgets/TodoList/TodoList';

const TodoListWithLoading = withLoading<{
  isLoading: boolean;
  todos: Todo[];
}>(TodoList);

export const Todos = () => {
  const { data, isLoading } = useGetTodosQuery(undefined);

  if (!data) return <h1>Error</h1>;
  return (
    <>
      <h1>Todos</h1>
      <TodoListWithLoading todos={data} isLoading={isLoading} />
    </>
  );
};
