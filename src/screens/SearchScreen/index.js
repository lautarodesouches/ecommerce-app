import { Text, View } from 'react-native'
import { styles } from './styles'
import { useSelector } from 'react-redux'

const SearchScreen = () => {

    const query = useSelector(state => state.search.query)

    return (
        <View style={styles.container}>
            <Text>SearchScreen</Text>
        </View>
    )
}

export default SearchScreen