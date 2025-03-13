import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const MainbaseApi = createApi({
  reducerPath: 'baseapi',
  baseQuery: fetchBaseQuery({
  //baseUrl: 'https://backhanda4.vercel.app/api',
     baseUrl: 'http://localhost:5000/api',
  credentials: 'include',
  }),

  endpoints: () => ({}),
});