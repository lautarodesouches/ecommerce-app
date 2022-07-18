import { SectionList, Text, View } from 'react-native'
import { Header, ProductPreview } from '../../components'
import { styles } from './styles'

const HomeScreen = ({ navigation }) => {

    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const data2 = [12, 13, 14, 15, 16, 17, 18, 19, 20]

    return (
        <View style={styles.container}>
            <Header />
            <SectionList
                style={styles.sectionList}
                renderSectionHeader={({ section: { title } }) => <Text style={styles.sectionTitle}>{title}</Text>}
                sections={[
                    {
                        title: 'Productos Recomendados',
                        data: data2,
                        renderItem: ({ item }) => <ProductPreview productId={item} />
                    },
                    {
                        title: 'Ofertas',
                        data: data,
                        renderItem: ({ item }) => <ProductPreview productId={item} />
                    },
                ]}
                keyExtractor={(_, index) => index}
            />
        </View>
    )
}

export default HomeScreen