import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    name: null,
    avatar: null,
    status: null,
  },
  reducers: {
    getUser: (state, action) => {
      console.log(action.payload.avatar);
      state.name = action.payload.username;
      if (action.payload.avatar == undefined) {
        state.avatar = 'StandartSvg';
      }
      if (action.payload.status == undefined) {
        state.status = "user";
      }
    },
  },
});

export const { getUser } = UserSlice.actions;
export default UserSlice.reducer;
