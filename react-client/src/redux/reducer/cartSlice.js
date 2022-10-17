import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  cartSet: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      if (state.cartSet.includes(action.payload._id)) {
        alert(`${action.payload.name} already added to cart`);
        return;
      }

      state.cart.push(action.payload);

      state.cartSet.push(action.payload._id);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addProduct, clearCart } = cartSlice.actions;

// redux thunk
// add product only if logged in
export function addProductWrapper(payload) {
  return function thunkFunction(dispatch, getState) {
    let { isLoggedIn } = getState().user;
    if (isLoggedIn) {
      dispatch(addProduct(payload));
      return;
    }
    alert("please login first");
  };
}

export default cartSlice.reducer;
