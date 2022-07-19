import { FlatList, Image, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { PrimaryButton } from '../../components'
import { PRODUCT_IMAGE_URL } from '../../constants/productImage'
import { styles } from './styles'

const CartScreen = () => {

    const cart = useSelector(state => state.product.cart)

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <View style={styles.itemSection}>
                <Image source={{ uri: `${PRODUCT_IMAGE_URL}${item.id}-1.png` }} style={styles.image} />
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
            <Text style={styles.title}>Carrito:</Text>
            <FlatList
                data={cart}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <View style={styles.totalContainer}>
                <Text style={styles.total}>Total: ${cart.reduce((acc, item) => acc + Math.round(item.pricePerItem * item.quantity), 0)}</Text>
                <PrimaryButton title='Checkout' />
            </View>
        </View>
    )
}

export default CartScreen