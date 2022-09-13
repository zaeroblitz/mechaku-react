import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTransactionDataByUser } from "apis/transaction";

const initialState = {
  loading: false,
  data: [],
  error: "",
  response: "",
};

export const fetchTransactionUserData = createAsyncThunk(
  "transactionUser/fetchTransactionUserData",
  async (userId) => {
    const response = await getTransactionDataByUser(userId);
    return response.data;
  }
);

const transactionUserSlice = createSlice({
  name: "transactionUser",
  initialState,
  extraReducers: (builder) => {
    // Fetch Data
    builder.addCase(fetchTransactionUserData.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.response = "loading";
    });
    builder.addCase(fetchTransactionUserData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
      state.response = "200";
    });
    builder.addCase(fetchTransactionUserData.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
      state.response = "error";
    });
  },
});

export default transactionUserSlice.reducer;
export const { cleanAfterSuccessRemove } = transactionUserSlice.actions;
