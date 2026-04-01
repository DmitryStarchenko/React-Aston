import type { Todo } from '../../entities/[entity]/model/types';
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
