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

type Tags = {
  id: string;
  name: string;
};

type TagsData = {
  docs: Tags[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: null | boolean | number;
  nextPage: null | boolean | number;
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
    getPostsByTag: builder.query<Posts, string>({
      query: tag => `posts?where[tags.name][equals]=${tag}&limit=6&page=1`,
    }),
    getAllTags: builder.query<TagsData, void>({
      query: () => `tags`,
    }),
  }),
});

export const {useGetAllPostsQuery, useGetPostsByTagQuery, useGetAllTagsQuery} = blogApi;
