import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    value: null,
  },
  reducers: {
    changeToken: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeToken } = tokenSlice.actions;
export default tokenSlice.reducer;