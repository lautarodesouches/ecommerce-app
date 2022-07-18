import { StyleSheet } from 'react-native'
import { themeBg } from '../../constants/colors'

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: themeBg,
    },
    sectionTitle: {
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 15,
    },
    sectionList: {
        flex: 1,
    }
})