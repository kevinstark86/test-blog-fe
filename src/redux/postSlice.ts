import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import type {RootState} from '@/redux/store/store';

export type PostData = {
  docs: [];
  totalDocs: number;
  totalPages: number;
  page: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: boolean | null;
  nextPage: boolean | null;
};

export type PostState = {
  data: PostData[];
  loading: boolean;
  error: boolean;
};

const initialState: PostState = {
  data: [],
  loading: false,
  error: false,
};

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  const response = await fetch('https://payload-cms-test-production.up.railway.app/api/posts');
  const data = await response.json();
  return data;
});

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    rehydrate(state, action: PayloadAction<PostState>) {
      // @ts-ignore
      state.data = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getPosts.pending, state => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.data = payload;
      });
  },
});

export const {rehydrate} = postSlice.actions;

export const selectPosts = (state: RootState) => state.posts.data;
export default postSlice.reducer;
