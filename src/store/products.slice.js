import { createSlice } from '@reduxjs/toolkit'
import CartItem from '../models/CartItem'
import { URL_API } from '../utils/firebase'
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
    cart: [],
    favourites: []
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const item = new CartItem(
                action.payload.id,
                action.payload.name,
                action.payload.pricePerItem,
                action.payload.freeShipping,
                action.payload.quantity,
                action.payload.imageUri
            )

            let itemInCart = state.cart.find(el => el.id === action.payload.id)

            if (itemInCart) {
                console.log('QTY', itemInCart.quantity)
                console.log('ACT QTY', item.quantity )
                if (item.amountAvailable >= item.quantity + itemInCart.quantity) itemInCart.quantity =  itemInCart.quantity + item.quantity 
                console.log('NEW', itemInCart.quantity)
                state.cart = state.cart.filter(el => el.id !== itemInCart.id)
            }

            state.cart = [...state.cart, itemInCart]
        },
        deleteCartItem: (state, action) => {
            state.cart = state.cart.filter(el => el.id !== action.payload.id)
        },
        cleanCart: (state, action) => {
            state.cart = []
        },
        addFavourite: (state, action) => {
            state.favourites.push(action.payload.item)
        },
        removeFavourite: (state, action) => {
            state.favourites = state.favourites.filter(el => el.id !== action.payload.id)
        },
        addNewProduct: (state, action) => {
            const newProduct = {
                id: Math.random() * (100 - 21) + 21,
                name: action.payload.name,
                brand: 'Marca',
                category: 'Categoria',
                price: action.payload.price,
                discount: 0,
                sold: 0,
                opinions: 0,
                stars: 0,
                amountAvailable: action.payload.amountAvailable,
                amountAvailable: 1,
                freeShipping: true,
                availableImages: 0,
                availableColors: ['negro'],
                description: action.payload.description,
                imageUri: action.payload.imageUri,
            }

            state.products.push(newProduct)
            state.recommended.unshift(newProduct)
        }
    }
})

export const checkout = (cart, total) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/orders.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    date: Date.now(),
                    items: cart,
                    total
                })
            })

            const result = await response.json()

            console.log('result', result)

            dispatch(
                cleanCart()
            )

        } catch (error) {
            console.log('error', error)
        }
    }
}

export const { addItemToCart, deleteCartItem, cleanCart, addNewProduct, addFavourite, removeFavourite } = productSlice.actions

export default productSlice.reducer