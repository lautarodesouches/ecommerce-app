import { createSlice } from '@reduxjs/toolkit'
import { getAllProducts, getOffers, getRecommended } from '../db'
import CartItem from '../models/CartItem'
import { URL_API } from '../utils/firebase'

const initialState = {
    products: [],
    offers: [],
    recommended: [],
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

            if (itemInCart) state.cart = state.cart.filter(el => el.id !== itemInCart.id)

            state.cart = [...state.cart, item]
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
                id: new Date().valueOf(),
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
        },
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setOffers: (state, action) => {
            state.offers = action.payload
        },
        setRecommended: (state, action) => {
            state.recommended = action.payload
        }
    }
})

export const loadProducts = () => {
    return async dispatch => {
        try {
            let result = await getAllProducts()

            for (let i = 0; i < result.rows._array.length; i++) {
                result.rows._array[i].availableColors = JSON.parse(result.rows._array[i].availableColors)
            }

            dispatch(
                setProducts(result.rows._array)
            )
        } catch (error) {
            throw error
        }
    }
}

export const loadOffers = () => {
    return async dispatch => {
        try {
            let result = await getOffers()

            for (let i = 0; i < result.rows._array.length; i++) {
                result.rows._array[i].availableColors = JSON.parse(result.rows._array[i].availableColors)
            }

            dispatch(
                setOffers(result.rows._array)
            )
        } catch (error) {
            throw error
        }
    }
}

export const loadRecommended = () => {
    return async dispatch => {
        try {
            let result = await getRecommended()

            for (let i = 0; i < result.rows._array.length; i++) {
                result.rows._array[i].availableColors = JSON.parse(result.rows._array[i].availableColors)
            }

            dispatch(
                setRecommended(result.rows._array)
            )
        } catch (error) {
            throw error
        }
    }
}

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

export const {
    addItemToCart,
    deleteCartItem,
    cleanCart,
    addFavourite,
    removeFavourite,
    addNewProduct,
    setProducts,
    setOffers,
    setRecommended
} = productSlice.actions

export default productSlice.reducer