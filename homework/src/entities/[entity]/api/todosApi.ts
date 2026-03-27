import { baseApi } from '../../../shared/services/services';
import type { Todo } from '../../todo/types/Todos';

const todosApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTodos: build.query<Todo[], undefined>({
      query: () => 'todos',
    }),
  }),
});

export const { useGetTodosQuery } = todosApi;
