import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASEURL = 'https://jsonplaceholder.typicode.com';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
  endpoints: (build) => ({
    getPosts: build.query({
      query: () => 'posts',
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
