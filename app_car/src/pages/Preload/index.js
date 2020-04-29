import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { Background, Container } from './styles'

function Preload({navigation}) {
    
    useEffect(()=>{
        async function getStorege() {
            const logged = await AsyncStorage.getItem('logged')
            if (logged === null) {
                navigation.navigate({routeName: 'SignIn'})
            }else{
                navigation.navigate('Profile')
            }
        }
    
        getStorege()
    
    },[])

    return(
        <Background>
            <Container>
                <ActivityIndicator color="#FFF" size={50} />
            </Container>
        </Background>
    )
}

export default Preload