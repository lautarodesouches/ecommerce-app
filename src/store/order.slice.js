import { createSlice } from '@reduxjs/toolkit'
import { URL_API } from '../utils/firebase'

const initialState = {
    orders: null,
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        updateOrders: (state, action) => {
            state.orders = action.payload.orders
        }
    }
})

export const getOrders = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/orders.json`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const result = await response.json()

            const orders = Object.keys(result).map(key => ({
                ...result[key],
                id: key
            }))

            dispatch(
                updateOrders({
                    orders
                })
            )

        } catch (error) {
            console.log(error)
        }
    }
}

export const { updateOrders } = orderSlice.actions

export default orderSlice.reducer