import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const wsListerner = createApi({
    reducerPath: "wsListerner",//where we keep all our data from the api in the redux store
    baseQuery: fetchBaseQuery({
        baseUrl: "/",
    }),
    endpoints: () => ({})
});
