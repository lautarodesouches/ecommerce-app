import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    query: ''
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        changeQuery: (state, action) => {
            state.query = action.payload.query
        }
    }
})

export const { changeQuery } = searchSlice.actions

export default searchSlice.reducer