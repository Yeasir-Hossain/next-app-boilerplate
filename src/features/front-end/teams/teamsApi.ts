import { apiSlice } from "../../api/apiSlice";

export const leagueApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTeamUpcomingData: builder.query({
      query: (id) =>
        `/v3/football/teams/${id}?include=upcoming.participants;upcoming.scores;upcoming.state;upcoming.league;`
    }),

    getTeamInfo: builder.query({
      query: (id) => `/v3/football/teams/${id}?include=latest.participants;latest.scores;latest.state;latest.league;`
    }),

    getTeamDetails: builder.query({
      query: (id) =>
        `/v3/football/teams/${id}?include=activeSeasons.league;country;venue.city;coaches.coach;upcoming.participants;upcoming.scores;upcoming.state;upcoming.league;latest.participants;latest.scores;latest.state;latest.league`
    }),

    getTeamTransfers: builder.query({
      query: (id) => `/v3/football/transfers/teams/${id}?include=toTeam;fromTeam;player&filters=transferTypes:219;`
    }),
    getTeamSquadData: builder.query({
      query: ({ seasonId, teamId }) =>
        `/v3/football/squads/seasons/${seasonId}/teams/${teamId}?include=player.position;player.country`
    }),
    getTopScorerAssist: builder.query({
      query: (id) =>
        `/v3/football/seasons/${id}?include=topscorers.player;topscorers.participant&filters=seasonTopscorerTypes:208,209`
    }),
    getTeamTrophies: builder.query({
      query: (id) => `/v3/football/teams/${id}?include=trophies.league;trophies.season;trophies.trophy`
    }),
    getSearchTeam: builder.query({
      query: (search_query) => `/v3/football/teams/search/${search_query}`
    })
  })
});

export const {
  useGetTeamUpcomingDataQuery,
  useGetTeamInfoQuery,
  useGetTeamDetailsQuery,
  useGetTeamTransfersQuery,
  useGetTeamSquadDataQuery,
  useGetTopScorerAssistQuery,
  useGetTeamTrophiesQuery,
  useGetSearchTeamQuery
} = leagueApi;
