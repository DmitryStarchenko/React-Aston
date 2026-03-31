import styles from './NotFound.module.css';

export const NotFound = () => {
  return (
    <div className={styles.notFoundPage}>
      <div className={styles.container}>
        <p className={styles.text}>404 NotFound</p>
      </div>
    </div>
  );
};
