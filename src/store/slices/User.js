import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    avatar: "",
    status: " ",
  },
  reducers: {
    getUser: (state, action) => {
      console.log(action.payload);
      state.name = action.payload.name;
      state.avatar = action.payload.avatar;
      state.status = action.payload.status;
    },
  },
});

export const { getUser } = UserSlice.actions;
export default UserSlice.reducer;
