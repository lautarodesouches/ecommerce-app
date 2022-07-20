import { StyleSheet } from 'react-native'
import { primaryBg, themeBg, primaryText, themeText } from '../../constants/colors'

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: '2.5%',
        backgroundColor: themeBg,
    },
    info: {
        backgroundColor: 'white',
        marginBottom: 30,
        borderRadius: 5,
        borderColor: themeText,
        borderWidth: 1,
        padding: 20,
        alignItems: 'center',
    },
    infoText: {
        fontSize: 20,
        fontFamily: 'LatoRegular',
    },
    formContainer: {
        padding: '2.5%',
        backgroundColor: primaryBg,
        paddingVertical: 20,
        borderRadius: 5,
    },
    title: {
        fontFamily: 'LatoRegular',
        fontSize: 22,
        textAlign: 'center',
        color: primaryText,
        marginBottom: 15,
    },
    buttonContainer: {
        paddingHorizontal: '10%',
        marginTop: 20,
    }
})