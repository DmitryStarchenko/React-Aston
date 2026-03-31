import { PostCard } from '../../entities/post/ui/PostCard';
import type { Post } from '../../entities/post/types/Post';
import styles from './PostList.module.css';
import { useMemo, useState } from 'react';
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength';
import { PostLengthFilter } from '../../features/PostLengthFilter/ui/PostLengthFilter';
import { CommentList } from '../CommentList/ui/CommentList';

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

  return (
    <div className={styles.postPage}>
      <PostLengthFilter
        postsLength={postsLength}
        setCurrentLength={setCurrentLength}
      />
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
