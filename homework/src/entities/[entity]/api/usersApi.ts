import { baseApi } from '../../../shared/services/services';
import type { User } from '../../user/types/User';

const usersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<User[], undefined>({
      query: () => 'users',
      providesTags: (result) =>
        result
          ? result.map(({ id }) => ({ type: 'User', id }))
          : [{ type: 'User', id: 'LIST' }],
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
