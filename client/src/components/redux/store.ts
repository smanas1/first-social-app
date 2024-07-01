import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import { authApi } from "../api/authApi";
import themeSlice from "./themeSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    theme: themeSlice,
    [authApi.reducerPath]: authApi.reducer,
  },
  devTools: import.meta.env.MODE !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
