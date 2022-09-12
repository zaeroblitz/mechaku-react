import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  address: "",
  products: [],
  courier: "",
  payment: "",
  value: 0,
  tax: 0,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    addAddress: (state, action) => {
      state.address = action.payload;
    },
    addProducts: (state, action) => {
      state.products.push(action.payload);
    },
    addCourier: (state, action) => {
      state.courier = action.payload;
    },
    addPayment: (state, action) => {
      state.payment = action.payload;
    },
    addValue: (state, action) => {
      state.value = action.payload;
    },
    addTax: (state, action) => {
      state.tax = action.payload;
    },
  },
});

export default checkoutSlice.reducer;
export const {
  addUser,
  addAddress,
  addProducts,
  addCourier,
  addPayment,
  addValue,
  addTax,
} = checkoutSlice.actions;
