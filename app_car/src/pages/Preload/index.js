import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

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
        <View>
            <Text>Preload</Text>
        </View>
    )
}

export default Preload