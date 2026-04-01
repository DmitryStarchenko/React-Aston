import { useParams } from 'react-router';
import {
  useGetTodosQuery,
  useGetTodosByUserIdQuery,
} from '../../entities/[entity]/api/todosApi';
import { withLoading } from '../../shared/lib/hoc/HOC';
import type { Todo } from '../../entities/[entity]/model/types';
import styles from './Todos.module.css';
import { ItemList } from '../../shared/ui/ItemList/ItemList';
import type { ComponentType } from 'react';
import { TodoCard } from '../../entities/todo/ui/TodoCard';

const TodoListWithLoading = withLoading<{
  isLoading: boolean;
  items: Todo[];
  Card: ComponentType<{ item: Todo }>;
}>(ItemList);

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
      <div className={styles.todosList}>
        <TodoListWithLoading
          items={data ?? []}
          isLoading={isLoading}
          Card={TodoCard}
        />
      </div>
    </>
  );
};
