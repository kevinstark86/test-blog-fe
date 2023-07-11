import {configureStore} from '@reduxjs/toolkit';
import postsReducer from '@/redux/postSlice';
import {blogApi} from '@/redux/services/postAPi';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    [blogApi.reducerPath]: blogApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(blogApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
