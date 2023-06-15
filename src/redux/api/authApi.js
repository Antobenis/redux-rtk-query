import { pokemonApi } from "./index";


export const authApi = pokemonApi.injectEndpoints({
    //builder is like axios 
    endpoints: (builder) => (
        {
            getPokemonByName: builder.query({
                query: (name) => `/users`,
                providesTags: ["User"]
            }),
            getUpdate: builder.mutation({
                query: (data) => (
                    {
                        url: "/login",
                        method: 'POST',
                        // headers: "",
                        body: data,
                        // responseHandler: () => {
                            
                        // }
                    }
                ),
                invalidatesTags:["User"]
            })

        }
    )

})

export const { useGetPokemonByNameQuery , useGetUpdateMutation } = authApi
