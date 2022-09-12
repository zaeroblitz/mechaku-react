import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTransactionStatusById } from "apis/transactionStatus";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

export const fetchSelectedTransactionStatus = createAsyncThunk(
  "selectedTransactionStatus/fetch",
  async (id) => {
    const response = await getTransactionStatusById(id);
    return response.data;
  }
);

const selectedTransactionStatusSlice = createSlice({
  name: "selectedTransactionStatus",
  initialState,
  reducers: {
    cleanedUp: (state) => {
      state.loading = false;
      state.data = {};
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSelectedTransactionStatus.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchSelectedTransactionStatus.fulfilled,
      (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = "";
      }
    );
    builder.addCase(
      fetchSelectedTransactionStatus.rejected,
      (state, action) => {
        state.loading = false;
        state.data = {};
        state.error = action.error.message;
      }
    );
  },
});

export default selectedTransactionStatusSlice.reducer;
export const { cleanedUp } = selectedTransactionStatusSlice.actions;
