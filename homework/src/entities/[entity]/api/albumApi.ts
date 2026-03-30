import { baseApi } from '../../../shared/services/services';
import type { Album } from '../../album/types/Album';

export const albumsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAlbums: build.query<Album[], undefined>({
      query: () => 'albums',
    }),
    getAlbumsByUserId: build.query<Album[], number>({
      query: (userId) => `albums?userId=${userId}`,
    }),
  }),
});

export const { useGetAlbumsQuery, useGetAlbumsByUserIdQuery } = albumsApi;
