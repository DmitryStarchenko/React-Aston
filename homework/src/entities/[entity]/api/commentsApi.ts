import { baseApi } from '../../../shared/services/services';
import type { Comment } from '../../comment/types/Comment';

const commentsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getComments: build.query<Comment[], undefined>({
      query: () => 'comments',
    }),
  }),
});

export const { useGetCommentsQuery } = commentsApi;
