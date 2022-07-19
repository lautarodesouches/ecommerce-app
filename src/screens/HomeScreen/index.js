import { useState } from 'react'
import { SectionList, Text, View } from 'react-native'
import { Header, ProductPreview } from '../../components'
import { styles } from './styles'
import { useSelector, useDispatch } from 'react-redux'

const HomeScreen = ({ navigation }) => {

    const dispatch = useDispatch()

    const recommended = useSelector(state => state.product.recommended)
    const offers = useSelector(state => state.product.offers)

    const handleSelected = item => navigation.navigate('ProductDetail', { item })

    return (
        <View style={styles.container}>
            <Header />
            <SectionList
                style={styles.sectionList}
                renderSectionHeader={({ section: { title } }) => <Text style={styles.sectionTitle}>{title}</Text>}
                sections={[
                    {
                        title: 'Productos Recomendados',
                        data: recommended,
                        renderItem: ({ item }) => <ProductPreview key={item.id} item={item} handleSelected={() => handleSelected(item)} />
                    },
                    {
                        title: 'Ofertas',
                        data: offers,
                        renderItem: ({ item }) => <ProductPreview key={item.id} item={item} handleSelected={() => handleSelected(item)} />
                    },
                ]}
                keyExtractor={(_, index) => index}
            />
        </View>
    )
}

export default HomeScreen