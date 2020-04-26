import React, { useState } from 'react'
import { Platform } from 'react-native'
import { Background, Container, AreaInput, Input, SubmitButton, SubmitText, SignUpText, SignInButton, SignInText } from './styles'

function SignUp( {navigation} ) {

    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [phone, setPhone] = useState('')

    return(
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
                        value={nome}
                        onChangeText={(nome)=> setNome(nome)}
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

                <SubmitButton onPress={()=>{}}>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>

                <SignInButton onPress={(navigate)=> navigation.navigate('SignIn') }>
                    <SignInText>Já tenho conta!!!</SignInText>
                </SignInButton>

            </Container>
        </Background>
    )
}

export default SignUp