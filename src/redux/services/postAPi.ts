import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

type Posts = {
  docs: [];
};

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://payload-cms-test-production.up.railway.app/api/',
  }),
  endpoints: builder => ({
    getAllPosts: builder.query<Posts, void>({
      query: () => `posts`,
    }),
  }),
});

export const {useGetAllPostsQuery} = blogApi;
