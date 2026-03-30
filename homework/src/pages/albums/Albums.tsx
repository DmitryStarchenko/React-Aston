import { useGetAlbumsQuery } from '../../entities/[entity]/api/albumApi';
import { withLoading } from '../../shared/lib/hoc/HOC';
import type { Album } from '../../entities/album/types/Album';
import { AlbumList } from '../../widgets/AlbumList/AlbumList';

const AlbumListWithLoading = withLoading<{
  isLoading: boolean;
  albums: Album[];
}>(AlbumList);

export const Albums = () => {
  const { data, isLoading } = useGetAlbumsQuery(undefined);

  if (!data) return <h1>Error</h1>;
  return (
    <>
      <h1>Albums</h1>
      <AlbumListWithLoading albums={data} isLoading={isLoading} />
    </>
  );
};
