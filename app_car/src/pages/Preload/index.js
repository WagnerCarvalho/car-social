import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { Background, Container } from './styles'

function Preload({navigation}) {
    
    useEffect(()=>{
        async function getStorege() {
            await AsyncStorage.getItem('logged').then((logged)=>{
                if (logged === 'yes') {
                    navigation.navigate('Profile')
                }else{
                    navigation.navigate({routeName: 'SignIn'})
                }
            })
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