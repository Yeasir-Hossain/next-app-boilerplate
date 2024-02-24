import { apiSlice } from "@/features/api/apiSlice";

export const fixtureApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCricketFixtures: builder.query({
      query: () => `/v2/cricket/fixtures/?include=league`
    })
  })
});

export const { useGetCricketFixturesQuery } = fixtureApi;
