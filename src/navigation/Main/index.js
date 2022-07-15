import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen, ProductDetailScreen, SearchScreen } from '../../screens'

const Stack = createNativeStackNavigator()

const MainNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{ title: 'Home' }}
            />
            <Stack.Screen
                name='ProductDetail'
                component={ProductDetailScreen}
                options={{ title: 'Detalle' }}
            />
            <Stack.Screen
                name='Search'
                component={SearchScreen}
                options={{ title: 'Buscar' }}
            />
        </Stack.Navigator>
    )
}

export default MainNavigator