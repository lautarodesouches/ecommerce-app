import { View } from 'react-native'
import { Header } from '../../components'
import { styles } from './styles'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header />
        </View>
    )
}

export default HomeScreen