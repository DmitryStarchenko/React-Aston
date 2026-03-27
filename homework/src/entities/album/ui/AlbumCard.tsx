import type { Album } from '../types/Album';
import styles from './AlbumCard.module.css';

type Props = {
  album: Album;
};

export const AlbumCard = (props: Props) => {
  const { album } = props;

  return (
    <div className={styles.card}>
      <div className={styles.albumName}>
        Album<p className={styles.albumId}>{album.id}</p>
      </div>
      <p className={styles.albumTitle}>{album.title}</p>
    </div>
  );
};
