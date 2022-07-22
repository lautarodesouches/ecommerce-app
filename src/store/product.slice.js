import { createSlice } from '@reduxjs/toolkit'
import { getDataFromTableProducts, GET_LATEST_QUERY, GET_OFFERS_QUERY, GET_PRODUCTS_QUERY, GET_RECOMMENDED_QUERY, insertProduct, updateStockTableProducts } from '../db'
import CartItem from '../models/CartItem'
import * as FileSystem from 'expo-file-system'
import { URL_API } from '../utils/firebase'

const initialState = {
    products: [],
    latest: [],
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
        addProduct: (state, action) => {
            state.products.push(action.payload)
        },
        setArray: (state, action) => {
            state[action.payload.array] = action.payload.value
        },
    }
})

export const loadDataFromTableProducts = (dataType) => {
    return async dispatch => {
        try {

            let query = GET_PRODUCTS_QUERY

            switch (dataType) {
                case 'latest':
                    query = GET_LATEST_QUERY
                    break;
                case 'offers':
                    query = GET_OFFERS_QUERY
                    break;
                case 'recommended':
                    query = GET_RECOMMENDED_QUERY
                    break;
            }

            let result = await getDataFromTableProducts(query)

            result.rows._array.forEach(product => {
                product.availableColors = JSON.parse(product.availableColors)
            })

            dispatch(
                setArray({
                    array: dataType,
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

            console.log('Checkout/Firebase: ', result)

            cart.forEach(product => {
                updateStockTableProducts(
                    product.quantity,
                    product.id
                )
            })

            dispatch(
                loadDataFromTableProducts('products')
            )

            dispatch(
                cleanCart()
            )

        } catch (error) {
            console.log('error', error)
        }
    }
}

export const createProduct = (name, price, amountAvailable, description, image) => {
    return async dispatch => {

        const fileName = image.split('/').pop()
        const path = FileSystem.documentDirectory + fileName

        try {

            await FileSystem.moveAsync({
                from: image,
                to: path
            })

        } catch (error) {
            console.log('error', error)
        }

        const newProduct = {
            id: new Date().valueOf(),
            name,
            brand: 'Marca',
            category: 'Categoria',
            price,
            discount: 0,
            sold: 0,
            opinions: 0,
            stars: 0,
            amountAvailable,
            amountAvailable: 1,
            freeShipping: true,
            availableImages: 0,
            availableColors: ['negro'],
            description,
            imageUri: path,
        }

        insertProduct(newProduct)

        dispatch(
            addProduct(newProduct)
        )
    }
}

export const {
    addItemToCart,
    deleteCartItem,
    cleanCart,
    addFavourite,
    removeFavourite,
    addProduct,
    setArray,
} = productSlice.actions

export default productSlice.reducer