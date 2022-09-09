import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts } from "apis/products";

const initialState = {
  loading: false,
  products: [],
  error: "",
};

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    const response = await getAllProducts();
    return response.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
