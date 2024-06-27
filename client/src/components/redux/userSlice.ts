import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "User",
  initialState: {
    
    user:
      localStorage.getItem("user") !== null
        ? JSON.parse(localStorage.getItem("user")!)
        : null,
  },
  reducers: {
    activeUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = "null";
    },
  },
});

export const { activeUser } = userSlice.actions;
export default userSlice.reducer;
