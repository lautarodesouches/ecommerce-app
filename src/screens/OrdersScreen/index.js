import { useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../store/order.slice'
import { Header } from '../../components'

const OrdersScreen = ({ navigation }) => {

    const dispatch = useDispatch()

    const orders = useSelector(state => state.order.orders)

    useEffect(() => {
        dispatch(
            getOrders()
        )
    }, [])

    const formatDate = time => {
        const date = new Date(time);
        return date.toLocaleDateString();
    }

    const renderItem = ({ item }) => (
        <View style={styles.orderContainer}>
            <Text style={styles.orderText}>
                {formatDate(item.date)}
            </Text>
            <Text style={styles.orderText}>
                Productos: {item.items.length}
            </Text>
            <Text style={styles.orderText}>
                ${item.total}
            </Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <FlatList
                contentContainerStyle={styles.contentContainer}
                data={orders}
                renderItem={renderItem}
                style={styles.flatList}
            />
        </View>
    )
}

export default OrdersScreen