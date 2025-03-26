import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import rentalService from "./rentalService";

const rentalSlice = createSlice({
  name: "rental",
  initialState: {
    rentals: [],
    rental: {},
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRentals.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getRentals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.rentals = action.payload;
        state.isError = false;
      })
      .addCase(getRentals.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default rentalSlice.reducer;

// GET Rentals
export const getRentals = createAsyncThunk(
  "FETCH/RENTALS",
  async (_, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token;
    try {
      return await rentalService.fetchRentals(token);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
