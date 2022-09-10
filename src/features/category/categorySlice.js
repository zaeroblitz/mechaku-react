import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteCategoryData,
  getAllCategories,
  postCategoryData,
  putCategoryData,
} from "apis/category";

const initialState = {
  loading: false,
  data: [],
  error: "",
  response: "",
};

export const fetchCategoriesData = createAsyncThunk(
  "category/fetchCategories",
  async () => {
    const response = await getAllCategories();
    return response.data;
  }
);

export const createCategoryData = createAsyncThunk(
  "category/createCategory",
  async (data) => {
    const response = await postCategoryData(data);
    return response.data;
  }
);

export const updateCategoryData = createAsyncThunk(
  "category/updateCategory",
  async ({ id, data }) => {
    const response = await putCategoryData(id, data);
    const responseData = response.data;
    return { id, responseData };
  }
);

export const removeCategoryData = createAsyncThunk(
  "category/removeCategory",
  async (id) => {
    await deleteCategoryData(id);
    return id;
  }
);

const categoySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    cleanedUp: (state) => {
      state.response = "200";
    },
  },
  extraReducers: (builder) => {
    // Fetch Data
    builder.addCase(fetchCategoriesData.pending, (state) => {
      state.loading = true;
      state.response = "loading";
    });
    builder.addCase(fetchCategoriesData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
      state.response = "200";
    });
    builder.addCase(fetchCategoriesData.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
      state.response = "error";
    });

    // Create Data
    builder.addCase(createCategoryData.pending, (state) => {
      state.loading = true;
      state.response = "loading";
    });
    builder.addCase(createCategoryData.fulfilled, (state, action) => {
      state.loading = false;
      state.data.push(action.payload);
      state.error = "";
      state.response = "201";
    });
    builder.addCase(createCategoryData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.response = "error";
    });

    // Update Data
    builder.addCase(updateCategoryData.pending, (state) => {
      state.loading = true;
      state.response = "loading";
    });
    builder.addCase(updateCategoryData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.response = "202";

      const selectedCategory = state.data.find(
        (item) => item._id === action.payload.id
      );

      if (selectedCategory) {
        if (action.payload.name) {
          selectedCategory.name = action.payload.name;
        }

        if (action.payload.thumbnail) {
          selectedCategory.thumbnail = action.payload.thumbnail;
        }
      }
    });
    builder.addCase(updateCategoryData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.response = "error";
    });

    // Remove Data
    builder.addCase(removeCategoryData.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.response = "loading";
    });
    builder.addCase(removeCategoryData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = state.data.filter((item) => item._id !== action.payload);
      state.error = "";
      state.response = "200-d";
    });
    builder.addCase(removeCategoryData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.response = "error";
    });
  },
});

export default categoySlice.reducer;
export const { cleanedUp } = categoySlice.actions;
