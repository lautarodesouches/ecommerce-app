import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { styles } from './styles'

const CartScreen = () => {

    const cart = useSelector(state => state.product.cart)

    console.log(cart)

    return (
        <View style={styles.container}>
            <Text>Cart</Text>
        </View>
    )
}

export default CartScreen