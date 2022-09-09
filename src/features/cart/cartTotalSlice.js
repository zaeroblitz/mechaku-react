import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
  tax: 0,
  grandTotal: 0,
};

const cartTotalSlice = createSlice({
  name: "cartTotal",
  initialState,
  reducers: {
    checkedItemCart: (state, action) => {
      const price = action.payload;
      const tax = 0.1 * price;

      state.total += price;
      state.tax += tax;
      state.grandTotal += price + tax;
    },
    uncheckedItemCart: (state, action) => {
      const price = action.payload;
      const tax = 0.1 * price;

      state.total -= price;
      state.tax -= tax;
      state.grandTotal -= price + tax;
    },
  },
});

export default cartTotalSlice.reducer;
export const { checkedItemCart, uncheckedItemCart } = cartTotalSlice.actions;
