import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont();

function Profile({navigation}) {

    function backScreen() {
        console.log(navigation.state.params)
        navigation.navigate('SignIn')
    }

    return(
        <View style={styles.container}>
            <Text>Profile</Text>
            <TouchableOpacity onPress={backScreen}>
                <Text>voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

Profile.navigationOptions = {
    tabBarLabel: 'Perfil',
    tabBarIcon: ({tintColor}) => (
        <Icon name="account-box" size={40} color={tintColor}/>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})