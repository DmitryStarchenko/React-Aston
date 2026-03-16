import type { Post } from '../types/Post';
import styles from './PostCard.module.css';

type Props = {
  post: Post;
};

export const PostCard = (props: Props) => {
  const { post } = props;
  return (
    <div className={styles.card}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};
