import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      if (state.user) {
        state.isLoggedIn = true;
      }
    },
    logOutUser: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem("access_token");
    },
    updateLoginStatus: (state) => {
      if (state.user) {
        state.isLoggedIn = true;
      } else {
        state.isLoggedIn = false;
      }
    },
  },
});

export const { setUser, logOutUser, updateLoginStatus } = userSlice.actions;

export default userSlice.reducer;
