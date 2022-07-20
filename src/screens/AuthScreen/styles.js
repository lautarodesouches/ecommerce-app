import { StyleSheet } from 'react-native'
import { primaryBg, primaryText, themeBg } from '../../constants/colors'

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
})