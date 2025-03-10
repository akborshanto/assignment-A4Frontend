
import { MainbaseApi } from './mainBaseApi';

const authApi = MainbaseApi.injectEndpoints({
  endpoints: (builder) => ({
 
    
    login: builder.mutation({
      query: (userInfo) => (  {
    
        url: '/login',
        method: 'POST',
        body: userInfo,
      }),
    }),
    // Get single bicycle by ID
    // getUserEmail: builder.query({
    //   query: (id) => `/bicycle/${id}`,
    // }),
    getUserEmail: builder.query({
      query: (email) => {
        console.log(email); 
        return `/user/email/${email}`;
      },
    }),
    

    //get single use Id
    getSingleUserId: builder.query({
      query: (id) => `/user/${id}`,
    }),
    //get all user for dashboard
    getALlUser: builder.query({
      query: () => "/user",
      providesTags: ["User"], // Ensure consistency in tag names

    }),
//delte user Id
deleteUser: builder.mutation({
  query: (id) => ({
    url: `/user/${id}`,
    method: "DELETE",
  }),
  invalidatesTags: ["User"], // Ensures data is refreshed after deletion
}),
  }),
});

export const { useLoginMutation ,useGetALlUserQuery,useGetSingleUserIdQuery,useDeleteUserMutation,useGetUserEmailQuery} = authApi;