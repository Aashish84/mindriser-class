import { createSlice } from "@reduxjs/toolkit";
import { clearCart } from "./cartSlice";

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
  },
});

export const { setUser, logOutUser, updateLoginStatus } = userSlice.actions;

// redux-thunk
export function logOutUserWrapper() {
  return function thunkFunction(dispatch, getState) {
    const cartItems = getState().cart.cartItems.length;
    // console.log({ cartItems });
    if (cartItems <= 0) {
      dispatch(logOutUser());
      return;
    }

    if (window.confirm("remove cart item and logout?")) {
      dispatch(clearCart());
      dispatch(logOutUser());
    }
    return;
  };
}

export default userSlice.reducer;
