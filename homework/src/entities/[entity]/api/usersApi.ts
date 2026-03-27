import { baseApi } from '../../../shared/services/services';
import type { User } from '../../user/types/User';

const usersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<User[], undefined>({
      query: () => 'users',
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
