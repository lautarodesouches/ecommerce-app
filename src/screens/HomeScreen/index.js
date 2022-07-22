import { SectionList, Text, View } from 'react-native'
import { Header, ProductPreview } from '../../components'
import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadDataFromTableProducts } from '../../store/product.slice'

const HomeScreen = ({ navigation }) => {

    const dispatch = useDispatch()
    
    const latest = useSelector(state => state.product.latest)
    const recommended = useSelector(state => state.product.recommended)
    const offers = useSelector(state => state.product.offers)

    useEffect(() => {
        dispatch(
            loadDataFromTableProducts('products')
        )
        dispatch(
            loadDataFromTableProducts('latest')
        )
        dispatch(
            loadDataFromTableProducts('recommended')
        )
        dispatch(
            loadDataFromTableProducts('offers')
        )
    }, [recommended.length])

    const handleSelected = itemId => navigation.navigate('ProductDetail', { itemId: itemId })

    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <SectionList
                style={styles.sectionList}
                renderSectionHeader={({ section: { title } }) => <Text style={styles.sectionTitle}>{title}</Text>}
                sections={[
                    {
                        title: 'Recien añadidos',
                        data: latest,
                        renderItem: ({ item }) => <ProductPreview key={item.id} item={item} handleSelected={() => handleSelected(item.id)} />
                    },
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