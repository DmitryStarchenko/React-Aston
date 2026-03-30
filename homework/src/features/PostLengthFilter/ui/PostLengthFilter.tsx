import styles from './PostLengthFilter.module.css';

type Props = {
  postsLength: number[];
  setCurrentLength: React.Dispatch<React.SetStateAction<number | undefined>>;
};

export const PostLengthFilter = (props: Props) => {
  const { postsLength, setCurrentLength } = props;
  const minLength = Math.min(...postsLength);
  const maxLength = Math.max(...postsLength);

  return (
    <div className={styles.filter}>
      <h3 className={styles.titleFilter}>Filter</h3>
      <h4 className={styles.titleLength}>Title length</h4>
      <div className={styles.content}>
        <span className={styles.minLength}>{minLength}</span>
        <input
          className={styles.inputFilter}
          min={minLength}
          max={maxLength}
          type="range"
          onChange={(event) => setCurrentLength(Number(event.target.value))}
        />
        <span className={styles.maxLength}>{maxLength}</span>
      </div>
    </div>
  );
};
