import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAccountActive: false,
};
const accountSlice = createSlice({
  name: "Account",
  initialState,
  reducers: {
    toggleAccountOpen: (state) => {
      state.isAccountActive = !state.isAccountActive;
    },
  },
});

export const { toggleAccountOpen } = accountSlice.actions;
export default accountSlice.reducer;
