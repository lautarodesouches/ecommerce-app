import { Button, Text, View } from 'react-native'
import { styles } from './styles'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title='Detalle' onPress={() => navigation.navigate('ProductDetail')} />
        </View>
    )
}

export default HomeScreen