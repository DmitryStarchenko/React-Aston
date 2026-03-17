import { useState } from 'react';
import type { Post } from '../types/Post';
import styles from './PostCard.module.css';
import { CommentList } from '../../../widgets/CommentList/ui/CommentList';
import { Button } from '../../../shared/ui/Button/Button';

type Props = {
  post: Post;
};

export const PostCard = (props: Props) => {
  const { post } = props;
  const [isOpenComment, setIsOpenComment] = useState(false);

  const HandleComm = () => {
    setIsOpenComment(!isOpenComment);
  };

  return (
    <div className={styles.card}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <Button
        CSSClasses={styles.buttonComm}
        onClick={HandleComm}
        content={'💭'}
      />
      {isOpenComment && <CommentList />}
    </div>
  );
};
