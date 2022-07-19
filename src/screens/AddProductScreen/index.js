import { useState } from 'react'
import { ScrollView, Text, TextInput, View } from 'react-native'
import { styles } from './styles'

const AddProductScreen = () => {

    // id, name, brand, category, price, discount, sold, opinions, stars, amountAvailable, freeShipping, availableImages, availableColors, description

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [amountAvailable, setAmounAvailable] = useState(1)
    const [description, setDescription] = useState('')

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
                    onChangeText={e => setPrice(e)}
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
                    <Text style={styles.text}>No hay imagen seleccionada</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default AddProductScreen