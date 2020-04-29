import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

function Ride({navigation}) {

    function backScreen() {
        navigation.navigate('SignIn')
    }

    return(
        <View style={styles.container}>
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})