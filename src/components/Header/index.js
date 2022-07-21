import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons'
import { primaryBg } from '../../constants/colors'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeQuery } from '../../store/search.slice'
import { useEffect } from 'react'

const Header = ({ navigation }) => {
    
    const dispatch = useDispatch()

    const cart = useSelector(state => state.product.cart)
    const query = useSelector(state => state.search.query)

    const [localQuery, setLocalQuery] = useState(query)
    const [cartLength, setCartLength] = useState(0)
    const [displayIcon, setDisplayIcon] = useState(true)


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

    const handleSearchFocus = () => {
        setDisplayIcon(!displayIcon)
    }

    return (
        <View style={styles.container}>
            <View style={[styles.searchContainer, { flex: displayIcon ? .5 : 1 }]}>
                <TextInput
                    style={styles.searchInput}
                    value={localQuery}
                    onChangeText={e => setLocalQuery(e)}
                    placeholder='Buscar'
                    onEndEditing={goToSearch}
                    onFocus={handleSearchFocus}
                    onBlur={handleSearchFocus}
                />
                <TouchableOpacity onPress={goToSearch} style={styles.searchIcon}>
                    <Ionicons name="search" size={30} color={primaryBg} />
                </TouchableOpacity>
            </View>
            <View style={[styles.iconContainer, { display: displayIcon ? 'flex' : 'none' }]}>
                <TouchableOpacity onPress={() => navigate('Orders')}>
                    <Ionicons name="file-tray-full" size={30} color={primaryBg} />
                </TouchableOpacity>
            </View>
            <View style={[styles.iconContainer, { display: displayIcon ? 'flex' : 'none' }]}>
                <TouchableOpacity onPress={() => navigate('Favourites')}>
                    <Ionicons name="heart" size={30} color={primaryBg} />
                </TouchableOpacity>
            </View>
            <View style={[styles.iconContainer, { display: displayIcon ? 'flex' : 'none' }]}>
                <TouchableOpacity onPress={() => navigate('AddProduct')}>
                    <Ionicons name="add" size={30} color={primaryBg} />
                </TouchableOpacity>
            </View>
            <View style={[styles.iconContainer, { display: displayIcon ? 'flex' : 'none' }]}>
                <TouchableOpacity onPress={() => navigate('Cart')}>
                    <Ionicons name="cart" size={30} color={primaryBg} />
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