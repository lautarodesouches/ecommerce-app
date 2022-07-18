import { TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons'
import { secondaryBg } from '../../constants/colors'
import { useState } from 'react'

const Header = () => {

    const [query, setQuery] = useState('')

    const goToSearch = () => console.log('search')
    const goToCart = () => console.log('cart')

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    value={query}
                    onChangeText={e => setQuery(e)}
                />
                <TouchableOpacity onPress={goToSearch} style={styles.searchIcon}>
                    <Ionicons name="search" size={30} color={secondaryBg} />
                </TouchableOpacity>
            </View>
            <View style={styles.cartIconContainer}>
                <TouchableOpacity onPress={goToCart}>
                    <Ionicons name="cart" size={30} color={secondaryBg} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header