import { configureStore } from '@reduxjs/toolkit';
import {
  albumsApi,
  commentsApi,
  postsApi,
  todosApi,
} from '../../../entities/[entity]/api';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(postsApi.middleware)
      .concat(todosApi.middleware)
      .concat(commentsApi.middleware)
      .concat(albumsApi.middleware),
});
