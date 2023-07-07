import { createSlice } from "@reduxjs/toolkit";

export const favouriteSlice = createSlice({
  name: 'favourite',
  initialState: {
    favouriteItems: [],
  },
  reducers: {
    addtofavourites: (state, action) => {
      const item = state.favouriteItems.find((p) => p.id === action.payload.id)
      state.favouriteItems.push({ ...action.payload});
    },
    removeFromFavourite: (state, action) => {
      state.favouriteItems = state.favouriteItems.filter((p) => p.id !== action.payload.id)
    },
  },
});

export const { addtofavourites, removeFromFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;
