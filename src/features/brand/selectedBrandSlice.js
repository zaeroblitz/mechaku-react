import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBrandById } from "apis/brands";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

export const fetchSelectedBrandData = createAsyncThunk(
  "selectedBrand/fetchSelectedBrand",
  async (id) => {
    const response = await getBrandById(id);
    return response.data;
  }
);

const selectedBrandSlice = createSlice({
  name: "selectedBrand",
  initialState,
  reducers: {
    cleanedUp: (state) => {
      state.loading = false;
      state.data = {};
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSelectedBrandData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSelectedBrandData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchSelectedBrandData.rejected, (state, action) => {
      state.loading = false;
      state.data = {};
      state.error = action.error.message;
    });
  },
});

export default selectedBrandSlice.reducer;
export const { cleanedUp } = selectedBrandSlice.actions;
