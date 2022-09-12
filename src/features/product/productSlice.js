import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteProductData,
  getAllProducts,
  postProductData,
  putProductData,
} from "apis/products";

const initialState = {
  loading: false,
  products: [],
  error: "",
  response: "",
};

export const fetchAllProducts = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await getAllProducts();
    return response.data;
  }
);

export const createNewProduct = createAsyncThunk(
  "product/createNewProduct",
  async (data) => {
    const response = await postProductData(data);
    return response.data;
  }
);

export const updateSelectedProduct = createAsyncThunk(
  "product/updateSelectedProduct",
  async ({ id, data }) => {
    const response = await putProductData(id, data);
    return response.data;
  }
);

export const removeSelectedProduct = createAsyncThunk(
  "product/removeSelectedProduct",
  async (id) => {
    await deleteProductData(id);
    return id;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    cleanedUpAfterRemove: (state) => {
      state.response = "200";
    },
  },
  extraReducers: (builder) => {
    // Fetch
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.loading = true;
      state.response = "loading";
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
      state.response = "200";
    });
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
      state.response = "error";
    });

    // Create
    builder.addCase(createNewProduct.pending, (state) => {
      state.loading = true;
      state.response = "loading";
    });
    builder.addCase(createNewProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products.push(action.payload);
      state.error = "";
      state.response = "201";
    });
    builder.addCase(createNewProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.response = "error";
    });

    // Update
    builder.addCase(updateSelectedProduct.pending, (state) => {
      state.loading = true;
      state.response = "loading";
    });
    builder.addCase(updateSelectedProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.response = "202";
    });
    builder.addCase(updateSelectedProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.response = "error";
    });

    // Remove
    builder.addCase(removeSelectedProduct.pending, (state) => {
      state.loading = true;
      state.response = "loading";
    });
    builder.addCase(removeSelectedProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.response = "200-d";
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
    });
    builder.addCase(removeSelectedProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.response = "error";
    });
  },
});

export default productSlice.reducer;
export const { cleanedUpAfterRemove } = productSlice.actions;
