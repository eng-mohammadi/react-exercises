import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:3032";

// One API slice for the whole json-server; each file in this folder injects its own endpoints
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Students", "Professors", "Courses", "SelectUnits"],
  endpoints: () => ({}),
});
