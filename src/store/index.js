import { configureStore } from '@reduxjs/toolkit'
import productReducer from './products.slice'

export const store = configureStore({
    reducer: {
        product: productReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
})