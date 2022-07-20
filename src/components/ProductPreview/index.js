import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons'
import { PRODUCT_IMAGE_URL } from '../../constants/productImage'
import { useSelector, useDispatch } from 'react-redux'
import { addFavourite, removeFavourite } from '../../store/products.slice'

const ProductPreview = ({ item, handleSelected }) => {

    const dispatch = useDispatch()

    const { id, name, price, discount, freeShipping } = item

    const newPrice = price - price * discount / 100

    const favourites = useSelector(state => state.product.favourites)

    const findIfIsFavourite = () => (
        !!favourites.find(item => item.id === id)
    )

    const handleFavourite = () => {
        dispatch(
            findIfIsFavourite()
                ?
                removeFavourite({ id })
                :
                addFavourite({ item })
        )
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.product} onPress={handleSelected}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: item.imageUri ? item.imageUri : `${PRODUCT_IMAGE_URL}${id}-1.png` }} style={styles.image} />
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
                <Ionicons name={findIfIsFavourite() ? 'heart' : 'heart-outline'} size={30} color={findIfIsFavourite() ? 'red' : 'black'} />
            </TouchableOpacity>
        </View>
    )
}

export default ProductPreview