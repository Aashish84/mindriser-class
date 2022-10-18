import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartData")) || [],
  total: 0,
  amount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const status = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      if (!status) {
        const tmpObj = {
          _id: action.payload._id,
          name: action.payload.name,
          price: action.payload.price,
          image: action.payload.images[0],
          quantity: 1,
        };
        state.cartItems.push(tmpObj);
      }
      localStorage.setItem("cartData", JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cartData");
    },
    removeItem: (state, action) => {
      const itemID = action.payload;
      state.cartItems = state.cartItems.filter((item) => item._id !== itemID);
      localStorage.setItem("cartData", JSON.stringify(state.cartItems));
    },
    toggleItemQty: (state, action) => {
      const { amt, _id: itemID } = action.payload;
      state.cartItems = state.cartItems.filter((item) => {
        if (item._id === itemID) {
          item.quantity += amt;
        }
        return item.quantity > 0;
      });
      localStorage.setItem("cartData", JSON.stringify(state.cartItems));
    },
    updateAmtTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        total += item.price * item.quantity;
        amount += item.quantity;
      });
      state.amount = amount;
      state.total = total.toFixed(2);
    },
  },
});

export const {
  addProduct,
  clearCart,
  removeItem,
  toggleItemQty,
  updateAmtTotal,
} = cartSlice.actions;

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
