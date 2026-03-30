import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { Post } from '../../../post/types/Post';
import { postsApi } from '../../api/postsApi';

export const postAdapter = createEntityAdapter<Post>();

const postSlice = createSlice({
  name: 'posts',
  initialState: postAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      postsApi.endpoints.getPosts.matchFulfilled,
      (state, action) => {
        postAdapter.setAll(state, action.payload);
      }
    );
    builder.addMatcher(
      postsApi.endpoints.getPostsByUserId.matchFulfilled,
      (state, action) => {
        postAdapter.setAll(state, action.payload);
      }
    );
  },
});

export const postReducer = postSlice.reducer;
export const { selectAll: selectAllPosts } = postAdapter.getSelectors();
