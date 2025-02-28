import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const add_painting = createAsyncThunk(
  "painting/add_painting",
  async (painting, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/painting-add", painting, {
        withCredentials: true,
      });
      // console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      // console.log(error.response.data)
      return rejectWithValue(error.response.data);
    }
  }
);
// End Method

export const get_paintings = createAsyncThunk(
  "painting/get_paintings",
  async (
    { perPage, page, searchValue },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const { data } = await api.get(
        `/paintings-get?page=${page}&&searchValue=${searchValue}&&perPage=${perPage}`,
        { withCredentials: true }
      );
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
  async (paintingId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(`/painting-get/${paintingId}`, {
        withCredentials: true,
      });
      // console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      // console.log(error.response.data)
      return rejectWithValue(error.response.data);
    }
  }
);
// End Method

export const update_painting = createAsyncThunk(
  "painting/update_painting",
  async (painting, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/painting-update", painting, {
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

export const painting_image_update = createAsyncThunk(
  "painting/painting-image-update",
  async (
    { oldImage, newImage, paintingId },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const formData = new FormData();
      formData.append("oldImage", oldImage);
      formData.append("newImage", newImage);
      formData.append("paintingId", paintingId);
      // console.log("Sending request with data:", formData);
      const { data } = await api.post("/painting-image-update", formData, {
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

export const paintingReducer = createSlice({
  name: "painting",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    paintings: [],
    painting: "",
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
      })
      .addCase(get_paintings.fulfilled, (state, { payload }) => {
        state.totalPainting = payload.totalPainting;
        state.paintings = payload.paintings;
      })
      .addCase(get_painting.fulfilled, (state, { payload }) => {
        state.painting = payload.painting;
      })
      .addCase(update_painting.pending, (state, { payload }) => {
        state.loader = true;
      })
      .addCase(update_painting.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error;
      })
      .addCase(update_painting.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.painting = payload.painting;
        state.successMessage = payload.message;
      })
      .addCase(painting_image_update.fulfilled, (state, { payload }) => {
        state.painting = payload.painting;
        state.successMessage = payload.message;
      });
  },
});
export const { messageClear } = paintingReducer.actions;
export default paintingReducer.reducer;
