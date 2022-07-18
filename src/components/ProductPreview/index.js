import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useState } from 'react'

const ProductPreview = ({ item }) => {

    //const { id, name, brand, category, price, discount, sold, opinions, stars, amountAvailable, freeShipping, availableImages, availableColors, description } = item
    const { id, name, price, discount, freeShipping } = item

    const newPrice = price - price * discount / 100

    const [isFavourite, setIsFavourite] = useState(false)

    const handleFavourite = () => setIsFavourite(!isFavourite)

    const handleProductPress = () => console.log('Producto')

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.product} onPress={handleProductPress}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: `https://lautarodesouches.github.io/ecommerce/img/${id}-1.png` }} style={styles.image} />
                </View>
                <View style={styles.info}>
                    {
                        !!discount && (
                            <Text style={styles.oldPrice}>
                                ${price}
                            </Text>
                        )
                    }
                    <View style={styles.newPrice}>
                        <Text style={styles.price}>
                            ${discount ? newPrice : price}
                        </Text>
                        <Text style={styles.discount}>
                            {discount ? discount + '%' : ''}
                        </Text>
                    </View>
                    <Text style={styles.title}>
                        {name}
                    </Text>
                    <Text style={styles.freeShipping}>
                        {freeShipping && 'Envío gratis!'}
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleFavourite} style={styles.favourite}>
                <Ionicons name={isFavourite ? 'heart' : 'heart-outline'} size={30} color={isFavourite ? 'red' : 'black'} />
            </TouchableOpacity>
        </View>
    )
}

export default ProductPreview