import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons'
import { secondaryBg } from '../../constants/colors'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeQuery } from '../../store/search.slice'
import { useEffect } from 'react'

const Header = ({ navigation }) => {

    const dispatch = useDispatch()

    const [localQuery, setLocalQuery] = useState('')
    const [cartLength, setCartLength] = useState(0)

    const cart = useSelector(state => state.product.cart)

    useEffect(() => {
        setCartLength(cart.length)
    }, [cart])

    const goToSearch = () => {
        dispatch(
            changeQuery({ query: localQuery })
        )
        navigation.navigate('Search')
    }

    const navigate = screen => navigation.navigate(screen)

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
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => navigate('Orders')}>
                    <Ionicons name="file-tray-full" size={30} color={secondaryBg} />
                </TouchableOpacity>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => navigate('Favourites')}>
                    <Ionicons name="heart" size={30} color={secondaryBg} />
                </TouchableOpacity>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => navigate('AddProduct')}>
                    <Ionicons name="add" size={30} color={secondaryBg} />
                </TouchableOpacity>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => navigate('Cart')}>
                    <Ionicons name="cart" size={30} color={secondaryBg} />
                    {
                        cartLength > 0 && (
                            <Text style={styles.searchQty}>{cartLength}</Text>
                        )
                    }
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header