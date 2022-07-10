import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../axios'

export const fetchAuth = createAsyncThunk(
  "auth/fetchuserData",
  async (params) => {
    const { data } = await axios.post("/auth/login", params);
    return data;
  }
);

const initialState = {
  data: null,
  status: "loading",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [fetchAuth.pending]: (state) => {
      state.status = "loading";
      state.dara = null; 
    },
    [fetchAuth.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchAuth.rejected]: (state) => {
      state.status = "errors";
      state.data = null;
    },
  },
});

export const selectIsAuth = state => state.auth.data

export const authReducer = authSlice.reducer