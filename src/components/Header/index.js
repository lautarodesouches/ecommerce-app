import { Text, TextInput, View } from 'react-native'
import { styles } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons'
import { secondaryBg } from '../../constants/colors'

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                />
                <Ionicons style={styles.searchIcon} name="search" size={30} color={secondaryBg} />
            </View>
            <View style={styles.cartIconContainer}>
                <Ionicons name="cart" size={30} color={secondaryBg} />
            </View>
        </View>
    )
}

export default Header