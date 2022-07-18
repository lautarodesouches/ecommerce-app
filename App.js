import { SafeAreaView } from 'react-native'
import AppNavigator from './src/navigation'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppNavigator />
    </SafeAreaView>
  )
}

export default App