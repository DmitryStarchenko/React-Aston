import type { Album } from '../../entities/[entity]/model/types';
import { AlbumCard } from '../../entities/album/ui/AlbumCard';
import styles from './AlbumList.module.css';

type Props = {
  albums: Album[];
};

export const AlbumList = (props: Props) => {
  const { albums } = props;
  return (
    <div className={styles.albumsList}>
      {albums.map((album: Album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
  );
};
