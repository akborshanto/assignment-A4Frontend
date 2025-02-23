
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
  }),
});

export const { useLoginMutation } = authApi;