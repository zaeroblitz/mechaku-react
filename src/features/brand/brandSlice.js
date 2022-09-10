import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createBrand, deleteBrand, getBrands, updateBrand } from "apis/brands";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const fetchBrandsData = createAsyncThunk(
  "brand/fetchBrands",
  async () => {
    const response = await getBrands();
    return response.data;
  }
);

export const createNewBrandData = createAsyncThunk(
  "brand/createNewBrand",
  async (data) => {
    const response = await createBrand(data);
    return response.data;
  }
);

export const updateSelectedBrandData = createAsyncThunk(
  "brand/updateBrand",
  async ({ id, updateData }) => {
    const response = await updateBrand(id, updateData);
    const responseData = response.data;
    return { id, responseData };
  }
);

export const removeSelectedBrandData = createAsyncThunk(
  "brand/removeBrand",
  async (id) => {
    await deleteBrand(id);
    return id;
  }
);

const brandSlice = createSlice({
  name: "brand",
  initialState,
  extraReducers: (builder) => {
    // Fetch All Brand Data
    builder.addCase(fetchBrandsData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBrandsData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchBrandsData.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });

    // Create New Brand Data
    builder.addCase(createNewBrandData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createNewBrandData.fulfilled, (state, action) => {
      state.loading = false;
      state.data.push(action.payload);
      state.error = "";
    });
    builder.addCase(createNewBrandData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Update Brand Data
    builder.addCase(updateSelectedBrandData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateSelectedBrandData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";

      const selectedBrand = state.data.find(
        (item) => item._id === action.payload.id
      );

      if (selectedBrand) {
        if (action.payload.name) {
          selectedBrand.name = action.payload.name;
        }

        if (action.payload.thumbnail) {
          selectedBrand.thumbnail = action.payload.thumbnail;
        }
      }
    });
    builder.addCase(updateSelectedBrandData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Remove Brand Data
    builder.addCase(removeSelectedBrandData.fulfilled, (state, action) => {
      state.data = state.data.filter((item) => item._id !== action.payload);
    });
  },
});

export default brandSlice.reducer;
