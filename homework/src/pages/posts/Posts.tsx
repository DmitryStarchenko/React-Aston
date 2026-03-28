import { useMemo, useState } from 'react';
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength';
import { PostLengthFilter } from '../../features/PostLengthFilter/ui/PostLengthFilter';
import { PostListWithLoading } from '../../widgets/PostList/PostList';
import styles from './Posts.module.css';

export const Posts = () => {
  const [currentLength, setCurrentLength] = useState<number | undefined>(
    undefined
  );
  const isLoading = false;

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
      <PostListWithLoading isLoading={isLoading} posts={postsFiltered} />
    </div>
  );
};
