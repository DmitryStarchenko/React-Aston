import type { ReactNode } from 'react';
import type { Post } from '../types/Post';
import styles from './PostCard.module.css';
import { Button } from '../../../shared/ui/Button/Button';
import { useState } from 'react';

type Props = {
  post: Post;
  children?: ReactNode;
};

export const PostCard = (props: Props) => {
  const { post, children } = props;
  const [isOpenComment, setIsOpenComment] = useState(false);

  return (
    <div className={styles.card}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <Button
        CSSClasses={styles.buttonComm}
        onClick={() => setIsOpenComment(!isOpenComment)}
        content={'💭'}
      />
      {isOpenComment && children}
    </div>
  );
};
