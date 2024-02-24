import { createSlice } from "@reduxjs/toolkit";

interface IAuthState {
  accessToken?: string | undefined;
  user?: any | undefined;
  forgetPhone: string;
  role: "admin" | "moderator";
}

const initialState: IAuthState = {
  accessToken: undefined,
  user: undefined,
  forgetPhone: "",
  role: "admin"
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.role = action.payload.role;
    },
    userLoggedOut: (state) => {
      state.accessToken = undefined;
      state.user = undefined;
    },
    userForgetPhone: (state, action) => {
      state.forgetPhone = action.payload;
    }
  }
});

export const { userLoggedIn, userLoggedOut, userForgetPhone } = authSlice.actions;

export default authSlice;
