
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
    getUserEmail: builder.query({
      query: (id) => `/bicycle/${id}`,
    }),
    //get all user for dashboard
    getALlUser: builder.query({
      query: () => "/user",
    }),

  }),
});

export const { useLoginMutation ,useGetALlUserQuery} = authApi;