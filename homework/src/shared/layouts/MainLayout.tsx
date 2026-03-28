import styles from './MainLayout.module.css';
import { Header } from '../../widgets/LayoutHeader/Header';
import { Footer } from '../../widgets/LayoutFooter/Footer';
import { withLoading } from '../lib/hoc/HOC';
import { PostList } from '../../widgets/PostList/PostList';

export const PostListWithLoading = withLoading<{
  isLoading: boolean;
}>(PostList);

export const MainLayout = () => {
  const isLoading = false;

  return (
    <div className={styles.main}>
      <Header />
      <PostListWithLoading isLoading={isLoading} />
      <Footer />
    </div>
  );
};
