import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 18,
        fontFamily: 'LatoRegular',
        textAlign: 'center',
        marginBottom: 20,
    },
    contentContainer: {
        padding: '5%',
        flexGrow: 1,
    },
})