import { StyleSheet } from 'react-native'
import { primaryBg, themeBg, themeText } from '../../constants/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeBg,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 20,
        color: themeText,
    },
    item: {
        backgroundColor: 'white',
        marginHorizontal: '5%',
        marginVertical: 10,
        borderRadius: 5,
        padding: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    itemSection: {
        flex: 1,
        padding: 2,
        width: '100%',
        marginVertical: 5,
    },
    image: {
        flex: 1,
        width: '100%',
        height: 100,
        resizeMode: 'contain'
    },
    itemTitle: {
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'LatoRegular',
    },
    itemText: {
        fontSize: 16,
        textAlign: 'center',
    },
    itemSubTotal: {
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'LatoBold',
    },
    totalContainer: {
        borderColor: primaryBg,
        borderTopWidth: 1,
        alignSelf: 'center',
        width: '80%'
    },
    total: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 5,
    },
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyText: {
        fontSize: 20,
        marginBottom: 20
    }
})