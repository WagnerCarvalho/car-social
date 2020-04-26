import React, { useState } from 'react'
import { Platform } from 'react-native'
import { Background, Container, AreaInput, Input, Logo, SubmitButton, SubmitText, SignUpLink, SignUpText } from './styles'

function SignIn( {navigation} ) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
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
                        placeholder="Password"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={(password)=> setPassword(password)}
                    />
                </AreaInput>

                <SubmitButton onPress={()=>{}}>
                    <SubmitText>Acessar</SubmitText>
                </SubmitButton>

                <SignUpLink onPress={(navigate)=> navigation.navigate('SignUp') }>
                    <SignUpText>Criar sua conta agora</SignUpText>
                </SignUpLink>
                
            </Container>
        </Background>
    )
}

export default SignIn