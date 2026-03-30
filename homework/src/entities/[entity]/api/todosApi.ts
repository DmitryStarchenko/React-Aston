import { baseApi } from '../../../shared/services/services';
import type { Todo } from '../../todo/types/Todos';

export const todosApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTodos: build.query<Todo[], undefined>({
      query: () => 'todos',
    }),
    getTodosByUserId: build.query<Todo[], number>({
      query: (userId) => `todos?userId=${userId}`,
    }),
  }),
});

export const { useGetTodosQuery, useGetTodosByUserIdQuery } = todosApi;
