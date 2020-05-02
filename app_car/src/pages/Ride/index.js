import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont();


function Ride({navigation}) {

    function backScreen() {
        navigation.navigate('SignIn')
    }

    return(
        <View style={styles.container}>
            
            
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: -23.5492243,
                    longitude: -46.5813785,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                    }}>
            </MapView>
            

            <Text>Ride</Text>
            <TouchableOpacity onPress={backScreen}>
                <Text>voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

Ride.navigationOptions = {
    tabBarLabel: 'Viagem',
    tabBarIcon: ({tintColor}) => (
        <Icon name="navigation" size={40} color={tintColor}/>
    )
}

export default Ride


const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
});