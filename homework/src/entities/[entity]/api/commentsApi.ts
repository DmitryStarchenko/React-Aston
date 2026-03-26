import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASEURL = 'https://jsonplaceholder.typicode.com';

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
  endpoints: (build) => ({
    getComments: build.query({
      query: () => 'comments',
    }),
  }),
});

export const { useGetCommentsQuery } = commentsApi;
