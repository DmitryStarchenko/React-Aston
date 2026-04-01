import { baseApi } from '../../../shared/services/services';
import type { Comment } from '../model/types';

const commentsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getComments: build.query<Comment[], undefined>({
      query: () => 'comments',
      providesTags: (result) =>
        result
          ? result.map(({ id }) => ({ type: 'Comment', id }))
          : [{ type: 'Comment', id: 'LIST' }],
    }),
  }),
});

export const { useGetCommentsQuery } = commentsApi;
