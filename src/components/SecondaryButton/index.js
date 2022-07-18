import CustomButton from '../CustomButton'
import { styles } from './styles'

const SecondaryButton = ({ title, onPress }) => (
    <CustomButton title={title} buttonStyle={styles.button} textStyle={styles.text} onPress={onPress} />
)

export default SecondaryButton