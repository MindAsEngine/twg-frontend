import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    email: null,
    firstName: null,
    lastName: null,
    patronymic: null,
    phone: null,
    username: null,
    status: null,
  },
  reducers: {
    getUser: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.patronymic = action.payload.patronymic;
      state.phone = action.payload.phone;
      state.avatar = action.payload.avatar;

      if (action.payload.status === undefined) {
        state.status = "user";
      } else {
        state.status = action.payload.status;
      }
    },
  },
});

export const { getUser } = UserSlice.actions;
export default UserSlice.reducer;
