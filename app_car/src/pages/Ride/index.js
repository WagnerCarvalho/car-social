import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Background, Container } from './styles'
import MapRender from '../../components/Map'
import { PermissionsAndroid, Platform } from 'react-native'
import Geolocation from '@react-native-community/geolocation';

Icon.loadFont();
function Ride() {
    const [hasPermission, setHasPermission] = useState(false)

    async function requestLocation() {
        try {
           if (Platform.OS === 'android') {
               const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
               if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                   setHasPermission(true)
               }else{
                   setHasPermission(true)
               }
           } 
        } catch (error) {
            console.warn(error)
        }
    }

    async function getLocation() {
        await Geolocation.getCurrentPosition(data => {
            alert(data.coords)
        })
    }

    useEffect(()=>{
        if (hasPermission) { getLocation() }
        requestLocation()
    },[])

    return(
        <Background>
            <Container>
                { hasPermission?
                    ( <MapRender/> ) : null
                } 
            </Container>
        </Background>
    )
}

Ride.navigationOptions = {
    tabBarLabel: 'Viagem',
    tabBarIcon: ({tintColor}) => (
        <Icon name="navigation" size={40} color={tintColor}/>
    )
}

export default Ride
