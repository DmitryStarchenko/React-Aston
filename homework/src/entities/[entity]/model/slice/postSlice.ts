import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { Post } from '../../../post/types/Post';
import { postsApi } from '../../api/postsApi';

export const postAdapter = createEntityAdapter<Post>();
export const singlePostAdapter = createEntityAdapter<Post>();

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    list: postAdapter.getInitialState(),
    single: singlePostAdapter.getInitialState(),
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        postsApi.endpoints.getPosts.matchFulfilled,
        (state, action) => {
          postAdapter.setAll(state.list, action.payload);
        }
      )
      .addMatcher(
        postsApi.endpoints.getPostsByUserId.matchFulfilled,
        (state, action) => {
          postAdapter.setAll(state.list, action.payload);
        }
      )
      .addMatcher(
        postsApi.endpoints.getPostById.matchFulfilled,
        (state, action) => {
          singlePostAdapter.setOne(state.single, action.payload);
        }
      );
  },
});

export const postReducer = postSlice.reducer;
