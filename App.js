import { SafeAreaView } from 'react-native'
import AppNavigator from './src/navigation'
import { useFonts } from 'expo-font'
import { Provider } from 'react-redux'
import { store } from './src/store'
import { getAllProducts, init, insertProduct } from './src/db'
import { products } from './src/utils/products'

const App = () => {

  const [loaded] = useFonts({
    LatoBold: require('./assets/fonts/Lato-Bold.ttf'),
    LatoItalic: require('./assets/fonts/Lato-Italic.ttf'),
    LatoRegular: require('./assets/fonts/Lato-Regular.ttf'),
    LatoThin: require('./assets/fonts/Lato-Thin.ttf')
  })

  if (!loaded) return null

  init()
    .then(() => console.log('-- Database init --'))
    .catch(error => console.log(error))

  getAllProducts()
    .then(result => {
      console.log('PRODUCTS LENGTH => ', result.rows.length)
      if (result.rows.length === 0) {
        console.log('-- Insertando productos --')
        products.forEach(product => {
          console.log('Insertando producto ' + product.id)
          insertProduct(
            product.id,
            product.name,
            product.brand,
            product.category,
            product.price,
            product.discount,
            product.sold,
            product.opinions,
            product.stars,
            product.amountAvailable,
            product.freeShipping,
            product.availableImages,
            product.availableColors,
            product.description
          )
        })
        console.log('-- Productos insertados --')
      }
    })
    .catch(error => console.log('GET PRODUCTS => ', error))

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigator />
      </SafeAreaView>
    </Provider>
  )
}

export default App