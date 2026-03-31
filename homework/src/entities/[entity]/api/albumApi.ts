import { baseApi } from '../../../shared/services/services';
import type { Album } from '../../album/types/Album';

export const albumsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAlbums: build.query<Album[], undefined>({
      query: () => 'albums',
      providesTags: (result) =>
        result
          ? result.map(({ id }) => ({ type: 'Album', id }))
          : [{ type: 'Album', id: 'LIST' }],
    }),
    getAlbumsByUserId: build.query<Album[], number>({
      query: (userId) => `albums?userId=${userId}`,
      providesTags: (result) =>
        result
          ? result.map(({ id }) => ({ type: 'Album', id }))
          : [{ type: 'Album', id: 'LIST' }],
    }),
  }),
});

export const { useGetAlbumsQuery, useGetAlbumsByUserIdQuery } = albumsApi;
