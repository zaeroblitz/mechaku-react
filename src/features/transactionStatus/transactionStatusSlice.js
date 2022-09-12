import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteTransactionStatusData,
  getAllTransactionStatus,
  postTransactionStatusData,
  putTransactionStatusData,
} from "apis/transactionStatus";

const initialState = {
  loading: false,
  data: [],
  error: "",
  response: "",
};

export const fetchTransactionStatusData = createAsyncThunk(
  "transactionStatus/fetchTransactionStatusData",
  async () => {
    const response = await getAllTransactionStatus();
    return response.data;
  }
);

export const createNewTransactionStatus = createAsyncThunk(
  "transactionStatus/createNewTransactionStatus",
  async (data) => {
    const response = await postTransactionStatusData(data);
    return response.data;
  }
);

export const updateSelectedTransactionStatus = createAsyncThunk(
  "transactionStatus/updateSelectedTransactionStatus",
  async ({ id, data }) => {
    const response = await putTransactionStatusData(id, data);
    const responseData = response.data;
    return { id, responseData };
  }
);

export const removeSelectedTransactionStatus = createAsyncThunk(
  "transactionStatus/removeSelectedTransactionStatus",
  async (id) => {
    await deleteTransactionStatusData(id);
    return id;
  }
);

const transactionStatusSlice = createSlice({
  name: "transactionStatus",
  initialState,
  reducers: {
    cleanAfterSuccessRemove: (state) => {
      state.response = "200";
    },
  },
  extraReducers: (builder) => {
    // Fetch Data
    builder.addCase(fetchTransactionStatusData.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.response = "loading";
    });
    builder.addCase(fetchTransactionStatusData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
      state.response = "200";
    });
    builder.addCase(fetchTransactionStatusData.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
      state.response = "error";
    });

    // Create Data
    builder.addCase(createNewTransactionStatus.pending, (state) => {
      state.loading = true;
      state.response = "loading";
    });
    builder.addCase(createNewTransactionStatus.fulfilled, (state, action) => {
      state.loading = false;
      state.data.push(action.payload);
      state.error = "";
      state.response = "201";
    });
    builder.addCase(createNewTransactionStatus.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.response = "error";
    });

    // Update Data
    builder.addCase(updateSelectedTransactionStatus.pending, (state) => {
      state.loading = true;
      state.response = "loading";
    });
    builder.addCase(
      updateSelectedTransactionStatus.fulfilled,
      (state, action) => {
        state.loading = false;
        state.error = "";
        state.response = "202";
        const selectedGrade = state.data.find(
          (item) => item._id === action.payload.id
        );

        if (selectedGrade) {
          if (action.payload.responseData.name) {
            selectedGrade.name = action.payload.responseData.name;
          }
        }
      }
    );
    builder.addCase(
      updateSelectedTransactionStatus.rejected,
      (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.response = "error";
      }
    );

    // Remove Data
    builder.addCase(removeSelectedTransactionStatus.pending, (state) => {
      state.loading = true;
      state.response = "loading";
    });
    builder.addCase(
      removeSelectedTransactionStatus.fulfilled,
      (state, action) => {
        state.loading = false;
        state.data = state.data.filter((item) => item._id !== action.payload);
        state.error = "";
        state.response = "200-d";
      }
    );
    builder.addCase(
      removeSelectedTransactionStatus.rejected,
      (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.response = "error";
      }
    );
  },
});

export default transactionStatusSlice.reducer;
export const { cleanAfterSuccessRemove } = transactionStatusSlice.actions;
