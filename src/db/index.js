import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('products.db')

const productsTable = 'products'

// id, name, brand, category, price, discount, sold, opinions, stars, amountAvailable, freeShipping, availableImages, availableColors, description
// Length = 14

export const dropTable = () => {

    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `DROP TABLE ${productsTable}`,
                [],
                () => resolve(),
                (_, error) => reject(error)
            )
        })
    })

    return promise

}

export const init = () => {

    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS ${productsTable}(id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, brand TEXT NOT NULL, category TEXT NOT NULL, price INTEGER NOT NULL, discount INTEGER NOT NULL, sold INTEGER NOT NULL, opinions INTEGER NOT NULL, stars INTEGER NOT NULL, amountAvailable INTEGER NOT NULL, freeShipping INTEGER NOT NULL, availableImages INTEGER NOT NULL, availableColors TEXT NOT NULL, description TEXT NOT NULL)`,
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
                `INSERT INTO ${productsTable} (id, name, brand, category, price, discount, sold, opinions, stars, amountAvailable, freeShipping, availableImages, availableColors, description) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [id, name, brand, category, price, discount, sold, opinions, stars, amountAvailable, freeShipping, availableImages, JSON.stringify(availableColors), description],
                (_, result) => resolve(_, result),
                (_, error) => reject(error)
            )
        })
    })

    return promise

}

export const getAllProducts = () => {

    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `SELECT * FROM ${productsTable}`,
                [],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })

    return promise

}

export const getOffers = () => {

    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `SELECT * FROM ${productsTable} ORDER BY discount DESC LIMIT 4`,
                [],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })

    return promise

}

export const getRecommended = () => {

    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `SELECT * FROM ${productsTable} ORDER BY amountAvailable ASC LIMIT 4`,
                [],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })

    return promise

}