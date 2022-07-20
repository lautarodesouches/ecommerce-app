import { StyleSheet } from 'react-native'
import { primaryBg, primaryText, themeBg, themeText } from '../../constants/colors'

export const styles = StyleSheet.create({
    keyboard: {
        flexGrow: 1,
        padding: '2.5%',
        backgroundColor: themeBg,
        justifyContent: 'center',
    },
    formContainer: {
        padding: '2.5%',
        backgroundColor: primaryBg,
        paddingVertical: 20,
        borderRadius: 5,
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        color: primaryText,
        marginBottom: 15,
    },
    buttonContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    messageContainer: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'center'
    },
    message: {
        fontSize: 18,
        fontFamily: 'LatoRegular'
    },
    messageButtonContainer: {
        marginLeft: 5,
    },
    messageButton: {
        fontSize: 18,
        color: primaryBg,
        fontFamily: 'LatoBold',
    },
    error: {
        marginTop: 30,
        textAlign: 'center',
        fontSize: 20,
        color: themeText,
    },
})