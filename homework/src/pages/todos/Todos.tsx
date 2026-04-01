import { useParams } from 'react-router';
import {
  useGetTodosQuery,
  useGetTodosByUserIdQuery,
} from '../../entities/[entity]/api/todosApi';
import { withLoading } from '../../shared/lib/hoc/HOC';
import { TodoList } from '../../widgets/TodoList/TodoList';
import type { Todo } from '../../entities/[entity]/model/types';

const TodoListWithLoading = withLoading<{
  isLoading: boolean;
  todos: Todo[];
}>(TodoList);

export const Todos = () => {
  const { userId } = useParams();

  const { data: allTodos, isLoading: isLoadingAll } = useGetTodosQuery(
    undefined,
    { skip: !!userId }
  );
  const { data: userTodos, isLoading: isLoadingUser } =
    useGetTodosByUserIdQuery(Number(userId), { skip: !userId });

  const data = userId ? userTodos : allTodos;
  const isLoading = userId ? isLoadingUser : isLoadingAll;

  return (
    <>
      <h1>Todos</h1>
      <TodoListWithLoading todos={data ?? []} isLoading={isLoading} />
    </>
  );
};
