import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getGradeById } from "apis/grades";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

export const fetchSelectedGrade = createAsyncThunk(
  "selectedGrade/fetch",
  async (id) => {
    const response = await getGradeById(id);
    return response.data;
  }
);

const selectedGradeSlice = createSlice({
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
    builder.addCase(fetchSelectedGrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSelectedGrade.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchSelectedGrade.rejected, (state, action) => {
      state.loading = false;
      state.data = {};
      state.error = action.error.message;
    });
  },
});

export default selectedGradeSlice.reducer;
export const { cleanedUp } = selectedGradeSlice.actions;
