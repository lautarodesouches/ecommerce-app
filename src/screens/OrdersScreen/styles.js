import { StyleSheet } from 'react-native'
import { primaryBg, primaryText, themeBg } from '../../constants/colors'

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: themeBg,        
    },
    orderContainer: {
        backgroundColor: primaryBg,
        padding: 20,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    orderText: {
        color: primaryText,
        fontSize: 18,
        fontFamily: 'LatoRegular'
    },
    contentContainer: {
        flexGrow: 1,
        paddingHorizontal: '2.5%',
    }
})