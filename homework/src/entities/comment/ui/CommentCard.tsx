import type { Comment } from '../types/Comment';
import styles from './CommentCard.module.css';

type Props = {
  comment: Comment;
};

export const CommentCard = (props: Props) => {
  const { comment } = props;

  return (
    <>
      <p className={styles.commentName}>{comment.name}</p>
      <p className={styles.commentEmail}>{comment.email}</p>
      <p>{comment.body}</p>
    </>
  );
};
