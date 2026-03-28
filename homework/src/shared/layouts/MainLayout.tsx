import styles from './MainLayout.module.css';
import { Header } from '../../widgets/LayoutHeader/Header';
import { Footer } from '../../widgets/LayoutFooter/Footer';
import { Posts } from '../../pages/posts/Posts';

export const MainLayout = () => {
  return (
    <div className={styles.main}>
      <Header />
      <Posts />
      <Footer />
    </div>
  );
};
