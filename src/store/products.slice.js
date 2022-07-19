import { createSlice } from '@reduxjs/toolkit'
import { shuffle } from '../utils/functions'
import { products } from '../utils/products'

// Offers
let offers = shuffle(
    [...products.filter(e => e.discount > 0)]
)
// Limit 4
offers.length = 4
// Recommended
let recommended = shuffle(
    [...products.sort((a, b) => b.amountAvailable - a.amountAvailable)]
)
// Limit 4
recommended.length = 4


const initialState = {
    products,
    offers,
    recommended
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        /* addPlace: (state, action) => {

            const newPlace = new Place(
                action.payload.id,
                action.payload.title,
                action.payload.image,
                action.payload.address,
                action.payload.coords
            )

            state.places.push(newPlace)

        } */
    }
})

export default productSlice.reducer