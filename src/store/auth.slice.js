import { createSlice } from '@reduxjs/toolkit'
import { URL_AUTH_SIGN_UP } from '../utils/firebase'

const initialState = {
    token: null,
    userId: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.userId = action.payload.userId
            state.token = action.payload.token
        },
        logOut: (state, action) => {
            state.userId = null
            state.token = null
        },
        register: (state, action) => {
            state.userId = action.payload.userId
            state.token = action.payload.token
        }
    }
})

export const signUp = (email, password) => {
    return async () => {
        try {
            const response = fetch(URL_AUTH_SIGN_UP, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true,
                }),
            })

            const result = await response.json()

            dispatch(register({
                userId: result.localId,
                token: result.idToken
            }))

        } catch (error) {
            console.log(error)
        }
    }
}

export const { logIn, logOut, register } = authSlice.actions

export default authSlice.reducer