import { StyleSheet } from 'react-native'
import { secondaryBg } from '../../constants/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        margin: 10,
        paddingVertical: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: secondaryBg,
        borderWidth: 1,
    },
    product: {
        flex: 1,
        width: '100%',
    },
    favourite: {
        position: 'absolute',
        top: 5,
        right: 5,
        zIndex: 99,
    },
    imageContainer: {
        height: 150,
        width: '100%',
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
        fontFamily: 'LatoRegular',
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
        fontFamily: 'LatoRegular',
    },
    discount: {
        fontSize: 18,
        marginLeft: 10,
        fontFamily: 'LatoRegular',
        color: 'green',
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
        fontFamily: 'LatoRegular',
    },
    freeShipping: {
        fontSize: 16,
        textAlign: 'center',
        color: 'green',
        marginTop: 10,
        fontFamily: 'LatoBold',
    }
})