import { FlatList, Text, View } from 'react-native'
import { styles } from './styles'
import { useSelector } from 'react-redux'
import { Header, ProductPreview, SecondaryButton } from '../../components'
import { useEffect, useState } from 'react'

const SearchScreen = ({ navigation }) => {

    const query = useSelector(state => state.search.query.toLowerCase())
    const products = useSelector(state => state.product.products)

    const [filteredProducts, setFilteredProducts] = useState([])


    useEffect(() => {
        setFilteredProducts(products.filter(product => product.name.toLowerCase().includes(query) || product.brand.toLowerCase().includes(query) || product.category.toLowerCase().includes(query)))
    }, [query])

    const renderItem = ({ item }) => <ProductPreview handleSelected={() => navigation.navigate('ProductDetail', { itemId: item.id })} item={item} />

    const ListEmptyComponent = () => (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No se encontraron productos que coincidan con esa búsqueda</Text>
            <SecondaryButton title='Ver todos' />
        </View>
    )

    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <FlatList
                extraData={filteredProducts}
                data={filteredProducts}
                renderItem={renderItem}
                ListEmptyComponent={ListEmptyComponent}
                contentContainerStyle={styles.contentContainer}
            />
        </View>
    )
}

export default SearchScreen