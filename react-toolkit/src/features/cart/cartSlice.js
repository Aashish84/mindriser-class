import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// import cartItems from "../../cartItems";

const url = "https://course-api.com/react-useReducer-cart-project";
const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // dont have to return
    clearCart: (state) => {
      state.amount = 0;
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemID = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemID);
    },
    toggleItemAmt: (state, action) => {
      const { amt, itemID } = action.payload;

      state.cartItems = state.cartItems.filter((item) => {
        if (item.id === itemID) {
          item.amount += amt;
        }
        return item.amount > 0;
      });
    },
    updateAmtTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        total += item.price * item.amount;
        amount += item.amount;
      });
      state.amount = amount;
      state.total = total.toFixed(2);
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      // console.log(action);
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

// console.log(cartSlice);

export const {
  clearCart,
  resetCart,
  removeItem,
  toggleItemAmt,
  updateAmtTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
