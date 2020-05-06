import React, { useState } from 'react'
import { Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Background, Container, AreaInput, Input, SubmitButton, SubmitText, SignUpText, SignInButton, SignInText } from './styles'
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/apis' 
import dataIsOk from '../../components/Validate'

function SignUp( {navigation} ) {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    function userRegister() {
        let payload = {name: name, email: email , telephone: phone, password: password, confirmPassword: confirmPassword}
        if (dataIsOk(payload)) { 
            apiCall(payload)
        }
    }

    async function apiCall(payload) {
        await api.post('users/v1', payload)
        .then((res)=>{ saveStorage(res.data)})
        .catch((err)=>{ alert("Por favor, tente novamente!!!")})
    }

    async function saveStorage(data) {
        await AsyncStorage.setItem('logged', 'yes')
        await AsyncStorage.setItem('profile', JSON.stringify(data))
        await navigation.navigate('Profile', { json: data })
    }

    return(
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
            <Background>
                <Container behavior={Platform.OS === 'ios' ? 'padding': ''} enabled>

                    <SignUpText>Cadastro</SignUpText>

                    <AreaInput>
                        <Input
                            placeholder="Email"
                            autoCorrect={false}
                            autoCapitalize="none"
                            value={email}
                            onChangeText={(email)=> setEmail(email)}
                        />
                    </AreaInput>

                    <AreaInput>
                        <Input
                            placeholder="Nome"
                            autoCorrect={false}
                            autoCapitalize="none"
                            value={name}
                            onChangeText={(name)=> setName(name)}
                        />
                    </AreaInput>

                    <AreaInput>
                        <Input
                            placeholder="Número do Telefone"
                            autoCorrect={false}
                            autoCapitalize="none"
                            value={phone}
                            onChangeText={(phone)=> setPhone(phone)}
                            keyboardType="numeric"
                        />
                    </AreaInput>

                    <AreaInput>
                        <Input
                            placeholder="Senha"
                            autoCorrect={false}
                            autoCapitalize="none"
                            value={password}
                            secureTextEntry={true}
                            onChangeText={(password)=> setPassword(password)}
                        />
                    </AreaInput>

                    <AreaInput>
                        <Input
                            placeholder="Confirme a senha"
                            autoCorrect={false}
                            autoCapitalize="none"
                            value={confirmPassword}
                            secureTextEntry={true}
                            onChangeText={(confirmPassword)=> setConfirmPassword(confirmPassword)}
                        />
                    </AreaInput>

                    <SubmitButton onPress={userRegister}>
                        <SubmitText>Cadastrar</SubmitText>
                    </SubmitButton>

                    <SignInButton onPress={(navigate)=> navigation.navigate('SignIn') }>
                        <SignInText>Já tenho conta!!!</SignInText>
                    </SignInButton>

                </Container>
            </Background>
        </TouchableWithoutFeedback>

    )
}

export default SignUp