import { baseApi } from '../../../shared/services/services';

const albumsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAlbums: build.query({
      query: () => 'albums',
    }),
  }),
});

export const { useGetAlbumsQuery } = albumsApi;
