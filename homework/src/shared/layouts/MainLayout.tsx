import styles from './MainLayout.module.css';
import { Header } from '../../widgets/LayoutHeader/Header';
import { Footer } from '../../widgets/LayoutFooter/Footer';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className={styles.main}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
