import type { Todo } from '../../[entity]/model/types';
import styles from './TodoCard.module.css';

type Props = {
  item: Todo;
};

export const TodoCard = (props: Props) => {
  const { item } = props;

  return (
    <div className={styles.card}>
      <div className={styles.todoName}>
        Todo<p className={styles.todoId}>{item.id}</p>
      </div>
      <p>{item.title}</p>
      <div
        className={
          item.completed ? styles.todoComplete : styles.todoNotComplete
        }
      >
        {item.completed ? 'Complete' : 'Not complete'}
      </div>
    </div>
  );
};
