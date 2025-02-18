import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }), 
  endpoints: (builder) => ({

    //get request
    getTasks: builder.query({
      query: () => "/bicycle", 
    }),
//post requers
createBicycle: builder.mutation({
    query: (newBicycle) => ({
      url: "/bicycle/create-bicycle",          // আপনার API Endpoint
      method: "POST",           // HTTP Method
      body: newBicycle,        // যেটি আপনি পাঠাতে চান (POST Data)
    }),
  }),

  }),
});

// ✅ Redux hook export করা
export const { useGetTasksQuery, useAddBicycleMutation } = baseApi;
