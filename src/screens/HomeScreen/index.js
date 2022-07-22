import { SectionList, Text, View } from 'react-native'
import { Header, ProductPreview } from '../../components'
import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadOffers, loadProducts, loadRecommended } from '../../store/product.slice'

const HomeScreen = ({ navigation }) => {

    const dispatch = useDispatch()

    const recommended = useSelector(state => state.product.recommended)
    const offers = useSelector(state => state.product.offers)

    useEffect(() => {
        dispatch(
            loadProducts()
        )
        dispatch(
            loadOffers()
        )
        dispatch(
            loadRecommended()
        )
    }, [])

    const handleSelected = itemId => navigation.navigate('ProductDetail', { itemId: itemId })

    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <SectionList
                style={styles.sectionList}
                renderSectionHeader={({ section: { title } }) => <Text style={styles.sectionTitle}>{title}</Text>}
                sections={[
                    {
                        title: 'Productos Recomendados',
                        data: recommended,
                        renderItem: ({ item }) => <ProductPreview key={item.id} item={item} handleSelected={() => handleSelected(item.id)} />
                    },
                    {
                        title: 'Ofertas',
                        data: offers,
                        renderItem: ({ item }) => <ProductPreview key={item.id} item={item} handleSelected={() => handleSelected(item.id)} />
                    },
                ]}
                keyExtractor={(_, index) => index}
            />
        </View>
    )
}

export default HomeScreen