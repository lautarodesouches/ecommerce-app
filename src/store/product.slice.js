import { createSlice } from '@reduxjs/toolkit'
import { getDataFromTableProducts, GET_OFFERS_QUERY, GET_PRODUCTS_QUERY, GET_RECOMMENDED_QUERY } from '../db'
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
        setArray: (state, action) => {
            state[action.payload.array] = action.payload.value
        },
    }
})

export const loadProducts = () => {
    return async dispatch => {
        try {
            let result = await getDataFromTableProducts(GET_PRODUCTS_QUERY)

            result.rows._array.forEach(product => {
                product.availableColors = JSON.parse(product.availableColors)
            })

            dispatch(
                setArray({
                    array: 'products',
                    value: result.rows._array
                })
            )
        } catch (error) {
            throw error
        }
    }
}

export const loadOffers = () => {
    return async dispatch => {
        try {
            let result = await getDataFromTableProducts(GET_OFFERS_QUERY)

            result.rows._array.forEach(product => {
                product.availableColors = JSON.parse(product.availableColors)
            })

            dispatch(
                setArray({
                    array: 'offers',
                    value: result.rows._array
                })
            )
        } catch (error) {
            throw error
        }
    }
}

export const loadRecommended = () => {
    return async dispatch => {
        try {
            let result = await getDataFromTableProducts(GET_RECOMMENDED_QUERY)

            result.rows._array.forEach(product => {
                product.availableColors = JSON.parse(product.availableColors)
            })

            dispatch(
                setArray({
                    array: 'recommended',
                    value: result.rows._array
                })
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
    setArray,
} = productSlice.actions

export default productSlice.reducer