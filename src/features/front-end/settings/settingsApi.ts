import { apiSlice } from "@/features/api/apiSlice";

export const newsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllowedStates: builder.query({
      query: () => "/api/allowed-states"
    })
  })
});

export const { useGetAllowedStatesQuery } = newsApi;
