import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTransactionDataById } from "apis/transaction";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

export const fetchSelectedTransaction = createAsyncThunk(
  "selectedTransaction/fetch",
  async (id) => {
    const response = await getTransactionDataById(id);
    return response.data;
  }
);

const selectedTransactionSlice = createSlice({
  name: "selectedTransaction",
  initialState,
  reducers: {
    cleanedUp: (state) => {
      state.loading = false;
      state.data = {};
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSelectedTransaction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSelectedTransaction.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchSelectedTransaction.rejected, (state, action) => {
      state.loading = false;
      state.data = {};
      state.error = action.error.message;
    });
  },
});

export default selectedTransactionSlice.reducer;
export const { cleanedUp } = selectedTransactionSlice.actions;
