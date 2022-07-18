import { StyleSheet } from 'react-native'
import { secondaryBg } from '../../constants/colors'

export const styles = StyleSheet.create({
    container: {
        margin: 10,
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
        flex: .8,
    },
    searchInput: {
        flex: .85,
        borderColor: secondaryBg,
        borderRightWidth: 1,
        fontSize: 20,
        paddingHorizontal: 10
    },
    searchIcon: {
        flex: .15,
        textAlign: 'center'
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
})