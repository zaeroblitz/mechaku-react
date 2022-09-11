import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCourierById } from "apis/couriers";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

export const fetchSelectedCourier = createAsyncThunk(
  "selectedCourier/fetch",
  async (id) => {
    const response = await getCourierById(id);
    return response.data;
  }
);

const selectedCourierSlice = createSlice({
  name: "selectedCourier",
  initialState,
  reducers: {
    cleanedUp: (state) => {
      state.loading = false;
      state.data = {};
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSelectedCourier.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSelectedCourier.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchSelectedCourier.rejected, (state, action) => {
      state.loading = false;
      state.data = {};
      state.error = action.error.message;
    });
  },
});

export default selectedCourierSlice.reducer;
export const { cleanedUp } = selectedCourierSlice.actions;
