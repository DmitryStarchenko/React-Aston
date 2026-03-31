import type { Todo } from '../../entities/todo/types/Todos';
import { TodoCard } from '../../entities/todo/ui/TodoCard';
import styles from './TodoList.module.css';

type Props = {
  todos: Todo[];
};

export const TodoList = (props: Props) => {
  const { todos } = props;
  return (
    <div className={styles.todosList}>
      {todos.map((todo: Todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
