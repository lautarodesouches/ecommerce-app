import { TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons'
import { secondaryBg } from '../../constants/colors'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeQuery } from '../../store/search.slice'

const Header = ({navigation}) => {

    const [localQuery, setLocalQuery] = useState('')

    const dispatch = useDispatch()

    const goToSearch = () => {
        dispatch(
            changeQuery({query: localQuery})
        )
        navigation.navigate('Search')
    }
    const goToCart = () => navigation.navigate('Cart')

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    value={localQuery}
                    onChangeText={e => setLocalQuery(e)}
                    placeholder='Buscar'
                    onEndEditing={goToSearch}
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