import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import { authApi } from "../api/authApi";

const store = configureStore({
  reducer: {
    user: userSlice,
    [authApi.reducerPath]: authApi.reducer,
  },
  devTools: import.meta.env.MODE !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
