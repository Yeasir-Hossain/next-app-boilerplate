import { apiSlice } from "@/features/api/apiSlice";

export const fixtureApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFootballFixtures: builder.query({
      query: (selectedDate) =>
        `/v3/football/fixtures/formatted/date/${selectedDate}?include=league.country;round.stage;participants;state;scores;periods`
    }),
    checkHighlights: builder.query({
      query: (fixtureId) => `/api/admin/fixtures/highlights/${fixtureId}`,
      keepUnusedDataFor: 0
    })
  })
});

export const { useGetFootballFixturesQuery, useCheckHighlightsQuery } = fixtureApi;
