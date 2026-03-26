import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASEURL = 'https://jsonplaceholder.typicode.com';

export const albumsApi = createApi({
  reducerPath: 'albumsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
  endpoints: (build) => ({
    getAlbums: build.query({
      query: () => 'albums',
    }),
  }),
});

export const { useGetAlbumsQuery } = albumsApi;
