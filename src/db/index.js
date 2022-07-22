import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('products.db')

const TABLE_PRODUCTS = 'products'
const PRODUCTS_COL = {
    ID: 'id',
    NAME: 'name',
    BRAND: 'brand',
    CATEGORY: 'category',
    PRICE: 'price',
    DISCOUNT: 'discount',
    SOLD: 'sold',
    OPINIONS: 'opinions',
    STARS: 'stars',
    AMOUNT_AVAILABLE: 'amountAvailable',
    FREE_SHIPPING: 'freeShipping',
    AVAILABLE_IMAGES: 'availableImages',
    AVAILABLE_COLORS: 'availableColors',
    DESCRIPTION: 'description'
}

export const GET_OFFERS_QUERY = `* FROM ${TABLE_PRODUCTS} ORDER BY ${PRODUCTS_COL.DISCOUNT} DESC LIMIT 4`
export const GET_RECOMMENDED_QUERY = `* FROM ${TABLE_PRODUCTS} ORDER BY ${PRODUCTS_COL.SOLD} DESC LIMIT 4`
export const GET_PRODUCTS_QUERY = `* FROM ${TABLE_PRODUCTS}`

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS ${TABLE_PRODUCTS}(${PRODUCTS_COL.ID} INTEGER PRIMARY KEY NOT NULL, ${PRODUCTS_COL.NAME} TEXT NOT NULL, ${PRODUCTS_COL.BRAND} TEXT NOT NULL, ${PRODUCTS_COL.CATEGORY} TEXT NOT NULL, ${PRODUCTS_COL.PRICE} INTEGER NOT NULL, ${PRODUCTS_COL.DISCOUNT} INTEGER NOT NULL, ${PRODUCTS_COL.SOLD} INTEGER NOT NULL, ${PRODUCTS_COL.OPINIONS} INTEGER NOT NULL, ${PRODUCTS_COL.STARS} INTEGER NOT NULL, ${PRODUCTS_COL.AMOUNT_AVAILABLE} INTEGER NOT NULL, ${PRODUCTS_COL.FREE_SHIPPING} INTEGER NOT NULL, ${PRODUCTS_COL.AVAILABLE_IMAGES} INTEGER NOT NULL, ${PRODUCTS_COL.AVAILABLE_COLORS} TEXT NOT NULL, ${PRODUCTS_COL.DESCRIPTION} TEXT NOT NULL)`,
                [],
                () => resolve(),
                (_, error) => reject(error)
            )
        })
    })
    return promise
}

export const insertProduct = (id, name, brand, category, price, discount, sold, opinions, stars, amountAvailable, freeShipping, availableImages, availableColors, description) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `INSERT INTO ${TABLE_PRODUCTS} (id, name, brand, category, price, discount, sold, opinions, stars, amountAvailable, freeShipping, availableImages, availableColors, description) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [id, name, brand, category, price, discount, sold, opinions, stars, amountAvailable, freeShipping, availableImages, JSON.stringify(availableColors), description],
                (_, result) => resolve(_, result),
                (_, error) => reject(error)
            )
        })
    })
    return promise
}

export const getDataFromTableProducts = (query) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `SELECT ${query}`,
                [],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })
    return promise
}

export const dropTable = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `DROP TABLE ${TABLE_PRODUCTS}`,
                [],
                () => resolve(),
                (_, error) => reject(error)
            )
        })
    })
    return promise
}