import { baseApi } from '../../../shared/services/services';
import type { Post } from '../model/types';

export const postsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<Post[], undefined>({
      query: () => 'posts',
      providesTags: (result) =>
        result
          ? result.map(({ id }) => ({ type: 'Post', id }))
          : [{ type: 'Post', id: 'LIST' }],
    }),
    getPostsByUserId: build.query<Post[], number>({
      query: (userId) => `posts?userId=${userId}`,
      providesTags: (result) =>
        result
          ? result.map(({ id }) => ({ type: 'Post', id }))
          : [{ type: 'Post', id: 'LIST' }],
    }),
    getPostById: build.query<Post, number>({
      query: (postId) => `posts/${postId}`,
      providesTags: (_result, _err, id) => [{ type: 'Post', id }],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostsByUserIdQuery,
  useGetPostByIdQuery,
} = postsApi;
