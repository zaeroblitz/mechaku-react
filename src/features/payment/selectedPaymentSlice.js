import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPaymentById } from "apis/payment";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

export const fetchSelectedPayment = createAsyncThunk(
  "selectedPayment/fetch",
  async (id) => {
    const response = await getPaymentById(id);
    return response.data;
  }
);

const selectedPaymentSlice = createSlice({
  name: "selectedPayment",
  initialState,
  reducers: {
    cleanedUp: (state) => {
      state.loading = false;
      state.data = {};
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSelectedPayment.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSelectedPayment.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchSelectedPayment.rejected, (state, action) => {
      state.loading = false;
      state.data = {};
      state.error = action.error.message;
    });
  },
});

export default selectedPaymentSlice.reducer;
export const { cleanedUp } = selectedPaymentSlice.actions;
