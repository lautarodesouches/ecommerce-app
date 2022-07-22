import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Header, PrimaryButton } from '../../components'
import { PRODUCT_IMAGE_URL } from '../../constants/productImage'
import { deleteCartItem } from '../../store/product.slice'
import { styles } from './styles'

const CartScreen = ({ navigation }) => {

    const dispatch = useDispatch()

    const cart = useSelector(state => state.product.cart)

    const handleCheckout = () => {
        navigation.navigate('Checkout')
    }

    const handleDeleteItem = id => {
        dispatch(
            deleteCartItem(id)
        )
    }

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <TouchableOpacity style={styles.itemDelete} onPress={() => handleDeleteItem(item.id)}>
                <Text style={styles.itemDeleteText}>X</Text>
            </TouchableOpacity>
            <View style={styles.itemSection}>
                <Image source={{ uri: item.imageUri ? item.imageUri : `${PRODUCT_IMAGE_URL}${item.id}-1.png` }} style={styles.image} />
            </View>
            <View style={styles.itemSection}>
                <Text style={styles.itemTitle}>{item.name}</Text>
            </View>
            <View style={styles.itemSection}>
                <Text style={styles.itemText}>Precio por item: ${Math.round(item.pricePerItem)}</Text>
            </View>
            <View style={styles.itemSection}>
                <Text style={styles.itemText}>Cantidad: {item.quantity}</Text>
            </View>
            <View style={styles.itemSection}>
                <Text style={styles.itemSubTotal}>Subtotal: ${Math.round(item.quantity * item.pricePerItem)}</Text>
            </View>
        </View>
    )

    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            {
                cart.length > 0
                    ?
                    <>
                        <FlatList
                            data={cart}
                            extraData={cart}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                        <View style={styles.totalContainer}>
                            <Text style={styles.total}>Total: ${cart.reduce((acc, item) => acc + Math.round(item.pricePerItem * item.quantity), 0)}</Text>
                            <PrimaryButton title='Checkout' onPress={handleCheckout} />
                        </View>
                    </>
                    :
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>El carrito se encuentra vacio</Text>
                        <PrimaryButton onPress={() => navigation.goBack()} title='Volver atrás' />
                    </View>
            }
        </View>
    )
}

export default CartScreen