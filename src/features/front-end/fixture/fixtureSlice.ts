import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkLive: false,
  selectedDate: new Date().toISOString().slice(0, 10)
};

const fixtureSlice = createSlice({
  name: "fixture",
  initialState,
  reducers: {
    setCheckLive: (state) => {
      state.checkLive = !state.checkLive;
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload.date;
    }
  }
});

export const { setCheckLive, setSelectedDate } = fixtureSlice.actions;

export default fixtureSlice;
