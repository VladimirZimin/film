import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movieSlice",
  initialState: {
    query: "",
    search: false,
  },
  reducers: {
    getQuery(state, action) {
      state.query = action.payload;
    },

    getSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const { getQuery, getSearch } = movieSlice.actions;
