import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { primaryBg, primaryText, secondaryBg, secondaryText } from '../../constants/colors'
import { AuthScreen, CartScreen, CheckoutScreen, HomeScreen, ProductDetailScreen, SearchScreen } from '../../screens'

const Stack = createNativeStackNavigator()

const MainNavigator = () => {

    const isLoggedIn = true

    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{ headerTitleAlign: 'center' }}
        >
            <Stack.Group
                screenOptions={{
                    headerStyle: { backgroundColor: primaryBg },
                    headerTintColor: primaryText,
                }}
            >
                <Stack.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{ title: 'Home' }}
                />
                <Stack.Screen
                    name='ProductDetail'
                    component={ProductDetailScreen}
                    options={({ route }) => ({ title: route.params.productName })}
                />
                <Stack.Screen
                    name='Search'
                    component={SearchScreen}
                    options={{ title: 'Buscar' }}
                />
            </Stack.Group>
            <Stack.Group
                screenOptions={{
                    headerStyle: { backgroundColor: secondaryBg },
                    headerTintColor: secondaryText,
                }}
            >
                {
                    isLoggedIn
                        ?
                        <>
                            <Stack.Screen
                                name='Cart'
                                component={CartScreen}
                                options={{ title: 'Carrito' }}
                            />
                            <Stack.Screen
                                name='Checkout'
                                component={CheckoutScreen}
                                options={{ title: 'Checkout' }}
                            />
                        </>
                        :
                        <Stack.Screen
                            name='Auth'
                            component={AuthScreen}
                            options={{ title: 'Autenticacion' }}
                        />
                }
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default MainNavigator