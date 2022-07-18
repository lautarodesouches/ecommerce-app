import { StyleSheet } from 'react-native'
import { themeBg, themeText } from '../../constants/colors'

export const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themeText,
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 7,
        marginVertical: 5,
        // Shadow
        shadowColor: themeText,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    text: {
        color: themeBg,
        fontSize: 16,
    }
})