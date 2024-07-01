import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme:
      localStorage.getItem("theme") !== null
        ? localStorage.getItem("theme")
        : null,
  },
  reducers: {
    activeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { activeTheme } = themeSlice.actions;
export default themeSlice.reducer;
