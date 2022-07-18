import { Button, Text, View } from 'react-native'
import { CustomButton, Header, PrimaryButton, SecondaryButton } from '../../components'
import { styles } from './styles'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header />
            <CustomButton title='Hello' />
            <PrimaryButton title='Hello' />
            <SecondaryButton title='Hello' />
        </View>
    )
}

export default HomeScreen