import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

type Posts = {
  docs: [];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number;
  page: number;
  pagingCounter: number;
  prevPage: null | boolean | number;
  totalDocs: number;
  totalPages: number;
};

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://payload-cms-test-production.up.railway.app/api/',
  }),
  endpoints: builder => ({
    getAllPosts: builder.query<Posts, number>({
      query: (page = 1) => `posts?limit=6&page=${page}`,
    }),
  }),
});

export const {useGetAllPostsQuery} = blogApi;
