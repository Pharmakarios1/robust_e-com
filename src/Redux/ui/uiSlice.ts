import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSearchBoxActive: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSearchBox: (state) => {
      state.isSearchBoxActive = !state.isSearchBoxActive;
    },
    closeSearchBox: (state) => {
      state.isSearchBoxActive = false;
    },
  },
});

export const { toggleSearchBox, closeSearchBox } = uiSlice.actions;
export default uiSlice.reducer;
