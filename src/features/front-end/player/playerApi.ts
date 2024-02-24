import { apiSlice } from "@/features/api/apiSlice";

export const playerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPlayerDetails: builder.query({
      query: (id) =>
        `/v3/football/players/${id}?include=position;detailedPosition;country;teams.team;statistics.details.type;statistics.season.league;transfers.fromTeam;transfers.toTeam;transfers.type;trophies.league;trophies.season;trophies.trophy;latest.fixture;`
    }),
    getPlayerMatches: builder.query({
      query: (fixtureIds) =>
        `/v3/football/fixtures/multi/${fixtureIds}?include=league;participants;state;scores;events.type;lineups.details.type`
    })
  })
});

export const { useGetPlayerDetailsQuery, useGetPlayerMatchesQuery } = playerApi;
