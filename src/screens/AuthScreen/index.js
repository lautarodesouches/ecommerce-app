import { useState } from 'react'
import { KeyboardAvoidingView, Text, TextInput, View } from 'react-native'
import { useSelector } from 'react-redux'
import { CustomInput, SecondaryButton } from '../../components'
import { primaryText } from '../../constants/colors'
import { styles } from './styles'

const AuthScreen = ({ navigation }) => {

    const { userId, token } = useSelector(state => state.auth)

    const [email, setEmail] = useState('test@test.com')
    const [password, setPassword] = useState('123456')

    const handleFormSumbit = () => {

    }

    return (
        <KeyboardAvoidingView
            behavior='height'
            style={styles.keyboard}
        >
            <View style={styles.formContainer}>
                <Text style={styles.title}>Login</Text>
                <CustomInput
                    labelColor={primaryText}
                    label='Email'
                    helper={''}
                    value={email}
                    placeholder='test@test.com'
                    onChangeText={setEmail}
                    textContentType='emailAddress'
                    onEndEditing={() => { }}
                />
                <CustomInput
                    labelColor={primaryText}
                    label='Contraseña'
                    helper={''}
                    value={password}
                    placeholder='********'
                    onChangeText={setPassword}
                    textContentType='password'
                    onEndEditing={() => { }}
                />
                <View style={styles.buttonContainer}>
                    <SecondaryButton onPress={handleFormSumbit} title='Ingresar' />
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default AuthScreen