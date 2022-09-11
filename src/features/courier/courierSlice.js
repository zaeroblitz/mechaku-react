import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteCourierData,
  getAllCouriersData,
  postCourierData,
  putCourierData,
} from "apis/couriers";

const initialState = {
  loading: false,
  data: [],
  error: "",
  response: "",
};

export const fetchCouriersData = createAsyncThunk(
  "courier/fetchCouriersData",
  async () => {
    const response = await getAllCouriersData();
    return response.data;
  }
);

export const createNewCourier = createAsyncThunk(
  "courier/createNewCourier",
  async (data) => {
    const response = await postCourierData(data);
    return response.data;
  }
);

export const updateSelectedCourier = createAsyncThunk(
  "courier/updateSelectedCourier",
  async ({ id, data }) => {
    const response = await putCourierData(id, data);
    const responseData = response.data;
    return { id, responseData };
  }
);

export const removeSelectedCourier = createAsyncThunk(
  "courier/removeSelectedCourier",
  async (id) => {
    await deleteCourierData(id);
    return id;
  }
);

const courierSlice = createSlice({
  name: "courier",
  initialState,
  reducers: {
    cleanAfterSuccessRemoveCourier: (state) => {
      state.response = "200";
    },
  },
  extraReducers: (builder) => {
    // Fetch Data
    builder.addCase(fetchCouriersData.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.response = "loading";
    });
    builder.addCase(fetchCouriersData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
      state.response = "200";
    });
    builder.addCase(fetchCouriersData.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
      state.response = "error";
    });

    // Create Data
    builder.addCase(createNewCourier.pending, (state) => {
      state.loading = true;
      state.response = "loading";
    });
    builder.addCase(createNewCourier.fulfilled, (state, action) => {
      state.loading = false;
      state.data.push(action.payload);
      state.error = "";
      state.response = "201";
    });
    builder.addCase(createNewCourier.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.response = "error";
    });

    // Update Data
    builder.addCase(updateSelectedCourier.pending, (state) => {
      state.loading = true;
      state.response = "loading";
    });
    builder.addCase(updateSelectedCourier.fulfilled, (state, action) => {
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
    builder.addCase(updateSelectedCourier.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.response = "error";
    });

    // Remove Data
    builder.addCase(removeSelectedCourier.pending, (state) => {
      state.loading = true;
      state.response = "loading";
    });
    builder.addCase(removeSelectedCourier.fulfilled, (state, action) => {
      state.loading = false;
      state.data = state.data.filter((item) => item._id !== action.payload);
      state.error = "";
      state.response = "200-d";
    });
    builder.addCase(removeSelectedCourier.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.response = "error";
    });
  },
});

export default courierSlice.reducer;
export const { cleanAfterSuccessRemoveCourier } = courierSlice.actions;
