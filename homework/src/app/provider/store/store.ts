import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '../../../shared/services/services';
import { postReducer } from '../../../entities/[entity]/model/slice/userSlice';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    posts: postReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
