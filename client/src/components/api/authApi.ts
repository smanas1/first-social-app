import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
  }),
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (body) => ({
        url: "/api/v1/auth/register",
        method: "POST",
        body,
      }),
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: "/api/v1/auth/login",
        method: "POST",
        body,
      }),
    }),
    emailVerify: builder.mutation({
      query: ({ token }) => ({
        url: "/api/v1/auth/emailverify",
        method: "POST",
        body: { token },
      }),
    }),
  }),
});

export const {
  useAddUserMutation,
  useLoginUserMutation,
  useEmailVerifyMutation,
} = authApi;
