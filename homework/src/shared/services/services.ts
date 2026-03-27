import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASEURL = 'https://jsonplaceholder.typicode.com/';

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
  endpoints: () => ({}),
});
