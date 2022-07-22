import { configureStore } from '@reduxjs/toolkit'
import productReducer from './product.slice'
import searchReducer from './search.slice'
import authReducer from './auth.slice'
import orderReducer from './order.slice'

export const store = configureStore({
    reducer: {
        product: productReducer,
        search: searchReducer,
        auth: authReducer,
        order: orderReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
})