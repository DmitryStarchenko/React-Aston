import { baseApi } from '../../../shared/services/services';
import type { Post } from '../../post/types/Post';

export const postsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<Post[], undefined>({
      query: () => 'posts',
    }),
    getPostsByUserId: build.query<Post[], number>({
      query: (userId) => `posts?userId=${userId}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostsByUserIdQuery } = postsApi;
