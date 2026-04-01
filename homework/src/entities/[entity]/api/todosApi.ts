import { baseApi } from '../../../shared/services/services';
import type { Todo } from '../model/types';

export const todosApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTodos: build.query<Todo[], undefined>({
      query: () => 'todos',
      providesTags: (result) =>
        result
          ? result.map(({ id }) => ({ type: 'Todo', id }))
          : [{ type: 'Todo', id: 'LIST' }],
    }),
    getTodosByUserId: build.query<Todo[], number>({
      query: (userId) => `todos?userId=${userId}`,
      providesTags: (result) =>
        result
          ? result.map(({ id }) => ({ type: 'Todo', id }))
          : [{ type: 'Todo', id: 'LIST' }],
    }),
  }),
});

export const { useGetTodosQuery, useGetTodosByUserIdQuery } = todosApi;
