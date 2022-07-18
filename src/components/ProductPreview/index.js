import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useState } from 'react'

const ProductPreview = ({ productId }) => {

    const [isFavourite, setIsFavourite] = useState(false)

    const handleFavourite = () => setIsFavourite(!isFavourite)

    const handleProductPress = () => console.log('Producto')

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.product} onPress={handleProductPress}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: `https://lautarodesouches.github.io/ecommerce/img/${productId}-1.png` }} style={styles.image} />
                </View>
                <View style={styles.info}>
                    <Text style={styles.oldPrice}>
                        ${5500}
                    </Text>
                    <View style={styles.newPrice}>
                        <Text style={styles.price}>
                            ${5200}
                        </Text>
                        <Text style={styles.discount}>
                            7%
                        </Text>
                    </View>
                    <Text style={styles.title}>
                        Auriculares in-ear inalámbricos Soundpeats
                    </Text>
                    <Text style={styles.freeShipping}>
                        Envío gratis!
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