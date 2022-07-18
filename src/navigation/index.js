import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import MainNavigator from './Main'

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <StatusBar />
            <MainNavigator />
        </NavigationContainer>
    )
}

export default AppNavigator