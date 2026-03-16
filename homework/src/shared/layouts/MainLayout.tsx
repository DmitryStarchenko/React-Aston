import { posts } from '../../entities/post/mocks/posts';
import styles from './MainLayout.module.css';
import { PostListWithLoading } from '../lib/hoc/HOC';

export const MainLayout = () => {
  const isLoading = false;
  return (
    <div className={styles.main}>
      <PostListWithLoading isLoading={isLoading} posts={posts} />
    </div>
  );
};
