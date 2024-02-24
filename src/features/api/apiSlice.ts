import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SNAPEZEE_BACKEND_URL as string,
    prepareHeaders: async (headers, { getState }) => {
      const token = (getState() as RootState).authSlice?.accessToken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      headers.set("x-api-key", process.env.NEXT_PUBLIC_SNAPEZEE_API_KEY as string);

      return headers;
    }
  }),
  endpoints: () => ({}),
  tagTypes: ["userProfile", "liveMatches", "liveMatch"]
});
