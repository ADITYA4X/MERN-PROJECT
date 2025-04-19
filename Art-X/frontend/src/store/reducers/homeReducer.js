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
    paintings: [],
    latest_painting: [],
    topRated_painting: [],
    discount_painting: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(get_category.fulfilled, (state, { payload }) => {
        state.categorys = payload.categorys;
      })
      .addCase(get_paintings.fulfilled, (state, { payload }) => {
        state.paintings = payload.paintings;
        state.latest_painting = payload.latest_painting;
        state.topRated_painting = payload.topRated_painting;
        state.discount_painting = payload.discount_painting;
      });
  },
});

export default homeReducer.reducer;
