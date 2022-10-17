import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducer/cartSlice";
import userReducer from "./reducer/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});
