import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import MainNavigator from './Main'

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <StatusBar
                translucent
                backgroundColor='#000'
                barStyle='default'
            />
            <MainNavigator />
        </NavigationContainer>
    )
}

export default AppNavigator