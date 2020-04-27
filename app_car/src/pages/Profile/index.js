import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

function Profile({navigation}) {

    function backScreen() {
        navigation.navigate('SignIn')
    }

    return(
        <View>
            <Text>Profile</Text>
            <TouchableOpacity onPress={backScreen}>
                <Text>voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile