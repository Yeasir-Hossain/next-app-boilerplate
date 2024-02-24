import { apiSlice } from "@/features/api/apiSlice";

export const newsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllNews: builder.query({
      query: () => "/api/news"
    }),
    getGroupByNews: builder.query({
      query: () => "/api/news/group-by-league"
    }),
    getSingleNews: builder.query({
      query: (slug) => `/api/news/${slug}`
    })
  })
});

export const { useGetAllNewsQuery, useGetGroupByNewsQuery, useGetSingleNewsQuery } = newsApi;
