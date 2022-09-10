import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategoryById } from "apis/category";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

export const fetchSelectedCategory = createAsyncThunk(
  "selectedCategory/fetchSelectedCategory",
  async (id) => {
    const response = await getCategoryById(id);
    return response.data;
  }
);

const selectedCategorySlice = createSlice({
  name: "selectedCategory",
  initialState,
  reducers: {
    cleanedUp: (state) => {
      state.loading = false;
      state.data = {};
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSelectedCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSelectedCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchSelectedCategory.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default selectedCategorySlice.reducer;
export const { cleanedUp } = selectedCategorySlice.actions;
