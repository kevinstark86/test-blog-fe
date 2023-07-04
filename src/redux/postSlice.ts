import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@/redux/store/store';

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

// @ts-ignore
export const selectPosts = (state: RootState) => state.posts.posts;
export default postSlice.reducer;
