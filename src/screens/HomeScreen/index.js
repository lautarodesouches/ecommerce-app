import { useEffect, useState } from 'react'
import { SectionList, Text, View } from 'react-native'
import { Header, ProductPreview } from '../../components'
import { items } from '../../constants/products'
import { styles } from './styles'

const HomeScreen = ({ navigation }) => {

    const [recommended, setRecommended] = useState([])
    const [offers, setOffers] = useState([])

    useEffect(() => {
        let recommended = [...items.sort((a, b) => b.amountAvailable - a.amountAvailable)]
        recommended.length = 4
        setRecommended(recommended)
        let offers = [...items.filter(e => e.discount > 0)]
        offers.length = 4
        setOffers(offers)
    }, [])

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
                        renderItem: ({ item }) => <ProductPreview key={item.id} item={item} />
                    },
                    {
                        title: 'Ofertas',
                        data: offers,
                        renderItem: ({ item }) => <ProductPreview key={item.id} item={item} />
                    },
                ]}
                keyExtractor={(_, index) => index}
            />
        </View>
    )
}

export default HomeScreen