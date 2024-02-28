import { createSlice } from '@reduxjs/toolkit';

const HomePageVisibility = createSlice({
  name: 'visibilityIndex',
  initialState: {
    visibile: [1,1,1,1,1],
  },
  reducers: {
    visibilityIndexGet: state => {
      state.value += 1;
    },
}
});

export const { visibilityIndex } = HomePageVisibility.actions;
export default HomePageVisibility.reducer;