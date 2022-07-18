import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

const CustomButton = ({ title, buttonStyle, textStyle, onPress }) => {
    return (
        <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
            <Text style={[styles.text, textStyle]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton