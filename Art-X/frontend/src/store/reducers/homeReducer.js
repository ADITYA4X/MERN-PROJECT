import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const get_category = createAsyncThunk(
  "painting/get_category",
  async (_, { fulfillWithValue }) => {
    try {
      const { data } = await api.get("/home/get-categorys");
      console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response);
    }
  }
);
// End Method

export const get_paintings = createAsyncThunk(
  "painting/get_paintings",
  async (_, { fulfillWithValue }) => {
    try {
      const { data } = await api.get("/home/get-paintings");
      console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.respone);
    }
  }
);
// End Method

export const homeReducer = createSlice({
  name: "home",
  initialState: {
    categorys: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(get_category.fulfilled, (state, { payload }) => {
      state.categorys = payload.categorys;
    });
  },
});

export default homeReducer.reducer;
