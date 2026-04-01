import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { postsApi } from '../../api/postsApi';
import { albumsApi } from '../../api/albumApi';
import { todosApi } from '../../api/todosApi';
import type { Album, Post, Todo } from '../types';

export const postAdapter = createEntityAdapter<Post>();
export const albumAdapter = createEntityAdapter<Album>();
export const todoAdapter = createEntityAdapter<Todo>();

const userSlice = createSlice({
  name: 'user',
  initialState: {
    posts: postAdapter.getInitialState(),
    albums: albumAdapter.getInitialState(),
    todos: todoAdapter.getInitialState(),
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        postsApi.endpoints.getPosts.matchFulfilled,
        (state, action) => {
          postAdapter.setAll(state.posts, action.payload);
        }
      )
      .addMatcher(
        postsApi.endpoints.getPostsByUserId.matchFulfilled,
        (state, action) => {
          postAdapter.setAll(state.posts, action.payload);
        }
      )
      .addMatcher(
        albumsApi.endpoints.getAlbums.matchFulfilled,
        (state, action) => {
          albumAdapter.setAll(state.albums, action.payload);
        }
      )
      .addMatcher(
        albumsApi.endpoints.getAlbumsByUserId.matchFulfilled,
        (state, action) => {
          albumAdapter.setAll(state.albums, action.payload);
        }
      )
      .addMatcher(
        todosApi.endpoints.getTodos.matchFulfilled,
        (state, action) => {
          todoAdapter.setAll(state.todos, action.payload);
        }
      )
      .addMatcher(
        todosApi.endpoints.getTodosByUserId.matchFulfilled,
        (state, action) => {
          todoAdapter.setAll(state.todos, action.payload);
        }
      );
  },
});

export const userReducer = userSlice.reducer;
