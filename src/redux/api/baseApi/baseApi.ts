// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MainbaseApi } from "../../auth/mainBaseApi";

export const baseApi = MainbaseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get all tasks
    getTasks: builder.query({
      query: () => "/bicycle",
    }),

    // Add a new user
    addUser: builder.mutation({
      query: (userData) => ({
        url: "/user/create-user",
        method: "POST",
        body: userData,
      }),
    }),

    // Search functionality & get bicycles with filters
    getBicycles: builder.query({
      query: (filters) => {
        const queryString = new URLSearchParams(filters).toString();
        return `/bicycle?${queryString}`;
      },
    }),

    // Get single bicycle by ID
    getBicycleById: builder.query({
      query: (id) => `/bicycle/${id}`,
    }),

    // Add a new bicycle
    addBicycle: builder.mutation({
      query: (bicycleData) => ({
        url: "/bicycle/create-bicycle",
        method: "POST",
        body: bicycleData,
      }),
    }),

    // Add an order
    addOrder: builder.mutation({
      query: (orderData) => ({
        url: "/order/create-order",
        method: "POST",
        body: orderData, 
      }),
    }),
  }),
});

// ✅ Redux hooks export
export const {
  useGetTasksQuery,
  useAddUserMutation,
  useGetBicyclesQuery,
  useGetBicycleByIdQuery,
  useAddBicycleMutation,
  useAddOrderMutation,
} = baseApi;
