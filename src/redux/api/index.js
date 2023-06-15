import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints 
export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api', 
    prepareHeaders: (headers, { getState }) => {
    
        const token = getState().auth.token
    
        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
          headers.set('authorization', `Bearer ${token}`)
        }
    
        return headers
      }, }),
    endpoints: (builder) => ({
    }),
    
    tagTypes:["User"],
    keepUnusedDataFor: 1
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
