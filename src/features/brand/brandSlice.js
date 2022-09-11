import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createBrand, deleteBrand, getBrands, updateBrand } from "apis/brands";

const initialState = {
  loading: false,
  data: [],
  error: "",
  response: "",
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
  reducers: {
    cleanedUp: (state) => {
      state.response = "200";
    },
  },
  extraReducers: (builder) => {
    // Fetch All Brand Data
    builder.addCase(fetchBrandsData.pending, (state) => {
      state.loading = true;
      state.response = "loading";
    });
    builder.addCase(fetchBrandsData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
      state.response = "200";
    });
    builder.addCase(fetchBrandsData.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
      state.response = "error";
    });

    // Create New Brand Data
    builder.addCase(createNewBrandData.pending, (state) => {
      state.loading = true;
      state.response = "loading";
    });
    builder.addCase(createNewBrandData.fulfilled, (state, action) => {
      state.loading = false;
      state.data.push(action.payload);
      state.error = "";
      state.response = "201";
    });
    builder.addCase(createNewBrandData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.response = "error";
    });

    // Update Brand Data
    builder.addCase(updateSelectedBrandData.pending, (state) => {
      state.loading = true;
      state.response = "loading";
    });
    builder.addCase(updateSelectedBrandData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.response = "202";

      const selectedBrand = state.data.find(
        (item) => item._id === action.payload.id
      );

      if (selectedBrand) {
        if (action.payload.responseData.name) {
          selectedBrand.name = action.payload.responseData.name;
        }

        if (action.payload.responseData.thumbnail) {
          selectedBrand.thumbnail = action.payload.responseData.thumbnail;
        }
      }
    });
    builder.addCase(updateSelectedBrandData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.response = "error";
    });

    // Remove Brand Data
    builder.addCase(removeSelectedBrandData.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.response = "loading";
    });
    builder.addCase(removeSelectedBrandData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = state.data.filter((item) => item._id !== action.payload);
      state.error = "";
      state.response = "200-d";
    });
    builder.addCase(removeSelectedBrandData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.response = "error";
    });
  },
});

export default brandSlice.reducer;
export const { cleanedUp } = brandSlice.actions;
