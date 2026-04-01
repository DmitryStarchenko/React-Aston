import { PostCard } from '../../entities/post/ui/PostCard';
import styles from './PostList.module.css';
import { useCallback, useMemo, useState } from 'react';
import type React from 'react';
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength';
import { PostLengthFilter } from '../../features/PostLengthFilter/ui/PostLengthFilter';
import { CommentList } from '../CommentList/ui/CommentList';
import type { Post } from '../../entities/[entity]/model/types';

type Props = {
  posts: Post[];
};

export const PostList = ({ posts }: Props) => {
  const [currentLength, setCurrentLength] = useState<number | undefined>(
    undefined
  );
  const { postsFiltered, postsLength } = useMemo(
    () => filterByLength(currentLength, posts),
    [currentLength, posts]
  );

  const handleSetLength = useCallback(
    (value: React.SetStateAction<number | undefined>) =>
      setCurrentLength(value),
    []
  );

  const filter = useMemo(
    () => (
      <PostLengthFilter
        postsLength={postsLength}
        setCurrentLength={handleSetLength}
      />
    ),
    [postsLength, handleSetLength]
  );

  return (
    <div className={styles.postPage}>
      {filter}
      <div className={styles.postList}>
        {postsFiltered.map((post: Post) => (
          <PostCard key={post.id} post={post}>
            {<CommentList postId={post.id} />}
          </PostCard>
        ))}
      </div>
    </div>
  );
};
