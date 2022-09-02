import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  token: string | null;
}

const initState: UserState = {
  token: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState: initState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.token = null;
    },
  },
});
export const { login, logout } = UserSlice.actions;
export default UserSlice;
