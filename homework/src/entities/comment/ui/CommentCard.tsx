import type { Comment } from '../types/Comment';
import styles from './CommentCard.module.css';

type Props = {
  comment: Comment;
};

export const CommentCard = (props: Props) => {
  const { comment } = props;

  return (
    <>
      <div className={styles.commentName}>
        {comment.name}
        <p className={styles.commentEmail}>{comment.email}</p>
      </div>
      <p className={styles.commentBody}>{comment.body}</p>
    </>
  );
};
