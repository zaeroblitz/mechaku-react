import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const selectedCartSlice = createSlice({
  name: "selectedCart",
  initialState,
  reducers: {
    addSelectedCart: (state, action) => {
      state.data.push(action.payload);
    },
    uncheckedSelectedCart: (state, action) => {
      state.data = state.data.filter((item) => item.itemId !== action.payload);
    },
    cleanSelectedCart: (state) => {
      state.data = [];
    },
  },
});

export default selectedCartSlice.reducer;
export const { addSelectedCart, uncheckedSelectedCart, cleanSelectedCart } =
  selectedCartSlice.actions;
