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

export const price_range_painting = createAsyncThunk(
  "painting/price_range_painting",
  async (_, { fulfillWithValue }) => {
    try {
      const { data } = await api.get("/home/price-range-latest-painting");
      console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.respone);
    }
  }
);
// End Method

export const query_paintings = createAsyncThunk(
  "painting/query_paintings",
  async (query, { fulfillWithValue }) => {
    try {
      const { data } = await api.get(
        `/home/query-paintings?category=${query.category}&&rating=${
          query.rating
        }&&lowPrice=${query.low}&&highPrice=${query.high}&&sortPrice=${
          query.sortPrice
        }&&pageNumber=${query.pageNumber}&&searchValue=${
          query.searchValue ? query.searchValue : ""
        } `
      );
      //  console.log(data)
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
    totalPainting: 0,
    perPage: 3,
    latest_painting: [],
    topRated_painting: [],
    discount_painting: [],
    priceRange: {
      low: 0,
      high: 100,
    },
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
      })
      .addCase(price_range_painting.fulfilled, (state, { payload }) => {
        state.latest_painting = payload.latest_painting;
        state.priceRange = payload.priceRange;
      })
      .addCase(query_paintings.fulfilled, (state, { payload }) => {
        state.paintings = payload.paintings;
        state.totalPainting = payload.totalPainting;
        state.perPage = payload.perPage;
      });
  },
});

export default homeReducer.reducer;
