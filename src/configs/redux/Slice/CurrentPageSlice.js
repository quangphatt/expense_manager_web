import { createSlice } from "@reduxjs/toolkit";

const initState = {
  page: 1,
};

export const CurrentPageSlice = createSlice({
  name: "CurrentPage",
  initState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { change } = CurrentPageSlice.actions;

export default CurrentPageSlice.reducer;
