import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASEURL = 'https://jsonplaceholder.typicode.com';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
  endpoints: (build) => ({
    getTodos: build.query({
      query: () => 'todos',
    }),
  }),
});

export const { useGetTodosQuery } = todosApi;
