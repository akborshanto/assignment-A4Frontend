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
AddUser: builder.mutation({
    query: (newBicycle) => (console.log(newBicycle),{
       
      url: "/user/create-user",          // আপনার API Endpoint
      method: "POST",          
      body: newBicycle,      
    }),
  }),

//search funtionality and bicycle

getBicycles:builder.query({
  query: (filters) => {
    const queryString = new URLSearchParams(filters).toString();
    return `bicycle?${queryString}`;
  },
}),
//get single bicycle
getBicycleById: builder.query({
  query: (id) => `/bicycle/${id}`,
}),



  }),
});

// ✅ Redux hook export করা
export const { useGetTasksQuery, useAddUserMutation,useGetBicyclesQuery,useGetBicycleByIdQuery } = baseApi;
