import { createSlice } from "@reduxjs/toolkit";

const mapPanelSlice = createSlice({
  name: "counter",
  initialState: {
    value: "turism",
  },
  reducers: {
    changeMapFromPanel: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeMapFromPanel } = mapPanelSlice.actions;
export default mapPanelSlice.reducer;
