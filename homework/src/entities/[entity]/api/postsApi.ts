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
    getPostById: build.query<Post, number>({
      query: (postId) => `posts/${postId}`,
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostsByUserIdQuery,
  useGetPostByIdQuery,
} = postsApi;
