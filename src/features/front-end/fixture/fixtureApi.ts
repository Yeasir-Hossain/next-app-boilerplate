import { apiSlice } from "@/features/api/apiSlice";

export const fixtureApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFixtureData: builder.query({
      query: (selectedDate) =>
        `/v3/football/fixtures/formatted/date/${selectedDate}?include=league.country;round.stage;participants;state;scores;periods`
    }),
    getMultiFixtures: builder.query({
      query: (fixtureIds) =>
        `/v3/football/fixtures/multi/${fixtureIds}?include=league.country;round.stage;participants;state;scores;periods`
    }),
    getFixturesById: builder.query({
      query: (id) => `/v3/football/fixtures/${id}?include=participants;venue;scores;periods;state;league.country;group`
    }),
    getFixturesMatchLineupById: builder.query({
      query: (id) =>
        `/v3/football/fixtures/${id}?include=formations;lineups.player;lineups.player.position;lineups.position;lineups.type;lineups.details.type;events.type;events.player;events.player.position
      &filters=lineupTypes:11,12;eventTypes:18,19,20`
    }),
    getFixturesMatchStatisticsById: builder.query({
      query: (id) =>
        `/v3/football/fixtures/${id}?include=statistics.type&filters=fixtureStatisticTypes:34,42,45,51,56,83,84,86`
    }),
    getFixturesMatchH2HByTeam: builder.query({
      query: ({ homeId, awayId }) =>
        `/v3/football/fixtures/head-to-head/${homeId}/${awayId}?include=participants;state;periods;scores;`
    }),
    getFixturesInfoAndComments: builder.query({
      query: (id) => `/v3/football/fixtures/${id}?include=comments;events.type;state`
    }),
    getFixtureIds: builder.query({
      query: () => `/api/live-matches/fixture-ids`
    })
  })
});

export const {
  useGetFixtureIdsQuery,
  useGetFixtureDataQuery,
  useGetFixturesByIdQuery,
  useGetMultiFixturesQuery,
  useGetFixturesMatchH2HByTeamQuery,
  useGetFixturesInfoAndCommentsQuery,
  useGetFixturesMatchLineupByIdQuery,
  useGetFixturesMatchStatisticsByIdQuery
} = fixtureApi;
