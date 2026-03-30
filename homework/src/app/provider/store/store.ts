import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '../../../shared/services/services';
import { userReducer } from '../../../entities/[entity]/model/slice/userSlice';
import { postReducer } from '../../../entities/[entity]/model/slice/postSlice';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    user: userReducer,
    posts: postReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
