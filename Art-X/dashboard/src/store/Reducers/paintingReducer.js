import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const add_painting = createAsyncThunk(
  "painting/add_painting",
  async (painting, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/painting-add", painting, {
        withCredentials: true,
      });
      console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      // console.log(error.response.data)
      return rejectWithValue(error.response.data);
    }
  }
);
// End Method

export const get_painting = createAsyncThunk(
  "painting/get_painting",
  async (
    { parPage, page, searchValue },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const { data } = await api.get(
        `/painting-get?page=${page}&&searchValue=${searchValue}&&parPage=${parPage}`,
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

export const paintingReducer = createSlice({
  name: "painting",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    paintings: [],
    totalPainting: 0,
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(add_painting.pending, (state, { payload }) => {
        state.loader = true;
      })
      .addCase(add_painting.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error;
      })
      .addCase(add_painting.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
        state.paintings = [...state.paintings, payload.painting];
      })
      .addCase(get_painting.fulfilled, (state, { payload }) => {
        state.totalPainting = payload.totalPainting;
        state.paintings = payload.paintings;
      });
  },
});
export const { messageClear } = paintingReducer.actions;
export default paintingReducer.reducer;
