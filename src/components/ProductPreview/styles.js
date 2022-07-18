import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        height: 150,
        width: '100%',
    },
    favourite: {
        position: 'absolute',
        top: 5,
        right: 5,
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    info: {
        marginTop: 15,
    },
    oldPrice: {
        fontSize: 16,
        textDecorationLine: 'line-through',
        textAlign: 'center',
    },
    newPrice: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginTop: 5,
    },
    price: {
        fontSize: 20,
    },
    discount: {
        fontSize: 18,
        marginLeft: 10,
        color: 'green'
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
    },
    freeShipping: {
        fontSize: 16,
        textAlign: 'center',
        color: 'green',
        marginTop: 10,
    }
})