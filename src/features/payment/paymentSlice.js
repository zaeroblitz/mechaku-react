import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  deletePaymentData,
  getAllPayments,
  postPaymentData,
  putPaymentData,
} from "apis/payment";

const initialState = {
  loading: false,
  data: [],
  error: "",
  response: "",
};

export const fetchPaymentsData = createAsyncThunk(
  "payment/fetchPaymentsData",
  async () => {
    const response = await getAllPayments();
    return response.data;
  }
);

export const createNewPayment = createAsyncThunk(
  "payment/createNewPayment",
  async (data) => {
    const response = await postPaymentData(data);
    return response.data;
  }
);

export const updateSelectedPayment = createAsyncThunk(
  "payment/updateSelectedPayment",
  async ({ id, data }) => {
    const response = await putPaymentData(id, data);
    const responseData = response.data;
    return { id, responseData };
  }
);

export const removeSelectedPayment = createAsyncThunk(
  "payment/removeSelectedPayment",
  async (id) => {
    await deletePaymentData(id);
    return id;
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    cleanAfterSuccessRemovePayment: (state) => {
      state.response = "200";
    },
  },
  extraReducers: (builder) => {
    // Fetch Data
    builder.addCase(fetchPaymentsData.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.response = "loading";
    });
    builder.addCase(fetchPaymentsData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
      state.response = "200";
    });
    builder.addCase(fetchPaymentsData.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
      state.response = "error";
    });

    // Create Data
    builder.addCase(createNewPayment.pending, (state) => {
      state.loading = true;
      state.response = "loading";
    });
    builder.addCase(createNewPayment.fulfilled, (state, action) => {
      state.loading = false;
      state.data.push(action.payload);
      state.error = "";
      state.response = "201";
    });
    builder.addCase(createNewPayment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.response = "error";
    });

    // Update Data
    builder.addCase(updateSelectedPayment.pending, (state) => {
      state.loading = true;
      state.response = "loading";
    });
    builder.addCase(updateSelectedPayment.fulfilled, (state, action) => {
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

        if (action.payload.responseData.thumbnail) {
          selectedGrade.thumbnail = action.payload.responseData.thumbnail;
        }
      }
    });
    builder.addCase(updateSelectedPayment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.response = "error";
    });

    // Remove Data
    builder.addCase(removeSelectedPayment.pending, (state) => {
      state.loading = true;
      state.response = "loading";
    });
    builder.addCase(removeSelectedPayment.fulfilled, (state, action) => {
      state.loading = false;
      state.data = state.data.filter((item) => item._id !== action.payload);
      state.error = "";
      state.response = "200-d";
    });
    builder.addCase(removeSelectedPayment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.response = "error";
    });
  },
});

export default paymentSlice.reducer;
export const { cleanAfterSuccessRemovePayment } = paymentSlice.actions;
