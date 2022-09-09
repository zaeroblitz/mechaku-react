import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts } from "apis/products";

const initialState = {
  loading: false,
  products: [],
  error: "",
};

export const fetchFeaturedProducts = createAsyncThunk(
  "featuredProducts/fetch",
  async () => {
    const response = await getAllProducts();
    return response.data;
  }
);

const featuredProductSlice = createSlice({
  name: "featuredProducts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchFeaturedProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFeaturedProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(fetchFeaturedProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

export default featuredProductSlice.reducer;
