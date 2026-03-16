import { PostList } from '../../widgets/PostList/PostList';
import { posts } from '../../entities/post/mocks/posts';
import styles from './MainLayout.module.css';

export const MainLayout = () => {
  return (
    <div className={styles.main}>
      <PostList posts={posts} />
    </div>
  );
};
