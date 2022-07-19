import { Image, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import { styles } from './styles'
import { useSelector } from 'react-redux'
import { Header, PrimaryButton, SecondaryButton } from '../../components'
import { PRODUCT_IMAGE_URL } from '../../constants/productImage'
import { useState } from 'react'
import { primaryBg, themeBg } from '../../constants/colors'

const ProductDetailScreen = ({ navigation, route }) => {

    const { itemId } = route.params

    const item = useSelector(state => state.product.products.find(item => item.id === itemId))

    const { id, name, brand, category, price, discount, sold, opinions, stars, amountAvailable, freeShipping, availableImages, availableColors, description } = item

    const newPrice = price - price * discount / 100

    const [currentImage, setCurrentImage] = useState(1)
    const [selectedQuantity, setSelectedQuantity] = useState(1)

    const handleChangeImage = i => setCurrentImage(i)

    const handleRemove = () => {
        if (selectedQuantity > 1) setSelectedQuantity(selectedQuantity - 1)
    }
    const handleAdd = () => setSelectedQuantity(selectedQuantity + 1)

    const ProductImage = ({ index }) => (
        <TouchableOpacity style={[styles.thumnailTouchable, { borderColor: index + 1 === currentImage ? primaryBg : themeBg }]} onPress={() => handleChangeImage(index + 1)}>
            <Image source={{ uri: `${PRODUCT_IMAGE_URL}${id}-${index + 1}.png` }} style={styles.thumnailImage} />
        </TouchableOpacity>
    )

    return (
        <ScrollView style={styles.container}>
            <Header />
            <View style={styles.product}>
                <View style={styles.categoryBrand}>
                    <Text style={styles.categoryBrandText}>{`${category} > ${brand}`}</Text>
                </View>
                <View style={styles.images}>
                    <View style={styles.mainImageContainer}>
                        <Image source={{ uri: `${PRODUCT_IMAGE_URL}${id}-${currentImage}.png` }} style={styles.mainImage} />
                    </View>
                    <View style={styles.flatListContainer}>
                        {
                            [...Array(availableImages)].map((e, i) => <ProductImage key={i} index={i} />)
                        }
                    </View>
                </View>
                <View>
                    <Text style={styles.title}>{name}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={[styles.price, { fontSize: discount ? 18 : 22 }]}>${price}</Text>
                    {
                        !!discount && (
                            <View style={styles.newPriceContainer}>
                                <Text style={styles.newPrice}>${newPrice}</Text>
                                <Text style={styles.discount}>%{discount}</Text>
                            </View>
                        )
                    }
                </View>
                <View >
                    <Text style={styles.description}>{description}</Text>
                </View>
                <View style={styles.stats}>
                    <Text style={styles.statText}>{sold} vendidos</Text>
                    <Text style={styles.statText}>{opinions} opiniones</Text>
                </View>
                <View>
                    <Text style={styles.selectedQuantity}>Cantidad seleccionada: {selectedQuantity}</Text>
                    <View style={styles.buttons}>
                        <SecondaryButton onPress={handleRemove} title='-' />
                        <SecondaryButton onPress={handleAdd} title='+' />
                    </View>
                </View>
                <View style={styles.actionButtons}>
                    <PrimaryButton title='Comprar Ahora' />
                </View>
            </View>
        </ScrollView>
    )
}

export default ProductDetailScreen