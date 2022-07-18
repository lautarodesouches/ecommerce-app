import { SafeAreaView } from 'react-native'
import AppNavigator from './src/navigation'
import { useFonts } from 'expo-font'

const App = () => {

  const [loaded] = useFonts({
    LatoBold: require('./assets/fonts/Lato-Bold.ttf'),
    LatoItalic: require('./assets/fonts/Lato-Italic.ttf'),
    LatoRegular: require('./assets/fonts/Lato-Regular.ttf'),
    LatoThin: require('./assets/fonts/Lato-Thin.ttf')
  })

  if (!loaded) return null

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppNavigator />
    </SafeAreaView>
  )
}

export default App