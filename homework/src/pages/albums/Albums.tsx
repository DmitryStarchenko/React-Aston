import { MainLayout } from '../../shared/layouts/MainLayout';
import { AlbumListWithLoading } from '../../shared/lib/hoc/HOC';
import { useGetAlbumsQuery } from '../../entities/[entity]/api/albumApi';

export const Albums = () => {
  const { data, isLoading } = useGetAlbumsQuery(undefined);

  if (!data) return <h1>Error</h1>;
  return (
    <MainLayout>
      <h1>Albums</h1>
      <AlbumListWithLoading albums={data} isLoading={isLoading} />
    </MainLayout>
  );
};
