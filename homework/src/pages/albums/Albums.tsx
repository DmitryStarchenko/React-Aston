import { useParams } from 'react-router';
import {
  useGetAlbumsQuery,
  useGetAlbumsByUserIdQuery,
} from '../../entities/[entity]/api/albumApi';
import { withLoading } from '../../shared/lib/hoc/HOC';
import type { Album } from '../../entities/album/types/Album';
import { AlbumList } from '../../widgets/AlbumList/AlbumList';

const AlbumListWithLoading = withLoading<{
  isLoading: boolean;
  albums: Album[];
}>(AlbumList);

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
      <AlbumListWithLoading albums={data ?? []} isLoading={isLoading} />
    </>
  );
};
