import { baseApi } from '../../../shared/services/services';
import type { Post } from '../../post/types/Post';

const postsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<Post[], undefined>({
      query: () => 'posts',
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
