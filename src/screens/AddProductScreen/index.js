import { useState } from 'react'
import { Alert, Image, ScrollView, Text, TextInput, View } from 'react-native'
import { PrimaryButton, SecondaryButton } from '../../components'
import { styles } from './styles'
import * as ImagePicker from 'expo-image-picker'
import { useDispatch } from 'react-redux'
import { addNewProduct } from '../../store/products.slice'

const AddProductScreen = ({ navigation }) => {

    // id, name, brand, category, price, discount, sold, opinions, stars, amountAvailable, freeShipping, availableImages, availableColors, description

    const dispatch = useDispatch()

    const [name, setName] = useState('Smart TV')
    const [price, setPrice] = useState('100000')
    const [amountAvailable, setAmounAvailable] = useState('1')
    const [description, setDescription] = useState('Smart TV 44 pulgadas LED HD')
    const [imageUri, setImageUri] = useState('')

    const formCompleted = () => !!(name && price && amountAvailable && description && imageUri)

    const verifyPermissions = async () => {

        const { status } = await ImagePicker.requestCameraPermissionsAsync()

        if (status !== 'granted') {

            Alert.alert(
                'Permisos insuficientes',
                'Necesita permiso de la cámara para tomar una imagen',
                [{ text: 'Ok' }]
            )

            return false
        }

        return true
    }

    const handleTakePicture = async () => {

        const isCameraOk = await verifyPermissions()

        if (!isCameraOk) return

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.8
        })

        setImageUri(image.uri)

    }

    const goHome = () => navigation.navigate('Home')

    const handleSumbit = () => {

        if (!formCompleted()) {
            Alert.alert(
                'Ha ocurrido un error',
                'El formulario debe estar completo para añadir el producto',
                [{ text: 'Ok' }]
            )
            return
        }

        dispatch(
            addNewProduct({
                name,
                price,
                amountAvailable,
                description,
                imageUri
            })
        )

        Alert.alert(
            'Producto añadido',
            'Se ha añadito tu producto exitosamente. Estará junto a los recomendados!',
            [{ text: 'Ir al inicio', onPress: goHome }]
        )

    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Agregar producto</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Nombre del producto:</Text>
                <TextInput
                    value={name}
                    autoCapitalize={'sentences'}
                    onChangeText={e => setName(e)}
                    placeholder='Nombre del producto'
                    placeholderTextColor='black'
                    style={styles.input}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Precio del producto:</Text>
                <TextInput
                    value={price}
                    autoCapitalize={'sentences'}
                    onChangeText={e => setPrice(e)}
                    placeholder='Precio del producto'
                    placeholderTextColor='black'
                    style={styles.input}
                    keyboardType={'number-pad'}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Cantidad del producto:</Text>
                <TextInput
                    value={amountAvailable}
                    autoCapitalize={'sentences'}
                    onChangeText={e => setAmounAvailable(e)}
                    placeholder='Cantidad del producto'
                    placeholderTextColor='black'
                    style={styles.input}
                    keyboardType={'number-pad'}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Descripcion del producto:</Text>
                <TextInput
                    value={description}
                    autoCapitalize={'sentences'}
                    onChangeText={e => setDescription(e)}
                    placeholder='Descripcion del producto'
                    placeholderTextColor='black'
                    style={styles.input}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Imagen del producto:</Text>
                <View style={styles.imageContainer}>
                    {
                        imageUri
                            ?
                            <Image source={{ uri: imageUri }} style={styles.image} />
                            :
                            <Text style={styles.text}>No hay imagen seleccionada</Text>
                    }
                </View>
                <SecondaryButton title='Tomar imagen' onPress={handleTakePicture} />
            </View>
            <View style={styles.sumbitButtonContainer}>
                <PrimaryButton title='Añadir producto' onPress={handleSumbit} />
            </View>
        </ScrollView>
    )
}

export default AddProductScreen