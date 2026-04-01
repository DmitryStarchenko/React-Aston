import { NavLink } from 'react-router-dom';
import styles from './AlbumCard.module.css';
import type { Album } from '../../[entity]/model/types';

type Props = {
  item: Album;
};

export const AlbumCard = (props: Props) => {
  const { item } = props;
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <div className={styles.card}>
      <div className={styles.albumName}>
        Album<p className={styles.albumId}>{item.id}</p>
      </div>
      <p className={styles.albumTitle}>{item.title}</p>
      <div className={styles.nav}>
        <NavLink className={getLinkClass} to={`${item.id}/photos`}>
          Photos
        </NavLink>
      </div>
    </div>
  );
};
