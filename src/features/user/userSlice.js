import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { getAllUser } from "apis/user";

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await getAllUser();
  return response.data;
});

const userEntity = createEntityAdapter({
  selectId: (user) => user._id,
});

const userSlice = createSlice({
  name: "user",
  initialState: userEntity.getInitialState({
    loading: "false",
    error: "",
  }),
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      userEntity.setAll(state, action.payload);
      state.loading = false;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const usersSelector = userEntity.getSelectors((state) => state.user);

export default userSlice.reducer;
