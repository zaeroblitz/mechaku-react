import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteGradeData,
  getAllGrades,
  postGradeData,
  putGradeData,
} from "apis/grades";

const initialState = {
  loading: false,
  data: [],
  error: "",
  response: "",
};

export const fetchGradesData = createAsyncThunk(
  "grade/fetchGradesData",
  async () => {
    const response = await getAllGrades();
    return response.data;
  }
);

export const createNewGrade = createAsyncThunk(
  "grade/createNewGrade",
  async (data) => {
    const response = await postGradeData(data);
    return response.data;
  }
);

export const updateSelectedGrade = createAsyncThunk(
  "grade/updateSelectedGrade",
  async ({ id, data }) => {
    const response = await putGradeData(id, data);
    const responseData = response.data;
    return { id, responseData };
  }
);

export const removeSelectedGrade = createAsyncThunk(
  "grade/removeSelectedGrade",
  async (id) => {
    await deleteGradeData(id);
    return id;
  }
);

const gradeSlice = createSlice({
  name: "grade",
  initialState,
  reducers: {
    cleanAfterSuccessRemoveGrade: (state) => {
      state.response = "200";
    },
  },
  extraReducers: (builder) => {
    // Fetch Data
    builder.addCase(fetchGradesData.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.response = "loading";
    });
    builder.addCase(fetchGradesData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
      state.response = "200";
    });
    builder.addCase(fetchGradesData.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
      state.response = "error";
    });

    // Create Data
    builder.addCase(createNewGrade.pending, (state) => {
      state.loading = true;
      state.response = "loading";
    });
    builder.addCase(createNewGrade.fulfilled, (state, action) => {
      state.loading = false;
      state.data.push(action.payload);
      state.error = "";
      state.response = "201";
    });
    builder.addCase(createNewGrade.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.response = "error";
    });

    // Update Data
    builder.addCase(updateSelectedGrade.pending, (state) => {
      state.loading = true;
      state.response = "loading";
    });
    builder.addCase(updateSelectedGrade.fulfilled, (state, action) => {
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
    builder.addCase(updateSelectedGrade.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.response = "error";
    });

    // Remove Data
    builder.addCase(removeSelectedGrade.pending, (state) => {
      state.loading = true;
      state.response = "loading";
    });
    builder.addCase(removeSelectedGrade.fulfilled, (state, action) => {
      state.loading = false;
      state.data = state.data.filter((item) => item._id !== action.payload);
      state.error = "";
      state.response = "200-d";
    });
    builder.addCase(removeSelectedGrade.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.response = "error";
    });
  },
});

export default gradeSlice.reducer;
export const { cleanAfterSuccessRemoveGrade } = gradeSlice.actions;
