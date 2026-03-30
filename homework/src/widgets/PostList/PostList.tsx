import { PostCard } from '../../entities/post/ui/PostCard';
import type { Post } from '../../entities/post/types/Post';
import styles from './PostList.module.css';
import { useMemo, useState } from 'react';
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength';
import { PostLengthFilter } from '../../features/PostLengthFilter/ui/PostLengthFilter';
import { CommentList } from '../CommentList/ui/CommentList';

export const PostList = () => {
  const [currentLength, setCurrentLength] = useState<number | undefined>(
    undefined
  );
  const { postsFiltered, postsLength } = useMemo(
    () => filterByLength(currentLength),
    [currentLength]
  );

  return (
    <div className={styles.postPage}>
      <PostLengthFilter
        handleClickFilter={() => setCurrentLength(currentLength)}
        postsLength={postsLength}
        setCurrentLength={setCurrentLength}
      />
      <div className={styles.postList}>
        {postsFiltered.map((post: Post) => (
          <PostCard key={post.id} post={post}>
            {<CommentList />}
          </PostCard>
        ))}
      </div>
    </div>
  );
};
