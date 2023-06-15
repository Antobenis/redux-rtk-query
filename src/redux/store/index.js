import { configureStore } from '@reduxjs/toolkit'
import { pokemonApi } from "../api/index"

export const store = configureStore({
    reducer: {
        // api All reduser is store in here
        "pokemonApi": pokemonApi.reducer
    },
    // this is store all data in cache in browser
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
})