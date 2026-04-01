import { useParams } from 'react-router';
import {
  useGetAlbumsQuery,
  useGetAlbumsByUserIdQuery,
} from '../../entities/[entity]/api/albumApi';
import { withLoading } from '../../shared/lib/hoc/HOC';
import type { Album } from '../../entities/[entity]/model/types';
import { AlbumCard } from '../../entities/album/ui/AlbumCard';
import { ItemList } from '../../shared/ui/ItemList/ItemList';
import type { ComponentType } from 'react';
import styles from './Albums.module.css';

const AlbumListWithLoading = withLoading<{
  isLoading: boolean;
  items: Album[];
  Card: ComponentType<{ item: Album }>;
}>(ItemList);

export const Albums = () => {
  const { userId } = useParams();

  const { data: allAlbums, isLoading: isLoadingAll } = useGetAlbumsQuery(
    undefined,
    { skip: !!userId }
  );
  const { data: userAlbums, isLoading: isLoadingUser } =
    useGetAlbumsByUserIdQuery(Number(userId), { skip: !userId });

  const data = userId ? userAlbums : allAlbums;
  const isLoading = userId ? isLoadingUser : isLoadingAll;

  return (
    <>
      <h1>Albums</h1>
      <div className={styles.albumsList}>
        <AlbumListWithLoading
          items={data ?? []}
          isLoading={isLoading}
          Card={AlbumCard}
        />
      </div>
    </>
  );
};
