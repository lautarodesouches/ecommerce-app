import { Text, TextInput, View } from 'react-native'
import { styles } from './styles'

const CustomInput = ({
    labelColor,
    label,
    helper,
    value,
    onChangeText,
    placeholder,
    textContentType,
    onEndEditing
}) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.label, { color: labelColor }]}>{label}:</Text>
            <TextInput
                style={[styles.input, { borderColor: helper ? 'red' : 'black' }]}
                onChangeText={e => onChangeText(e)}
                placeholder={placeholder}
                placeholderTextColor='black'
                value={value}
                textContentType={textContentType}
                onEndEditing={e => onEndEditing(e)}
            />
            {
                !!helper && <Text style={styles.helper}>{helper}</Text>
            }
        </View>
    )
}

export default CustomInput