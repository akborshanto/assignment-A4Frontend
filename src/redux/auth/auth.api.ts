import { MainbaseApi } from "./mainBaseApi";

const authApi = MainbaseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/login",
        method: "POST",
        body: userInfo,
      }),
    }),

    getUserEmail: builder.query({
      query: (email) => `/user/email/${email}`,
    }),

    getSingleUserId: builder.query({
      query: (id) => `/user/${id}`,
    }),

    getALlUser: builder.query({
      query: () => "/user",
      providesTags: ["User"], // Data caching এর জন্য
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"], // Data update এর জন্য
    }),

    // ✅ Correct placement of updateUser mutation
    updateUser: builder.mutation({
      query: ({ userId, name, photo }) => ({
        url: `/user/${userId}`, // API Endpoint
        method: "PUT",
        body: { name, photo }, // Updated data
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["User"], // Data refresh
    }),
  }),
});

export const {
  useLoginMutation,
  useGetALlUserQuery,
  useGetSingleUserIdQuery,
  useDeleteUserMutation,
  useGetUserEmailQuery,
  useUpdateUserMutation, // ✅ Export the updateUser mutation
} = authApi;
