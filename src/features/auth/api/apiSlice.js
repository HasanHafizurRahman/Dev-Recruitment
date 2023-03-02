import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jobbox-server-five.vercel.app",
    // https://jobbox-server-five.vercel.app
  }),
  tagTypes: ["Jobs"],
  endpoints: (builder) => ({}),
});

export default apiSlice;
