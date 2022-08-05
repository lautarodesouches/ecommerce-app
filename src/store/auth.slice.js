import { createSlice } from '@reduxjs/toolkit'
import { URL_AUTH_SIGN_IN, URL_AUTH_SIGN_UP } from '../utils/firebase'

const initialState = {
    name: null,
    email: null,
    address: null,
    creditCard: null,
    token: null,
    userId: null,
    message: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateAuth: (state, action) => {
            state.name = action.payload.name || state.name
            state.email = action.payload.email || state.email
            state.address = action.payload.address || state.address
            state.creditCard = action.payload.creditCard || state.creditCard
            state.token = action.payload.token || state.token
            state.userId = action.payload.userId || state.userId
            state.message = action.payload.message || state.message
        }
    }
})

export const signUp = (email, password) => {
    return async dispatch => {
        try {
            const response = await fetch(URL_AUTH_SIGN_UP, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                }),
            })

            const result = await response.json()

            dispatch(
                updateAuth({
                    email,
                    userId: result.localId,
                    token: result.idToken,
                    message: result.error?.message
                })
            )

        } catch (error) {
            console.log(error)
        }
    }
}

export const signIn = (email, password) => {
    return async dispatch => {
        try {
            const response = await fetch(URL_AUTH_SIGN_IN, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                }),
            })

            const result = await response.json()

            dispatch(
                updateAuth({
                    email,
                    userId: result.localId,
                    token: result.idToken,
                    message: result.error?.message
                })
            )

        } catch (error) {
            console.log(error)
        }
    }
}

export const { updateAuth } = authSlice.actions

export default authSlice.reducer