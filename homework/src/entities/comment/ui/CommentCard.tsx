import styles from './CommentCard.module.css';
import type { Comment } from '../../[entity]/model/types';

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
