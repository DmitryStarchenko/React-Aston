import type { Todo } from '../types/Todos';
import styles from './TodoCard.module.css';

type Props = {
  todo: Todo;
};

export const TodoCard = (props: Props) => {
  const { todo } = props;

  return (
    <div className={styles.card}>
      <div className={styles.todoName}>
        Todo<p className={styles.todoId}>{todo.id}</p>
      </div>
      <p>{todo.title}</p>
      <div
        className={
          todo.completed ? styles.todoComplete : styles.todoNotComplete
        }
      >
        {todo.completed ? 'Complete' : 'Not complete'}
      </div>
    </div>
  );
};
