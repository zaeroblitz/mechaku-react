import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setSignIn } from "apis/user";

let initialState = {
  loading: false,
  isLogin: false,
  token: "",
  user: {},
  error: "",
};

const uglyToken = Cookies.get("token");
if (uglyToken) {
  const token = atob(uglyToken);
  const jwtToken = jwtDecode(token);
  const user = jwtToken.user;
  initialState = {
    loading: false,
    isLogin: true,
    token,
    user: user,
    error: "",
  };
}

export const fetchUser = createAsyncThunk("user/signIn", async (data) => {
  const response = await setSignIn(data);
  return response.data.token;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    cleanedUp: (state) => {
      Cookies.remove("token");
      state.loading = false;
      state.isLogin = false;
      state.token = "";
      state.user = {};
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      const token = action.payload;

      if (token) {
        const jwtToken = jwtDecode(token);
        const user = jwtToken.user;

        state.loading = false;
        state.isLogin = true;
        state.token = token;
        state.user = user;

        const uglyToken = btoa(token);
        Cookies.set("token", uglyToken);
      }
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
export const { cleanedUp } = userSlice.actions;
