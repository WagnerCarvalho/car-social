import React, { useState, useEffect } from 'react'
import { Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Background, Container, AreaInput, Input, Logo, SubmitButton, SubmitText, SignUpLink, SignUpText } from './styles'
import AsyncStorage from '@react-native-community/async-storage';
import firebase from '../../services/firebaseConections'

function SignIn({navigation}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginUser, setLoginUser] = useState('')
    
    async function authIn() {
        await firebase.auth().signOut();
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(()=>{
            setLoginUser('yes')
            navigation.navigate('Profile')
        })
        .catch((error)=>{
            alert(error.code)
        })
    }

    useEffect(()=>{
        async function saveStorage() {
            await AsyncStorage.setItem('logged', loginUser)
        }
        saveStorage()
    }, [loginUser])

    return(
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
            <Background>
                <Container behavior={Platform.OS === 'ios' ? 'padding': ''} enabled> 

                    <Logo source={require('../../assets/car_new.png')} />

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
                            placeholder="Senha"
                            autoCorrect={false}
                            autoCapitalize="none"
                            value={password}
                            secureTextEntry={true}
                            onChangeText={(password)=> setPassword(password)}
                        />
                    </AreaInput>

                    <SubmitButton onPress={authIn}>
                        <SubmitText>Acessar</SubmitText>
                    </SubmitButton>

                    <SignUpLink onPress={(navigate)=> navigation.navigate('SignUp') }>
                        <SignUpText>Criar sua conta agora</SignUpText>
                    </SignUpLink>
                    
                </Container>
            </Background>
        </TouchableWithoutFeedback>
    )
}

export default SignIn