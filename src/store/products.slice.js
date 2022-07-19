import { createSlice } from '@reduxjs/toolkit'
import Item from '../models/item'
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
    recommended,
    cart: []
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const item = new Item(
                action.payload.id,
                action.payload.name,
                action.payload.pricePerItem,
                action.payload.freeShipping,
                action.payload.quantity,
            )

            let itemInCart = state.cart.find(el => el.id === action.payload.id)

            if (itemInCart) {
                item.quantity += itemInCart.quantity
                state.cart = state.cart.filter(el => el.id !== itemInCart.id)
            }
            
            state.cart = [...state.cart, item]
        }
    }
})

export const { addItemToCart } = productSlice.actions

export default productSlice.reducer