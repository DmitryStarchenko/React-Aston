import styles from './MainLayout.module.css';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return <div className={styles.main}>{children}</div>;
};
