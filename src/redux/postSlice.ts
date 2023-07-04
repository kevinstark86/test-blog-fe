import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '@/redux/store/store';

export interface PostState {
  posts: [] | null;
}

const initialState: PostState = {
  posts: null,
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
});

export const selectPosts = (state: RootState) => state.posts.posts;
export default postSlice.reducer;
