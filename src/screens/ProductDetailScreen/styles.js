import { StyleSheet } from 'react-native'
import { themeBg } from '../../constants/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeBg,
    },
    product: {
        backgroundColor: 'white',
        margin: '2.5%',
        borderRadius: 5,
        padding: '2.5%',
    },
    categoryBrand: {
        flexDirection: 'row',
    },
    categoryBrandText: {
        fontSize: 14,
        marginLeft: 5
    },
    images: {
        height: 350,
        width: '100%',
        flexDirection: 'row',
    },
    mainImageContainer: {
        flex: .75,
    },
    flatListContainer: {
        flex: .25,
    },
    mainImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    thumnailImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    thumnailTouchable: {
        width: 60,
        height: 60,
        margin: 10,
        borderRadius: 1.5,
        borderColor: themeBg,
        borderWidth: 1,
        padding: 2,
    },
    flatList: {
        flexDirection: 'column',
        flex: 1,
        height: '100%',
        width: '100%',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        fontFamily: 'LatoRegular'
    },
    priceContainer: {
        marginTop: 10,
        alignItems: 'center'
    },
    price: {
        fontSize: 18,
    },
    newPriceContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    newPrice: {
        fontSize: 22,
        fontFamily: 'LatoRegular'
    },
    discount: {
        fontSize: 18,
        marginLeft: 5,
        color: 'green',
        fontFamily: 'LatoRegular'
    },
    description: {
        fontSize: 16,
        textAlign: 'justify',
        marginTop: 20
    },
    stats: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    statText: {
        fontSize: 18
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 20,
    },
    selectedQuantity: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
    },
    amountAvailable: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
    },
    actionButtons: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    freeShipping: {
        marginTop: 15,
        color: 'green',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'LatoBold',
    },
})