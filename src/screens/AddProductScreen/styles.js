import { StyleSheet } from 'react-native'
import { themeBg, themeText } from '../../constants/colors'

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: '5%',
        backgroundColor: themeBg,
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        width: '100%',
        backgroundColor: 'white',
        fontSize: 16,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 30,
        fontFamily: 'LatoRegular',
        color: themeText,
    },
    text: {
        marginBottom: 10,
        fontSize: 18,
        color: themeText,
    },
    inputContainer: {
        marginVertical: 15,
    },
    imageContainer: {
        backgroundColor: 'white',
        height: 200,
        borderWidth: 1,
        borderColor: themeText,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    sumbitButtonContainer: {
        marginTop: 10,
        marginBottom: 30,
    }
})