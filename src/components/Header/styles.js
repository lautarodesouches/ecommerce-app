import { StyleSheet } from 'react-native'
import { secondaryBg } from '../../constants/colors'

export const styles = StyleSheet.create({
    container: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },
    searchContainer: {
        flexDirection: 'row',
        borderColor: secondaryBg,
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 5,
        flex: .7,
    },
    searchInput: {
        flex: .85,
        borderColor: secondaryBg,
        borderRightWidth: 1,
        fontSize: 20,
        paddingHorizontal: 10,
        fontFamily: 'LatoRegular',
    },
    searchIcon: {
        flex: .15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchQty: {
        position: 'absolute',
        top: -15,
        right: -15,
        fontSize: 16,
        backgroundColor: 'crimson',
        color: 'white',
        alignSelf:'center',
        borderRadius: 50,
        paddingHorizontal: 8,
        paddingVertical: 1,
    },
    cartIconContainer: {
        borderColor: secondaryBg,
        borderWidth: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        flex: .1,
    },
    addProduct: {
        borderColor: secondaryBg,
        borderWidth: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        flex: .1,
    },
})