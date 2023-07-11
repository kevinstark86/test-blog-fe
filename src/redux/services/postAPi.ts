import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://payload-cms-test-production.up.railway.app/api/',
  }),
  endpoints: builder => ({
    getAllPosts: builder.query({
      query: () => `posts`,
    }),
  }),
});

export const {useGetAllPostsQuery} = blogApi;
