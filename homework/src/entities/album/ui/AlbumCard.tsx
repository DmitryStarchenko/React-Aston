import { NavLink } from 'react-router-dom';
import type { Album } from '../types/Album';
import styles from './AlbumCard.module.css';

type Props = {
  album: Album;
};

export const AlbumCard = (props: Props) => {
  const { album } = props;
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <div className={styles.card}>
      <div className={styles.albumName}>
        Album<p className={styles.albumId}>{album.id}</p>
      </div>
      <p className={styles.albumTitle}>{album.title}</p>
      <div className={styles.nav}>
        <NavLink className={getLinkClass} to={`${album.id}/photos`}>
          Photos
        </NavLink>
      </div>
    </div>
  );
};
