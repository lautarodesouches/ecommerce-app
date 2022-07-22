import { useState } from 'react'
import { Alert, ScrollView, Text, View } from 'react-native'
import { CustomInput, SecondaryButton } from '../../components'
import { primaryText } from '../../constants/colors'
import { styles } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { updateAuth } from '../../store/auth.slice'
import { checkout } from '../../store/product.slice'

const CheckoutScreen = ({ navigation }) => {

    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth)
    const cart = useSelector(state => state.product.cart)

    const cartTotal = cart.reduce((acc, item) => acc + Math.round(item.pricePerItem * item.quantity), 0)

    const [name, setName] = useState(auth.name)
    const [email, setEmail] = useState(auth.email)
    const [address, setAddress] = useState(auth.address)
    const [creditCard, setCreditCard] = useState(auth.creditCard)

    const isFormComplete = () => !!(name && email && address && creditCard)

    const goHome = () => navigation.navigate('Home')
    const goToOrders = () => navigation.navigate('Orders')

    const handleCheckout = () => {

        if (!isFormComplete()) {
            Alert.alert(
                'No pudimos procesar el pedido',
                'Por favor verifica que el formulario este completo',
                [{ text: 'Ok' }]
            )
            return
        }

        dispatch(
            updateAuth({
                name,
                email,
                address,
                creditCard,
            }),
        )
        dispatch(
            checkout(
                cart,
                cartTotal
            )
        )

        Alert.alert(
            'Felicitaciones',
            'Tu compra ha sido procesada correctamente',
            [
                { text: 'Ver compras', onPress: goToOrders },
                { text: 'Ir al inicio', onPress: goHome }
            ]
        )
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.infoText}>Total compra: ${cartTotal}</Text>
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Checkout</Text>
                <CustomInput
                    label='Nombre'
                    labelColor={primaryText}
                    onChangeText={setName}
                    value={name}
                />
                <CustomInput
                    label='Email'
                    labelColor={primaryText}
                    onChangeText={setEmail}
                    value={email}
                />
                <CustomInput
                    label='Dirección'
                    labelColor={primaryText}
                    onChangeText={setAddress}
                    value={address}
                />
                <CustomInput
                    label='Tarjeta de credito'
                    labelColor={primaryText}
                    onChangeText={setCreditCard}
                    value={creditCard}
                    textContentType='creditCardNumber'
                    keyboardType='numeric'
                />
                <View style={styles.buttonContainer}>
                    <SecondaryButton title='Finalizar compra' onPress={handleCheckout} />
                </View>
            </View>
        </ScrollView>
    )
}

export default CheckoutScreen