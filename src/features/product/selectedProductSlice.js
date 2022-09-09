import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProductById } from "apis/products";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const fetchSelectedProduct = createAsyncThunk(
  "selectedProduct/fetch",
  async (id) => {
    const response = await getProductById(id);
    return response.data;
  }
);

const selectedProductSlice = createSlice({
  name: "selectedProduct",
  initialState,
  reducers: {
    cleanedUp: (state) => {
      state.loading = false;
      state.data = [];
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSelectedProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSelectedProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchSelectedProduct.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default selectedProductSlice.reducer;
export const { cleanedUp } = selectedProductSlice.actions;
