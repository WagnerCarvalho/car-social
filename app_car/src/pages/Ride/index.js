import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

function Ride({navigation}) {

    function backScreen() {
        navigation.navigate('SignIn')
    }

    return(
        <View>
            <Text>Ride</Text>
            <TouchableOpacity onPress={backScreen}>
                <Text>voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Ride