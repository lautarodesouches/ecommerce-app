import { StyleSheet } from 'react-native'
import { primaryBg } from '../../constants/colors'

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },
    searchContainer: {
        flexDirection: 'row',
        borderColor: primaryBg,
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    searchInput: {
        flex: .8,
        borderColor: primaryBg,
        borderRightWidth: 1,
        fontSize: 20,
        paddingHorizontal: 10,
        fontFamily: 'LatoRegular',
    },
    searchIcon: {
        flex: .3,
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
        alignSelf: 'center',
        borderRadius: 50,
        paddingHorizontal: 8,
        paddingVertical: 1,
    },
    iconContainer: {
        borderColor: primaryBg,
        borderWidth: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        flex: .1,
    },
})