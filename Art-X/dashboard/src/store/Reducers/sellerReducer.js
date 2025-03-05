import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const get_seller_request = createAsyncThunk(
  "seller/get_seller_request",
  async (
    { perPage, page, searchValue },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const { data } = await api.get(
        `/request-seller-get?page=${page}&&searchValue=${searchValue}&&parPage=${perPage}`,
        { withCredentials: true }
      );
      // console.log(data)
      return fulfillWithValue(data);
    } catch (error) {
      // console.log(error.response.data)
      return rejectWithValue(error.response.data);
    }
  }
);

// End Method

export const sellerReducer = createSlice({
  name: "seller",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    sellers: [],
    totalSeller: 0,
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    // builder
    // .addCase(get_seller.fulfilled, (state, { payload }) => {
    //     state.totalSeller = payload.totalCategory;
    //     state.sellers = payload.categorys;
    // })
  },
});
export const { messageClear } = sellerReducer.actions;
export default sellerReducer.reducer;
