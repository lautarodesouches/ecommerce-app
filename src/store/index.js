import { configureStore } from '@reduxjs/toolkit'
import productReducer from './products.slice'
import searchReducer from './search.slice'

export const store = configureStore({
    reducer: {
        product: productReducer,
        search: searchReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
})