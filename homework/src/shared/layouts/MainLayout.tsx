import styles from './MainLayout.module.css';
import { PostListWithLoading } from '../lib/hoc/HOC';
import { useState } from 'react';
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength';
import { PostLengthFilter } from '../../features/PostLengthFilter/ui/PostLengthFilter';
import type { Post } from '../../entities/post/types/Post';

type Props = {
  posts: Post[];
};

export const MainLayout = (props: Props) => {
  const { posts } = props;
  const initial = filterByLength(undefined, posts);
  const [postsLength, setPostsLength] = useState<number[]>(initial.postsLength);
  const [currentLength, setCurrentLength] = useState<number | undefined>(
    undefined
  );
  const [postsFiltered, setPostsFiltered] = useState<Post[]>(
    initial.postsFiltered
  );
  const isLoading = false;

  const handleClickFilter = () => {
    const { postsFiltered, postsLength } = filterByLength(currentLength, posts);
    setPostsLength(postsLength);
    setPostsFiltered(postsFiltered);
  };

  return (
    <div className={styles.main}>
      <PostLengthFilter
        handleClickFilter={handleClickFilter}
        postsLength={postsLength}
        setCurrentLength={setCurrentLength}
      />
      <PostListWithLoading isLoading={isLoading} posts={postsFiltered} />
    </div>
  );
};
